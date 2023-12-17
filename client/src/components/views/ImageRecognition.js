import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { InputLabel } from '@mui/material'
import { FaUpload } from "react-icons/fa";
import { imageRecognition } from '../../api/Data'
import { Avatar } from '@mui/material'
import Loading from '../Loading'


const ImageRecognition = () => {
    const [suck, setSuck] = useState(0);
    const [Image, setImage] = useState("");
    const [file, setFile] = useState("");
    const [Load, setLoad] = useState(false);
    const [ans, setAns] = useState(false);
    async function imageUploader(event) {
        setSuck(1);
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
            setSuck(2);
            setLoad(false)
            if (response.data.secure_url) {
                setImage(response.data.secure_url);

            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoad(true);
        const image_link = Image;
        // console.log(image_link);
        const data = await imageRecognition(image_link);

        if (data) {
            // console.log(data)
            setAns(data);
            setLoad(false);
        }
    }





    return (
        <Container>
            <Navbar />
            <Box sx={{ border: 1, height: "85vh", borderRadius: "10px", display: "flex", flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" }, borderColor: "ActiveBorder" }}>
                <Box className='image' sx={{ flex: { lg: 2, md: 2, sm: 1, xs: 1 }, height: "100%", width: "100%", borderRight: 1, borderColor: "ActiveBorder", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#F5F5DC", borderRadius: "10px" }}>
                    {Image ? <Avatar src={Image}
                        sx={{
                            width: { lg: "90%", md: "80%", sm: "90%", xs: "90%" },
                            height: { lg: "90%", md: "80%", sm: "90%", xs: "90%" },
                            border: 1,
                            borderColor: "ActiveBorder",
                            borderRadius: "10px",


                        }}

                    /> : <Box src={Image}
                        sx={{
                            width: { lg: "90%", md: "80%", sm: "90%", xs: "90%" },
                            height: { lg: "90%", md: "80%", sm: "90%", xs: "90%" },
                            border: 1,
                            borderColor: "ActiveBorder",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "10px"

                        }}

                    > <Typography sx={{ fontSize: { lg: "25px", md: "30px", sm: "15px", xs: "15px" }, color: "primary.main", fontWeight: "bold" }}>Please select the image .</Typography>
                    </Box>}

                </Box>

                <Box className='body' sx={{ flex: { lg: 1, md: 1, sm: 1, xs: 1 }, height: "100%", width: "100%", backgroundColor: "#BCD9B6" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <Typography sx={{ fontWeight: "bold", color: "secondary.main", fontSize: { lg: "35px", md: "30px", sm: "25px", xs: "25px" }, borderBottom: 1 }}> Herb Recognition</Typography>
                    </Box>
                    <Stack component={"form"} direction={"row"} onSubmit={handleSubmit} sx={{ height: "30%", width: "100%", display: "flex", justifyContent: "center" }}>
                        <InputLabel htmlFor="upload-photo" style={{ width: "35%", textAlign: "center", color: "#BCD9B6", backgroundColor: "#2E4450", height: "42px", padding: "20px", marginTop: "1rem" }} sx={{ display: "flex", justifyContent: "center", gap: "0.2rem", alignItems: "center", borderRadius: "5px", ":hover": { filter: 'brightness(0.6)' } }}>Upload Herb</InputLabel>
                        <TextField
                            id="upload-photo"
                            itemID="upload-photo"
                            type="file"
                            sx={{ mt: "1rem", color: 'black', backgroundColor: 'black', display: "none" }}
                            onChange={imageUploader}
                            fullWidth
                            label="upload Image"
                        >
                            <Button sx={{ color: "white", width: "30%", height: "30%" }} >Hello</Button>
                        </TextField>
                        <Button type='submit' variant={"contained"} sx={{ width: "30%", height: "42px", ":hover": { filter: 'brightness(0.6)' }, mt: "1rem", ml: "6px" }} disabled={Load}>Recognize</Button>


                    </Stack>
                    {/* <Box sx={}/> */}
                    <Container className='ansBlock' sx={{ border: 1, borderColor: "ActiveBorder", borderRadius: "5px" }}>


                        {Load ? <Loading label={"Recognising..."} /> : <><Typography sx={{ width: "100%", textAlign: "center", fontSize: { lg: "35px", md: "30px", sm: "25px", xs: "25px" } }}>
                            <strong> {ans.image}</strong>
                        </Typography></>}
                    </Container>

                </Box>
            </Box>
        </Container >
    )
}

export default ImageRecognition