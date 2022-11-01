import React from "react";
import Typography from "@mui/material/Typography";
function typographyDetail({children}) {
  return (
    <Typography
      sx={{
        fontSize: 16,
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

export default typographyDetail;