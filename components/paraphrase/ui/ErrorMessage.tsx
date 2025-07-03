"use client";
import { Alert } from "@mui/material";
import { useParaphraserStore } from "@/stores/paraphraser";

export const ErrorMessage = () => {
  const { uiState, error } = useParaphraserStore();
  if (uiState !== "error") return null;

  return (
    <Alert severity="error" sx={{ mt: 2 }}>
      {error}
    </Alert>
  );
};
