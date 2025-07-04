"use client";
import { Stack, Button } from "@mui/material";
import { useParaphraserStore } from "@/stores/paraphraser";
import ClearIconRounded from "@mui/icons-material/ClearRounded";
import { useCallback } from "react";
import { paraphraseText } from "@/lib/api/paraphrase";

export const Toolbar = () => {
  const { uiState, input, reset, setUiState, setResult, setError } = useParaphraserStore();

  const paraphrase = useCallback(() => {
    setUiState("loading");
    paraphraseText(input)
      .then(setResult)
      .catch(e => setError(e.message));
  }, [input, setUiState, setResult, setError]);

  return (
    <Stack direction="row" spacing={2} p={1} justifyContent="end">
      {uiState === "editing" && (
        <Button variant="outlined" onClick={reset} startIcon={<ClearIconRounded />}>
          Clear input
        </Button>
      )}

      <Button variant="contained" disabled={!input.trim() || uiState === "loading"} onClick={paraphrase}>
        {uiState === "loading" ? "Paraphrasing" : "Paraphrase"}
      </Button>
    </Stack>
  );
};
