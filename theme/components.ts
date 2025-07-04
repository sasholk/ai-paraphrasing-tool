"use client";
import { ThemeOptions } from "@mui/material/styles";
import { neutralColors } from "./palette";

export const components: ThemeOptions["components"] = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: "512px",
        paddingBlock: 14,
        paddingInline: 16,
        fontWeight: 600,
      },
      contained: {
        ":disabled": {
          backgroundColor: neutralColors[400],
          color: "#fff",
        },
      },
      outlined: {
        borderColor: neutralColors[600],
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
        maxHeight: "311px",
        "& .MuiInputBase-root": {
          backgroundColor: "transparent",
          borderTopLeftRadius: "28px",
          borderTopRightRadius: "28px",
          fontWeight: 400,
          paddingTop: 12,
          paddingInline: 16,
          borderBottom: `1px solid ${neutralColors[600]}`,
          "&:before": {
            borderBottom: "none",
          },
          "&:after": {
            borderBottom: "none",
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
        },
        "& .MuiFilledInput-root": {
          backgroundColor: neutralColors[800],
          // borderTopLeftRadius: "28px",
          // borderTopRightRadius: "28px",
          "&:before": {
            borderBottom: "none",
          },
          "&:after": {
            borderBottom: "none",
          },
          "& input::placeholder, & textarea::placeholder": {
            opacity: 1,
            fontWeight: 600,
            color: neutralColors[300],
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: "none",
          },
          "&.Mui-focused": {
            backgroundColor: neutralColors[800],
            // borderTopLeftRadius: "28px",
            // borderTopRightRadius: "28px",
          },
        },
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: "1112px",
        "@media (min-width:600px)": {
          paddingLeft: "24px",
          paddingRight: "24px",
        },
      },
    },
    defaultProps: {
      maxWidth: false,
    },
  },
};
