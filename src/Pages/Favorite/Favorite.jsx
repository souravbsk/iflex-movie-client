import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";
import { FaCalendar } from "react-icons/fa";

const Favorite = () => {
  const favoriteMovies = useSelector(
    (store) => store.favouriteCart.favoriteMovie
  );
  console.log(favoriteMovies);
  return (
    <div className="container py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {favoriteMovies.map((movie) => (
          <div
            key={movie?.imdbID}
            className="card text-white group bg-[#0B0F29] shadow-xl"
          >
            <Link to={`/view-details/${movie.imdbID}`}>
              <figure className="">
                <img
                  src={movie?.Poster}
                  alt="Shoes"
                  className="rounded-xl group-hover:scale-110 duration-300 w-full h-96 object-fill"
                />
              </figure>
            </Link>
            <div className="card-body bg-[#0B0F29] absolute bottom-0  left-0 right-0">
              <h2 className="card-title text-2xl">{movie?.Title}</h2>
              <div className="card-actions items-center">
                <p className="flex items-center gap-2">
                  <FaCalendar></FaCalendar>
                  {movie?.Year}
                </p>

                <FavoriteButton movie={movie}></FavoriteButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
