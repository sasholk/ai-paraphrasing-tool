"use client";
import { ThemeOptions } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

export const typography: ThemeOptions["typography"] = {
  fontFamily: inter.style.fontFamily,
  fontSize: 16,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  htmlFontSize: 16,
  h1: { fontSize: "2.75rem", letterSpacing: "-0.25px", lineHeight: "1.36" },
  h2: { fontSize: "2.25rem" },
  h3: { fontSize: "1.75rem" },
  h4: { fontSize: "1.5rem" },
  h5: { fontSize: "1.25rem" },
  h6: { fontSize: "1rem" },
  subtitle1: { fontSize: "1.375rem", fontWeight: 500 },
  subtitle2: { fontSize: "1rem", fontWeight: 500 },
  body1: { fontSize: "1rem" },
  body2: { fontSize: "0.875rem" },
  button: { fontSize: "0.875rem" },
  caption: { fontSize: "0.75rem" },
  overline: { fontSize: "0.75rem" },
};
