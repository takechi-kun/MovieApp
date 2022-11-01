import React from "react";
import Typography from "../components/Typography/typography";
import Container from "@mui/material/Container";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { ButtonAllClear } from "../components/Button/button_icon";
function User() {
  function HandleClear() {
    localStorage.clear();
  }
  return (
    <Container sx={{ mt: 2 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>User</Typography>
        <ButtonAllClear onClick={HandleClear}>
          <RemoveShoppingCartIcon />
        </ButtonAllClear>
      </div>

      <hr />
    </Container>
  );
}

export default User;
