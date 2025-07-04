"use client";
import { ThemeOptions } from "@mui/material/styles";

export const neutralColors = {
  300: "#76777A",
  400: "#AEAFB1",
  600: "#DBDCDF",
  800: "#EEF0F5",
} as const;

declare module "@mui/material/styles" {
  interface Palette {
    neutral: typeof neutralColors;
  }
  interface PaletteOptions {
    neutral?: typeof neutralColors;
  }
}

export const palette: ThemeOptions["palette"] = {
  mode: "light",
  primary: { main: "#3B5AAE" },
  neutral: neutralColors,
};
