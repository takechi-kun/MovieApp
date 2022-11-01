import React from "react";
import Typography from "@mui/material/Typography";
function typography({children}) {
  return (
    <Typography
      sx={{
        fontSize: 24,
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

export default typography;
