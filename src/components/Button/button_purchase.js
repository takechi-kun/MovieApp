import React from "react";
import Button from "@mui/material/Button";
export function ButtonPurchase({ children, onClick, color, bgcolor }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        fontSize: 16,
        color: color,
        bgcolor: bgcolor,
        p: 1,
        mt: 2,
        mr: 2,
        "&:hover": {
          bgcolor: bgcolor,
          textDecoration: "underline",
        },
      }}
      size="small"
    >
      {children}
    </Button>
  );
}
