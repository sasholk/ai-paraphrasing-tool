"use client";
import { ThemeOptions } from "@mui/material/styles";

export const components: ThemeOptions["components"] = {
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
          fontWeight: 400,
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
          "& input::placeholder, & textarea::placeholder": {
            opacity: 1,
            fontWeight: 600,
            color: "#76777A",
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
};
