import "@mui/material";
import "react-icons";
import "react-icons/bi";
import "react-icons/md";
import "react-icons/bs";
import "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import {
  BrowserRouter,
  Route,
  Routes,
  useParams,
  useSearchParams,
} from "react-router-dom";
import theme from "./theme";
import LandingView from "./components/views/LandingView";
import PostView from "./components/views/PostView";
import CreatePostView from "./components/views/CreatePostView";
import ProfileView from "./components/views/ProfileView";
import LoginView from "./components/views/LoginView";
import SignupView from "./components/views/SignupView";
import ExploreView from "./components/views/ExploreView";
import PrivateRoute from "./components/PrivateRoute";
import SearchView from "./components/views/SearchView";
import MessengerView from "./components/views/MessengerView";
import { initiateSocketConnection, socket } from "./helpers/socketHelper";
import { useEffect } from "react";
import { BASE_URL } from "./config";
import { io } from "socket.io-client";
import { createTheme } from "@mui/material";
import Home from "./components/views/Home";
import ImageRecognition from "./components/views/ImageRecognition";
import Download from "./components/views/Download";
// import Quiz from "./components/views/QuizMain";
// import QuizMain from "./components/views/QuizMain";
import Quiz from "./components/Quiz/Quiz"

const ntheme = createTheme({
  palette: {
    primary: { main: "#0AA01C " },
    secondary: { main: "#2e4450 " },
  },
  typography: {
    fontFamily: "monospace",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 800,
  },
  avatar: {
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
});

function App() {
  initiateSocketConnection();

  return (
    <ThemeProvider theme={ntheme}>
      <BrowserRouter>
        <CssBaseline />

        <Routes>
          <Route path="/dosha" element={<Quiz />} />
          <Route path="/" element={<LandingView />} />
          <Route path="/imagerecogntion" element={<ImageRecognition />} />
          <Route path="/download" element={<Download />} />

          <Route
            path="/prediction"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/question"
            element={
              <PrivateRoute>
                <ExploreView />
              </PrivateRoute>
            }
          />
          <Route path="/posts/:id" element={<PostView />} />
          <Route
            path="/posts/create"
            element={
              <PrivateRoute>
                <CreatePostView />
              </PrivateRoute>
            }
          />
          <Route
            path="/messenger"
            element={
              <PrivateRoute>
                <MessengerView />
              </PrivateRoute>
            }
          />
          <Route path="/search" element={<SearchView />} />
          <Route path="/users/:id" element={<ProfileView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<SignupView />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
