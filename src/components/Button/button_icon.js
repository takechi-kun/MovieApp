import React from "react";
import Button from "@mui/material/Button";
export function ButtonAllCart({ children, onClick }) {
  return (
    <Button
      sx={{
        color: "white",
      }}
      size="small"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export function ButtonSearch({ children, searchMovie, onClick }) {
  return (
    <Button
      disabled={searchMovie === "" ? true : false}
      sx={{
        color: "white",
      }}
      size="small"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export function ButtonAllClear({ children, onClick }) {
  return (
    <Button
      sx={{
        fontSize: 24,
        color: "white",
      }}
      size="small"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}