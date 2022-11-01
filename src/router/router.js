import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from '../pages/MainPage'
import CartMovieList from '../pages/CartMovieList'
import SearchMoviePage from '../pages/SearchMoviePage'
import ViewMovieDetail from '../pages/ViewMovieDetail'
function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/cart_movie_list" element={<CartMovieList />}/>
            <Route path="/search_movie" element={<SearchMoviePage />}/>
            <Route path="/view_detail_movie" element={<ViewMovieDetail/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router