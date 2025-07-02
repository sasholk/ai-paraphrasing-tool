"use client";
import { TextField, Button, Stack } from "@mui/material";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

export default function ParaphraseForm() {
  const { register, watch, reset } = useForm({ defaultValues: { text: "" } });
  const text = watch("text");
  const [isPending, startTransition] = useTransition();

  const paraphrase = async () => {
    startTransition(async () => {
      const res = await fetch("/api/paraphrase", {
        method: "POST",
        body: JSON.stringify({ text }),
      });
      // handle redirect to /success with response data
    });
  };

  return (
    <Stack spacing={2}>
      <TextField multiline minRows={6} fullWidth {...register("text")} placeholder="Paste or write text here" />
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={() => reset()} disabled={!text}>
          Clear input
        </Button>
        <Button variant="contained" onClick={paraphrase} disabled={!text || isPending}>
          {isPending ? "Loading…" : "Paraphrase"}
        </Button>
      </Stack>
    </Stack>
  );
}
