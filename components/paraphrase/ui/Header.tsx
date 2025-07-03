"use client";
import { Typography, Stack } from "@mui/material";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => (
  <Stack textAlign="center" mb={4}>
    <Typography variant="h5" fontWeight={600}>
      {title}
    </Typography>
    <Typography variant="subtitle1">{subtitle}</Typography>
  </Stack>
);
