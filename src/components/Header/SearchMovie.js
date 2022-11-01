import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from '@mui/material/FormControl';
import { ButtonSearch } from "../Button/button_icon";
function SearchMovie() {
  const [searchMovie, setSearchMovie] = useState("");
  const Search_Song_Artist = (e) => {
    e.preventDefault();
    window.location.href = `/search_movie?s=${searchMovie}`;
  };
  return (
      <FormControl 
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ width: "35ch", mr: 2 }}
          size="small"
          id="outlined-search"
          label="Search Movie"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          type="search"
        />
        <ButtonSearch
          searchMovie={searchMovie}
          onClick={Search_Song_Artist}
        >
          <SearchIcon />
        </ButtonSearch>
      </FormControl>

  );
}

export default SearchMovie;
