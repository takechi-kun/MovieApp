import React from "react";
import Button from "@mui/material/Button";
export function ButtonAddCart({ children, onClick, id, name }) {
  return (
    <Button
      sx={{
        color: "white",
        "&:hover": {
          color: "#000000",
        },
      }}
      size="small"
      onClick={() => onClick(id, name)}
    >
      {children}
    </Button>
  );
}

export function ButtonView({ children, onClick }) {
  return (
    <Button
      sx={{
        color: "white",
        "&:hover": {
          color: "#000000",
        },
      }}
      size="small"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
