"use client";
import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const theme = createTheme({
  typography: { fontFamily: inter.style.fontFamily },
  palette: { mode: "light", primary: { main: "#3B5AAE" } },
});
export default theme;
