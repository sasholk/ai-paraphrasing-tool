"use client";
import { ThemeOptions } from "@mui/material/styles";
import { neutralColors } from "./palette";

export const textAreaStyles = {
  root: {
    "& .MuiInputBase-root": {
      paddingTop: "12px",
      paddingInline: "16px",
      backgroundColor: neutralColors[800],
      borderTopLeftRadius: "28px",
      borderTopRightRadius: "28px",
      fontWeight: 400,
      borderBottom: `1px solid ${neutralColors[600]}`,
      "& input::placeholder, & textarea::placeholder": {
        opacity: 1,
        fontWeight: 600,
        color: neutralColors[300],
      },
      "&:before": {
        borderBottom: "none",
      },
      "&:after": {
        borderBottom: "none",
      },
      "&:disabled": {
        backgroundColor: "transparent",
        borderBottom: "none",
        "&:before": {
          borderBottom: "none",
        },
        "&:after": {
          borderBottom: "none",
        },
      },
      "&:hover:not(.Mui-disabled):before": {
        borderBottom: "none",
      },
    },
  },
  afterInitial: {
    "& .MuiInputBase-root": {
      backgroundColor: "transparent",
      "&:foused": {
        backgroundColor: "transparent",
      },
      "&:hover": { backgroundColor: "transparent" },
    },
  },
};

export const components: ThemeOptions["components"] = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
        borderRadius: "512px",
        paddingBlock: "10px",
        paddingInline: "16px",
        fontWeight: 600,
        boxShadow: "none",
        lineHeight: 1,
        "&:hover": {
          boxShadow: "none",
        },
      },
      contained: {
        ":disabled": {
          backgroundColor: neutralColors[400],
          color: "#fff",
        },
      },
      containedSecondary: {
        "&:hover": {
          backgroundColor: "#cbcbcb",
        },
        "&:disabled": {
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
    styleOverrides: {
      root: {
        ...textAreaStyles.root,
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
