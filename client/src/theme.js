import { createTheme } from "@mui/material";

const theme = createTheme({

  palette: {
    primary: { main: "#343435" },

  },
  typography: {
    fontFamily: 'monospace',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 800,
  },
  components: {
    MuiCard: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...{
            padding: theme.spacing(2),
            borderWidth: "1.5px",
          },
        }),
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "md",
      },
    },
  },
});

