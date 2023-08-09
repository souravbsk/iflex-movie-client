import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCalendar, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setFavoriteId, setFavoriteMovie } from "../../../../Redux/FavouriteSlice/FavouriteSlice";
import FavoriteButton from "../../../../components/FavoriteButton/FavoriteButton";
import { setSearchText } from "../../../../Redux/SearchSlice/SearchSlice";

const Movies = () => {
  const [MoviesList, setMovieList] = useState([]);
  const searchStore = useSelector((store) => store?.search);
  const [page,setPage] = useState(1)
  const dispatch = useDispatch();


  useEffect(() => {
    fetch(`https://iflex-movie-server.vercel.app/movies/?serachText=${searchStore}&pageNumber=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.Response == "True") {
          setMovieList(data?.Search);
          
        }
      });
  }, [searchStore,page]);



  const handlePrevPage = () => {
   if(page < 1){
    setPage(1)
   }
   else{
    setPage((page) => page -1 )
   }
  }


  const handleNextPage = () => {
    setPage((page) => page + 1)
  }



  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {MoviesList.map((movie) => (
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
      <div className="join mt-12 flex items-center justify-center gap-6">
        <button onClick={handlePrevPage} className="join-item text-white btn btn-outline"><FaArrowLeft></FaArrowLeft> </button>
        <button onClick={handleNextPage} className="join-item text-white btn btn-outline"><FaArrowRight></FaArrowRight></button>
      </div>
    </div>
  );
};

export default Movies;
