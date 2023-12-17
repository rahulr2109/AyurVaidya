import React, { useState } from 'react';
import { Box, Grid, TextField, MenuItem, Autocomplete, Chip, Button, emphasize } from '@mui/material';
import { sendForm } from "../api/Data"
import { isLoggedIn } from '../helpers/authHelper';
import { useContext } from 'react';
import { formResponseData } from './views/Home';
import { symptoms_list } from './contstants/constant';
import { sendFormServer } from '../api/Data';
import { Container } from '@mui/material';




const Form = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [severity, setSeverity] = useState('');
    // const [Dieseas, setDieases] = useState("");
    const { setLoading1, setUserHistoryData, setTreatmentsData, setx, x, disease, setDisease, setFormDataModel, FormDataModel } = useContext(formResponseData);


    const [FormData, setFormData] = useState({
        Age: "",
        Gender: "",
        Severity: "",
        SelectedOptions: []
    });
    const [ServerError, setServerError] = useState("");


    const handleChipInputChange = (event, value) => {
        setSelectedOptions(value);
    };

    React.useEffect(() => {
        setFormData(
            {
                Age: age,
                Gender: gender,
                Severity: severity,
                Symptoms: selectedOptions
            }
        );

    }, [selectedOptions, age, gender, severity]);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading1(true);
        try {
            const newData = await sendForm(FormData);
            // console.log(FormData)
            if (newData) {
                // setTreatmentsData(newData);
                setLoading1(false);
                setDisease(newData)

                // console.log(newData)
                // console.log(disease)
                // console.log(newData)
                setFormDataModel(FormData)
                setx((x) => !x)
                // console.log(newData)

            }
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <Container className='form' sx={{ padding: "10px", boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.1)", overflowY: "scroll" }}>
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
                        options={symptoms_list}
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
        </Container>
    );
};

export default Form;
