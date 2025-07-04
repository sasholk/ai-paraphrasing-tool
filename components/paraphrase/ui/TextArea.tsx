"use client";
import { TextField, InputAdornment } from "@mui/material";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ArticleIcon from "@mui/icons-material/Article";
import { useParaphraserStore } from "@/stores/paraphraser";
import { FormButton } from "@/components/ui/FormButton";
import { SAMPLE_TEXT } from "@/utils/constants";

export const TextArea = () => {
  const { input, setInput, uiState, setError } = useParaphraserStore();

  if (uiState === "success") return null;

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInput(text);
    } catch {
      setError("Failed to read clipboard");
    }
  };

  const fillSample = () => setInput(SAMPLE_TEXT);

  const adornment =
    uiState === "initial" ? (
      <InputAdornment
        position="end"
        sx={{ position: "absolute", right: "50%", transform: "translateX(50%)", gap: 2, maxWidth: 400, width: "100%" }}
      >
        <FormButton onClick={pasteFromClipboard}>
          <ContentPasteIcon />
          Paste text
        </FormButton>

        <FormButton onClick={fillSample}>
          <ArticleIcon />
          Sample text
        </FormButton>
      </InputAdornment>
    ) : null;

  return (
    <TextField
      variant={uiState === "initial" ? "filled" : "standard"}
      disabled={uiState === "loading"}
      multiline
      rows={12}
      fullWidth
      value={input}
      onChange={e => setInput(e.target.value)}
      placeholder="Enter text here or upload file to humanize it."
      slotProps={{
        input: { endAdornment: adornment },
      }}
    />
  );
};
