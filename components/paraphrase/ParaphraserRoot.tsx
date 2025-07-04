"use client";
import { Box, FormGroup } from "@mui/material";
import { Header } from "./ui/Header";
import { TextArea } from "./ui/TextArea";
import { Result } from "./ui/Result";
import { Toolbar } from "./ui/Toolbar";
import { ErrorMessage } from "./ui/ErrorMessage";
import { useParaphraserStore } from "@/stores/paraphraser";
import { useEffect } from "react";
import { neutralColors } from "@/theme/palette";
import { useLandingContent } from "./hooks/useLandingContent";
import Loading from "@/app/loading";

export default function ParaphraserRoot() {
  const { uiState, setUiState } = useParaphraserStore();
  const { title, subtitle, loading: isLoadingContent } = useLandingContent();

  useEffect(() => {
    setUiState("initial");
  }, [setUiState]);

  const isSuccess = uiState === "success";

  if (isLoadingContent) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Loading size={56} />
      </Box>
    );
  }

  return (
    <Box my={4}>
      <Header title={title} subtitle={subtitle} />

      <FormGroup sx={{ border: `1px solid ${neutralColors[600]}`, borderRadius: "28px" }}>
        {isSuccess ? <Result /> : <TextArea />}
        {!isSuccess && <Toolbar />}
      </FormGroup>

      {uiState === "error" && <ErrorMessage />}
    </Box>
  );
}
