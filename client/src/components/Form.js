import React, { useState } from 'react';
import { Box, Grid, TextField, MenuItem, Autocomplete, Chip, Button } from '@mui/material';

const Form = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [severity, setSeverity] = useState('');

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

    const handleSubmit = () => {
        // Perform submit logic here
        console.log("Age:", age);
        console.log("Gender:", gender);
        console.log("Severity:", severity);
        console.log("Selected Options:", selectedOptions);
    };

    return (
        <Box>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={6}>
                    <TextField
                        label="Age"
                        variant="outlined"
                        fullWidth
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        select
                        label="Gender"
                        variant="outlined"
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
                        variant="outlined"
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
                                <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                            ))
                        }
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Dropdown"
                                variant="outlined"

                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12} alignSelf={"center"} >
                    <Button variant="contained" fullWidth onClick={handleSubmit} sx={{
                        backgroundColor: "#8ABC3D", color: "#3C3C3C", ":hover": {
                            backgroundColor: "#3C3C3C", color: "#8ABC3D"
                        }
                    }}>Submit</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Form;
