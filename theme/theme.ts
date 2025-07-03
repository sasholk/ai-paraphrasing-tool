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
  },
});
export default theme;
