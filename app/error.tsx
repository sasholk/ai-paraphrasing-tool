"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface ErrorProps {
  statusCode?: number;
}

export default function Error({ statusCode }: ErrorProps) {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Error {statusCode || "500"}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {statusCode ? `An error ${statusCode} occurred on the server` : "An internal server error occurred"}
      </Typography>
    </Box>
  );
}
