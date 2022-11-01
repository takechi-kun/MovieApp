import axios from "axios"

export async function getMovie(setListMovie) {
    const api_movie = `https://api.themoviedb.org/3/movie/popular?api_key=f67b1022ec2bf05c9a206f4942bc395a`
    return await axios.get(api_movie).then((response) => {
        setListMovie(response.data);
    });
  }
  