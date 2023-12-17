import {
  Alert,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/users";
import ErrorAlert from "../ErrorAlert";
import { loginUser } from "../../helpers/authHelper";


const LoginView = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login(formData);
    if (data.error) {
      setServerError(data.error);
    } else {
      loginUser(data);
      navigate("/");
    }
  };

  return (
    <Container sx={{ mt: { xs: 2, md: 6 }, backgroundColor: "#BCD9B6", padding: "9px", borderRadius: "10px", boxShadow: "5px 20px 50px 0px rgba(0,0,0,0.5)", maxWidth: { lg: "30vw", md: "40vw", sm: "80vw", xs: "90vw" } }}>
      <Stack alignItems="center">
        <Typography
          sx={{ fontWeight: "bold", mb: "5px", fontSize: "50px", fontFamily: "monospace" }}

        >
          {/* <Link to="/" color="inherit"> */}
          <Link to="/" color="inherit" style={{ color: "#87AD3F", textDecoration: "none" }}>
            AyurVaidya
          </Link>
        </Typography>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            autoComplete="email"
            autoFocus
            required
            id="email"
            name="email"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            fullWidth
            required
            margin="normal"
            id="password  "
            name="password"
            onChange={handleChange}
            type="password"
          />

          <ErrorAlert error={serverError} />
          <Button type="submit" fullWidth variant="contained" sx={{ my: 2, ":hover": { filter: 'brightness(0.6)' }, backgroundColor: "secondary.main" }}>
            Login
          </Button>
        </Box>
        <Typography color="text.secondary">
          Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Stack>
    </Container >
  );
};

export default LoginView;
