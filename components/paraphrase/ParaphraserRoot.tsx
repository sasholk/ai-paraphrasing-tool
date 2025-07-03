"use client";
import { Box, FormGroup } from "@mui/material";
import { Header } from "./ui/Header";
import { TextArea } from "./ui/TextArea";
import { Result } from "./ui/Result";
import { Toolbar } from "./ui/Toolbar";
import { ErrorMessage } from "./ui/ErrorMessage";
import { useParaphraserStore } from "@/stores/paraphraser";
import { useEffect, useState } from "react";
import { getCmsClient } from "@/lib/cms/client";

export default function ParaphraserRoot() {
  const { uiState } = useParaphraserStore();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    (async () => {
      const cms = await getCmsClient();
      const content = await cms.getLandingContent();
      setTitle(content.title);
      setSubtitle(content.subtitle);
    })();
  }, []);

  return (
    <Box maxWidth={900} mx="auto" px={2} py={6}>
      <Header title={title} subtitle={subtitle} />
      <FormGroup sx={{ paddingBottom: 2, border: "1px solid #DBDCDF", borderRadius: "28px" }}>
        {uiState !== "success" && <TextArea />}
        {uiState === "success" && <Result />}
        <Toolbar />
      </FormGroup>

      {uiState === "error" && <ErrorMessage />}
    </Box>
  );
}
