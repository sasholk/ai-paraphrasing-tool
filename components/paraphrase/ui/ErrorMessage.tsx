"use client";
import { Typography } from "@mui/material";
import { useParaphraserStore } from "@/stores/paraphraser";

export const ErrorMessage = () => {
  const { uiState, error } = useParaphraserStore();
  if (uiState !== "error") return null;

  return (
    <Typography variant="body1" sx={{ mt: 1, mr: 2 }} color="error">
      {error}
    </Typography>
  );
};
