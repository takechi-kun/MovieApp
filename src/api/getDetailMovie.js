import axios from "axios"

export async function getDetailMovie(setListMovie, search) {
    const api_movie = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${search}`
    return await axios.get(api_movie).then((response) => {
        setListMovie(response.data);
    });
  }