"use client";
import { Box, Typography } from "@mui/material";
import { useParaphraserStore } from "@/stores/paraphraser";

export const Result = () => {
  const { uiState, result } = useParaphraserStore();

  if (uiState !== "success") return null;

  return (
    <Box mt={2} textAlign="left" border={1} p={2} borderRadius={2} bgcolor="#fafafa">
      {result.split("\n\n").map((p, i) => (
        <Typography key={i} gutterBottom whiteSpace="pre-line">
          {p}
        </Typography>
      ))}
    </Box>
  );
};
