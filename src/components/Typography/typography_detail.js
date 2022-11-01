import React from "react";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
export function TypographySumList({ children }) {
  return (
    <Typography
      sx={{
        fontSize: 48,
        color: "white",
        p: 2,
      }}
      variant="h1"
      component="h2"
    >
      {children}
    </Typography>
  );
}

export function TypographyCash({ children }) {
  return (
    <Typography
      sx={{
        fontSize: 36,
        color: red[900],
        p: 2,
      }}
      variant="h1"
      component="h2"
    >
      {children}
    </Typography>
  );
}
