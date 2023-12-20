// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Box, Stack } from '@mui/material';




// export default function Accord({ name, cm, rgvv, contra }) {
//     return (
//         <div>
//             <Accordion>
//                 <AccordionSummary
//                     expandIcon={<ExpandMoreIcon />}
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                 >
//                     <Typography
//                         sx={{ color: "primary.main", fontWeight: "bold", fontSize: "20px" }}
//                     >
//                         Name:{name}
//                     </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                     <Box
//                         sx={{
//                             border: 1,
//                             borderColor: "ActiveBorder",
//                             borderRadius: "5px",
//                             padding: "10px",
//                             fontSize: "10px",
//                         }}
//                     >

//                         <Typography
//                             sx={{ color: "primary.main", fontWeight: "bold", fontSize: "20px" }}
//                         >
//                             CommonName:{cm}
//                         </Typography>
//                         <Stack>
//                             <Typography
//                                 sx={{
//                                     border: 1,
//                                     borderColor: "ActiveCaption",
//                                     padding: "5px",
//                                     borderRadius: "10px",
//                                 }}
//                             >
//                                 {" "}
//                                 <Typography sx={{ color: "secondary.main", fontWeight: "bold" }}>
//                                     rasa_guna_virya_vipaka:
//                                 </Typography>
//                                 {Object.entries(rgvv)?.map(([key, value], index) => (
//                                     <Typography key={key}>
//                                         {index + 1}.<strong>{key}</strong> :{value}
//                                     </Typography>
//                                 ))}
//                             </Typography>

//                             <Box>
//                                 <Typography sx={{ color: "secondary.main", fontWeight: "bold" }}>
//                                     Contraindications
//                                 </Typography>
//                                 {contra?.map((item, index) => (
//                                     <Typography key={item}>
//                                         {index + 1}.{item}
//                                     </Typography>
//                                 ))}
//                             </Box>
//                         </Stack>
//                     </Box>
//                 </AccordionDetails>
//             </Accordion>

//         </div>
//     );
// }