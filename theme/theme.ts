"use client";
import { createTheme } from "@mui/material/styles";
import { typography } from "./typography";
import { palette } from "./palette";
import { components } from "./components";

export const theme = createTheme({
  typography,
  palette,
  components,
});

export default theme;
