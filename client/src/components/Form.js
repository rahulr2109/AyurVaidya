import React, { useState } from 'react';
import { Box, Grid, TextField, MenuItem, Autocomplete, Chip, Button, emphasize } from '@mui/material';
import { sendForm } from "../api/Data"
import { isLoggedIn } from '../helpers/authHelper';

const Form = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [severity, setSeverity] = useState('');
    const [FormData, setFormData] = useState({
        Age: "",
        Gender: "",
        Severity: "",
        SelectedOptions: []

    });
    const [ServerError, setServerError] = useState("");



    const dummyArray = [
        "Dummy Entry 1",
        "Dummy Entry 2",
        "Dummy Entry 3",
        // ... rest of the dummy entries
        "Dummy Entry 49",
        "Dummy Entry 50"
    ];

    const handleChipInputChange = (event, value) => {
        setSelectedOptions(value);
    };

    const handleSubmit = async (e) => {
        // Perform submit logic here
        // console.log("Age:", age);
        // console.log("Gender:", gender);
        // console.log("Severity:", severity);

        setFormData(
            {
                Age: age,
                Gender: gender,
                Severity: severity,
                Symptoms: selectedOptions
            }

        );
        const data = await sendForm(FormData, isLoggedIn());

    };

    return (
        <Box className='form' sx={{ padding: "10px" }}>
            <Grid container spacing={5} justifyContent="center" alignItems="center">
                <Grid item xs={6}>
                    <TextField
                        label="Age"
                        variant="standard"
                        fullWidth
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        select
                        label="Gender"
                        variant="standard"
                        fullWidth
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        select
                        label="Severity"
                        variant="standard"
                        fullWidth
                        value={severity}
                        onChange={(e) => setSeverity(e.target.value)}
                    >
                        <MenuItem value="low">Low</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="high">High</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Autocomplete
                        multiple
                        options={dummyArray}
                        value={selectedOptions}
                        onChange={handleChipInputChange}
                        renderTags={(value, getTagProps) =>
                            value.map((option, index) => (
                                <Chip variant="standard" label={option} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Symptoms"
                                variant="standard"

                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} alignSelf={"center"} >
                    <Button variant="contained" fullWidth onClick={handleSubmit} sx={{
                        backgroundColor: "secondary.main", color: "#A3CB9A", ":hover": {

                            backgroundColor: "#A3CB9A", color: "#3C3C3C"
                        }
                    }}>Submit</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Form;
