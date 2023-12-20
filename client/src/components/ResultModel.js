import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import { FaRegWindowClose } from "react-icons/fa";
import Typography from "@mui/material/Typography";
import { sendFormServer } from "../api/Data";
import { isLoggedIn } from "../helpers/authHelper";
import { useContext } from "react";
import { formResponseData } from "./views/Home";
import { set } from "mongoose";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { ListItemText } from "@mui/material";
import Moment from "react-moment";
import { ListItemButton } from "@mui/material";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Documents from "./Documents";
import { diseases } from "./References";

const ModelCard = ({ name, cm, rgvv, contra }) => {
  // console.log(contra);
  return (
    <Box
      sx={{
        border: 1,
        borderColor: "ActiveBorder",
        borderRadius: "5px",
        padding: "10px",
        fontSize: "10px",
      }}
    >
      <Typography
        sx={{ color: "primary.main", fontWeight: "bold", fontSize: "20px" }}
      >
        Name:{name}
      </Typography>
      <Typography
        sx={{ color: "primary.main", fontWeight: "bold", fontSize: "20px" }}
      >
        CommonName:{cm}
      </Typography>
      <Stack>
        <Typography
          sx={{
            border: 1,
            borderColor: "ActiveCaption",
            padding: "5px",
            borderRadius: "10px",
          }}
        >
          {" "}
          <Typography sx={{ color: "secondary.main", fontWeight: "bold" }}>
            rasa_guna_virya_vipaka:
          </Typography>
          {Object.entries(rgvv)?.map(([key, value], index) => (
            <Typography key={key}>
              {index + 1}.<strong>{key}</strong> :{value}
            </Typography>
          ))}
        </Typography>

        <Box>
          <Typography sx={{ color: "secondary.main", fontWeight: "bold" }}>
            Contraindications
          </Typography>
          {contra?.map((item, index) => (
            <Typography key={item}>
              {index + 1}.{item}
            </Typography>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

function getRefernce(finalData) {
  let finalRefernce = [];
  diseases.map((item) => {
    if (item.disease_name === finalData?.modern_name) {
      finalRefernce.push(item);
    }
  });
  return finalRefernce;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function ResultModel({
  finalData,
  raw,
  name,
  isDarawer,
  text,
  mom,
}) {
  console.log(finalRefernce);
  const finalRefernce = getRefernce(finalData);
  console.log(finalRefernce);
  const [open, setOpen] = React.useState(false);
  const {
    setLoading1,
    setUserHistoryData,
    setTreatmentsData,
    setx,
    x,
    disease,
    setDisease,
    setFormDataModel,
    FormDataModel,
  } = useContext(formResponseData);

  // console.log(data)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleData = async () => {
    try {
      // console.log(raw);
      raw["Disease"] = name;
      const res = await sendFormServer(raw, isLoggedIn());
      if (res.success === "true") {
        // console.log(res)
        setx((x) => !x);
        // handleClose()
      }
    } catch (e) {
      console.log(e);
    }
  };
  // console.log(finalData)

  return (
    <React.Fragment>
      {isDarawer ? (
        <>
          <ListItemButton onClick={handleClickOpen}>
            <Stack>
              {" "}
              <ListItemText sx={{ color: "primary.main" }} primary={text} />
              <Typography sx={{ color: "black", fontSize: "12px" }}>
                {" "}
                <Moment fromNow>{mom}</Moment>
              </Typography>
            </Stack>
          </ListItemButton>
        </>
      ) : (
        <>
          {" "}
          <Button
            variant="contained"
            color="success"
            sx={{ position: "absolute", bottom: "5px", right: "5px" }}
            onClick={handleClickOpen}
          >
            get Cure {">"}
          </Button>
        </>
      )}

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          sx={{
            m: 0,
            p: 2,
            color: "secondary.main",
            backgroundColor: "#F5F5DC",
          }}
        >
          {finalData?.modern_name}
          {finalData?.ayurvedic_names?.map((item) => {
            return (
              <>
                <Typography>{item}</Typography>
              </>
            );
          })}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <FaRegWindowClose />
        </IconButton>
        <DialogContent dividers sx={{ backgroundColor: "#F5F5DC" }}>
          <Box>
            <Stack>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "secondary.main",
                }}
              >
                Description
              </Typography>
              <Typography sx={{ borderBottom: 1, borderColor: "ActiveBorder" }}>
                {" "}
                {finalData?.description}
              </Typography>
            </Stack>
            <Stack>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "secondary.main",
                }}
              >
                Doshic Imbalance
              </Typography>
              <Typography sx={{ borderColor: "ActiveBorder" }}>
                <strong>Primary:</strong> {finalData?.doshic_imbalance?.primary}
              </Typography>
              <Typography sx={{ borderBottom: 1, borderColor: "ActiveBorder" }}>
                <strong>Secondary:</strong>{" "}
                {finalData?.doshic_imbalance?.secondary?.map((item) => {
                  return (
                    <>
                      <Typography>{item}</Typography>
                    </>
                  );
                })}
              </Typography>
            </Stack>
            <Stack>
              {finalData?.warning === undefined ? (
                <>
                  <Stack>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "secondary.main",
                      }}
                    >
                      Formulations({finalData?.formulations?.length})
                    </Typography>

                    {finalData?.formulations?.map((item) => {
                      return (
                        <>
                          <ModelCard
                            name={item?.name}
                            cm={item?.common_name}
                            rgvv={item?.rasa_guna_virya_vipaka}
                            contra={item?.contraindications}
                          />
                        </>
                      );
                    })}
                  </Stack>
                  <Stack>
                    <Typography
                      variant="h5"
                      sx={{ borderBottom: 1, borderColor: "ActiveBorder" }}
                    >
                      <strong>References</strong>
                    </Typography>
                    {finalRefernce[0]?.references.map((item) => {
                      return (
                        <>
                          <Typography>
                            <strong>*</strong>
                            {item}
                          </Typography>
                        </>
                      );
                    })}
                  </Stack>
                </>
              ) : (
                <>
                  <Typography
                    sx={{ fontWeight: "bold", fontSize: "20px", color: "red" }}
                  >
                    Warning:<Typography> {finalData?.warning}</Typography>
                  </Typography>
                </>
              )}
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions sx={{ display: "flex", gap: "0.5rem" }}>
          <PDFDownloadLink
            document={<Documents />}
            fileName="somename.pdf"
            style={{ textDecoration: "none" }}
          >
            {({ loading }) =>
              loading ? (
                "Loading document..."
              ) : (
                <Button autoFocus variant="outlined" disabled={!raw}>
                  Download
                </Button>
              )
            }
          </PDFDownloadLink>
          <Button
            autoFocus
            onClick={handleData}
            variant="contained"
            disabled={!raw}
          >
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
