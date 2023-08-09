import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFavoriteId,
  setFavoriteMovie,
} from "../../Redux/FavouriteSlice/FavouriteSlice";
import { FaHeart } from "react-icons/fa";

const FavoriteButton = ({movie}) => {
  const dispatch = useDispatch();
  const favoriteStore = useSelector((store) => store.favouriteCart.favoriteId)
  const handleFavoriteMovie = (movie) => {
    dispatch(setFavoriteId(movie.imdbID));
    dispatch(setFavoriteMovie(movie));

    fetch("https://iflex-movie-server.vercel.app/api/movies/favorites", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <button
      onClick={() => handleFavoriteMovie(movie)}
      className={`${
        favoriteStore.includes(movie?.imdbID) ? "text-black" : ""
      } px-2 py-2 rounded-full text-xl bg-[#F20000] `}
    >
      <FaHeart></FaHeart>
    </button>
  );
};

export default FavoriteButton;
