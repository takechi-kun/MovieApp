import React, { useState, useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Link from "@mui/material/Link";
import { red } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchMovie from "./SearchMovie";
import { ButtonAllCart } from "../Button/button_icon";
function Header() {
  function AllCartMovie() {
    window.location.href = "/cart_movie_list";
  }

  const [listNum] = useState(() => {
    const savedMovieList = localStorage.getItem("lists");
    if (savedMovieList) {
      return JSON.parse(savedMovieList).length;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    localStorage.setItem("num_list", listNum)
  }, [listNum])

  return (
    <AppBar sx={{ bgcolor: red[900] }} position="relative">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" sx={{ mr: 2 }} variant="h6" color="inherit" noWrap>
          Movie App
        </Link>
        <SearchMovie />
        <ButtonAllCart onClick={AllCartMovie}>
          <ShoppingCartIcon />
          {JSON.parse(localStorage.getItem("lists")) !== null && listNum}
        </ButtonAllCart>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
