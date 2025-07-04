"use client";
import { Typography, Stack } from "@mui/material";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => (
  <Stack textAlign="center" mb={5} gap={2}>
    <Typography variant="h1" fontWeight={700}>
      {title}
    </Typography>
    <Typography variant="subtitle1">{subtitle}</Typography>
  </Stack>
);
