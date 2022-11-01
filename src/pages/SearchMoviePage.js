import React, { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { getSearchMovie } from "../api/getSearchMovie";
import Typography from "../components/Typography/typography";
import Loading from "./Loading";
import ListItem from "../components/ListItem/ListItem";
function SearchMoviePage() {
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  let search = query.get("s");
  const [listMovie, setListMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    getSearchMovie(setListMovie, search);
  }, [search]);

  if (search === "") {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      {loading ? (
        <Typography>
          <Loading />
        </Typography>
      ) : listMovie.results.length !== 0 ? (
        <ListItem list={listMovie.results} />
      ) : (
        <Typography>
          {`"${search}" Not Found!`}
        </Typography>
        
      )}
    </>
  );
}

export default SearchMoviePage;
