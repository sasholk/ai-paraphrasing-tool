"use client";
import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const theme = createTheme({
  typography: { fontFamily: inter.style.fontFamily },
  palette: {
    mode: "light",
    primary: { main: "#3B5AAE" },
    form: {
      main: "#fff",
      contrastText: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "512px",
        },
        outlined: {
          borderColor: "#DBDCDF",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "filled",
      },
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          borderRadius: "28px",
          "& .MuiInputBase-root": {
            backgroundColor: "transparent",
            borderTopLeftRadius: "28px",
            borderTopRightRadius: "28px",
            "&:before": {
              borderBottom: "none",
            },
            "&:after": {
              borderBottom: "none",
            },
            "&:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "&.Mui-focused": {
              backgroundColor: "transparent",
              borderTopLeftRadius: "28px",
              borderTopRightRadius: "28px",
            },
          },
          "& .MuiFilledInput-root": {
            backgroundColor: "#EEF0F5",
            borderTopLeftRadius: "28px",
            borderTopRightRadius: "28px",
            "&:before": {
              borderBottom: "none",
            },
            "&:after": {
              borderBottom: "none",
            },
            "&:hover:not(.Mui-disabled):before": {
              borderBottom: "none",
            },
            "&.Mui-focused": {
              backgroundColor: "#EEF0F5",
              borderTopLeftRadius: "28px",
              borderTopRightRadius: "28px",
            },
          },
        },
      },
    },
  },
});
export default theme;
