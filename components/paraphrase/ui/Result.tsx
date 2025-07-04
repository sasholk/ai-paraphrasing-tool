"use client";
import { Box, Typography } from "@mui/material";
import { useParaphraserStore } from "@/stores/paraphraser";

export const Result = () => {
  const { uiState, result } = useParaphraserStore();

  if (uiState !== "success") return null;

  return (
    <Box textAlign="left" borderRadius="28px" maxHeight="403px" overflow="auto" mr={2} my={2} px={2}>
      {result.split("\n\n").map((p, i) => (
        <Typography key={i} gutterBottom whiteSpace="pre-line">
          {p}
        </Typography>
      ))}
    </Box>
  );
};
