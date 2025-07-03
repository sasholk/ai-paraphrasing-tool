"use client";
import { Stack, Button } from "@mui/material";
import { useParaphraserStore } from "@/stores/paraphraser";

export const Toolbar = () => {
  const { uiState, input, reset, setUiState, setResult, setError } = useParaphraserStore();

  const paraphrase = async () => {
    setUiState("loading");
    try {
      const res = await fetch("/api/paraphrase", {
        method: "POST",
        body: JSON.stringify({ text: input }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setResult(data.result);
    } catch (e) {
      const error = e as Error;
      setError(error.message || "Server error");
    }
  };

  return (
    <Stack direction="row" spacing={2} mt={2} mr={2} justifyContent="end">
      {uiState === "editing" && (
        <Button variant="outlined" onClick={reset}>
          Clear
        </Button>
      )}

      <Button
        variant="contained"
        disabled={!input.trim() || uiState === "loading"}
        onClick={paraphrase}
        sx={{ minWidth: 120, borderRadius: 28 }}
      >
        {uiState === "loading" ? "Paraphrasing" : "Paraphrase"}
      </Button>
    </Stack>
  );
};
