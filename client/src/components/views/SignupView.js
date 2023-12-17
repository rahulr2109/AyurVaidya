import {
  Button,
  Container,
  Stack,
  TextField,
  Typography,
  InputLabel,
  Alert,
} from "@mui/material";
import Fab from '@mui/material/Fab';
import { Box } from "@mui/system";
import React, { useState } from "react";
import { signup } from "../../api/users";
import { loginUser } from "../../helpers/authHelper";
import { useNavigate } from "react-router-dom";

import ErrorAlert from "../ErrorAlert";
import { isLength, isEmail, contains } from "validator";
import axios from "axios";
import { Link } from "react-router-dom"
import { grey } from "@mui/material/colors";

const SignupView = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const [suck, setSuck] = useState(false);


  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    profile: "",
  });
  async function imageUploader(event) {
    setSuck(false);
    setFile(event.target.files[0].name);

    const formdata = new FormData();
    formdata.append("file", event.target.files[0]);
    formdata.append("ml_default", "image");

    formdata.append("upload_preset", "new-upload");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dfd7uzelx/image/upload",
        formdata
      );
      setImage(response.data.secure_url);
      if (response.data.secure_url) {

        setSuck(true);
      }
    } catch (error) {
      console.error(error);
    }
  }



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    if (Object.keys(errors).length !== 0) return;
    // console.log(image);
    formData.profile = image;
    const data = await signup(formData);

    if (data.error) {
      setServerError(data.error);
    } else {
      loginUser(data);
      navigate("/");
    }
  };

  const validate = () => {
    const errors = {};

    if (!isLength(formData.username, { min: 6, max: 30 })) {
      errors.username = "Must be between 6 and 30 characters long";
    }

    if (contains(formData.username, " ")) {
      errors.username = "Must contain only valid characters";
    }

    if (!isLength(formData.password, { min: 8 })) {
      errors.password = "Must be at least 8 characters long";
    }

    if (!isEmail(formData.email)) {
      errors.email = "Must be a valid email address";
    }

    setErrors(errors);

    return errors;
  };

  return (
    <Container sx={{ mt: { xs: 2, md: 6 }, backgroundColor: "#BCD9B6", padding: "10px", borderRadius: "10px", boxShadow: "5px 20px 50px 0px rgba(0,0,0,0.5)", maxWidth: { lg: "30vw", md: "40vw", sm: "80vw", xs: "90vw" } }}>
      <Stack alignItems="center" >
        <Typography variant="h2" color="text.secondary" sx={{ mb: 6 }}>
          <Typography
            sx={{ fontWeight: "bold", mb: "5px", fontSize: "50px", fontFamily: "monospace" }}

          >
            {/* <Link to="/" color="inherit"> */}
            <Link to="/" color="inherit" style={{ color: "#87AD3F", textDecoration: "none" }}>
              AyurVaidya
            </Link>
          </Typography>
          {/* </Link> */}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            autoFocus
            required
            id="username"
            name="username"
            onChange={handleChange}
            error={errors.username !== undefined}
            helperText={errors.username}
          />
          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            autoComplete="email"
            required
            id="email"
            name="email"
            onChange={handleChange}
            error={errors.email !== undefined}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            fullWidth
            required
            margin="normal"
            autoComplete="password"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            error={errors.password !== undefined}
            helperText={errors.password}
          />
          <InputLabel htmlFor="upload-photo" style={{ width: "100%", textAlign: "center", color: "white", backgroundColor: "gray", height: "42px", padding: "10px", marginTop: "1rem" }} sx={{ ":hover": { filter: 'brightness(0.6)' } }}>Upload Profile Picture</InputLabel>
          <TextField
            id="upload-photo"
            itemID="upload-photo"
            type="file"
            sx={{ mt: "1rem", color: 'black', backgroundColor: 'black', display: "none" }}
            onChange={imageUploader}
            fullWidth
            label="upload Image"
          >
            <Button sx={{ color: "white" }} fullWidth>Hello</Button>
          </TextField>
          <ErrorAlert error={serverError} />
          <Button type="submit" fullWidth variant="contained" sx={{ my: 2, ":hover": { filter: 'brightness(0.6)' }, backgroundColor: "secondary.main" }} disabled={!suck} >
            Sign Up
          </Button>
        </Box>
        <Typography color="text.secondary">
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Stack>
    </Container>
  );
};

export default SignupView;
