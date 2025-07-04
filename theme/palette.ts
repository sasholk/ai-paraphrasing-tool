"use client";
import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    form: Palette["primary"];
  }
  interface PaletteOptions {
    form?: PaletteOptions["primary"];
  }
}

export const palette: ThemeOptions["palette"] = {
  mode: "light",
  primary: { main: "#3B5AAE" },
  form: {
    main: "#fff",
    contrastText: "#fff",
  },
};
