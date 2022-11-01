import React, { useState, useEffect } from "react";
import { getMovie } from "../api/getMovie";
import Typography from "../components/Typography/typography";
import Loading from "./Loading";
import ListItem from "../components/ListItem/ListItem";
function MainPage() {
  const [listMovie, setListMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    getMovie(setListMovie);
  }, []);

  return (
    <>
      {loading ? (
        <Typography>
          <Loading />
        </Typography>
      ) : (
        <ListItem list={listMovie.results} />
      )}
    </>
  );
}

export default MainPage;
