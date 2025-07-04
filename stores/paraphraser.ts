import { create } from "zustand";

type UiState = "initial" | "editing" | "loading" | "success" | "error";

interface ParaphraserState {
  uiState: UiState;
  input: string;
  result: string;
  error: string;
  setInput: (text: string) => void;
  setResult: (text: string) => void;
  setError: (message: string) => void;
  setUiState: (state: UiState) => void;
  reset: () => void;
}

export const useParaphraserStore = create<ParaphraserState>(set => ({
  uiState: "loading",
  input: "",
  result: "",
  error: "",
  setInput: text =>
    set(() => ({
      input: text,
      uiState: text.trim() ? "editing" : "initial",
    })),
  setResult: result => set(() => ({ result, uiState: "success" })),
  setError: error => set(() => ({ error, uiState: "error" })),
  setUiState: uiState => set(() => ({ uiState })),
  reset: () =>
    set(() => ({
      input: "",
      result: "",
      error: "",
      uiState: "initial",
    })),
}));
