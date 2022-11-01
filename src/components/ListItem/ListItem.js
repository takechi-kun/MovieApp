import React, { useState, useEffect } from "react";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import TypographyDetail from "../Typography/typographyDetail";
import { ButtonAddCart, /* ButtonView */ } from "../Button/button";
import CardActions from "@mui/material/CardActions";
function ListItem({ list }) {
  const [todoMovie, setTodoMovie] = useState(() => {
    const savedMovieList = localStorage.getItem("lists");

    if (savedMovieList) {
      return JSON.parse(savedMovieList);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(todoMovie));
  }, [todoMovie]);

  function handleFormSubmit(id, name) {
    alert(`Add Success : ${name}`)
    setTodoMovie([
      ...todoMovie,
      {
        id: id,
        name: name,
      },
    ]);
  }

  /* function View(e) {
    e.preventDefault();
    window.location.href = `/view_detail_movie`;
  } */

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {list.map((list) => (
        <Grid
          key={list.id}
          item
          xs={3}
          sx={{
            bgcolor: "red",
            m: 4,
          }}
        >
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w185${list.poster_path}`}
            alt="random"
          />
          <div>
            <TypographyDetail>{list.original_title}</TypographyDetail>
            <TypographyDetail>
              {"Language : " + list.original_language}
            </TypographyDetail>
          </div>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
            }}
          >
            <ButtonAddCart
              onClick={handleFormSubmit}
              id={list.id}
              name={list.original_title}
            >
              ADD CART
            </ButtonAddCart>
            {/* <ButtonView onClick={View}>VIEW</ButtonView> */}
          </CardActions>
        </Grid>
      ))}
    </Grid>
  );
}

export default ListItem;
