import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";

const MovieDetails = () => {
  const detailsMovie = useLoaderData();
  const {
    Poster,
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    imdbRating,
    Plot,
    Genre,
    Director,
    Writer,
    Actors,
    Language,
    Country,
    Awards,
    Production,
    imdbID
  } = detailsMovie;

  return (
    <div className="bg-[#080A1A]">
        <div className=" container my-8 md:my-20 bg-[#0B0F29] text-white">
      <div className="card lg:card-side overflow-hidden  shadow-xl">
        <img className="lg:w-4/12" src={Poster} alt="Album" />

        <div className="card-body px-0 lg:px-8 lg:w-8/12">
          <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between">
            <div>
              <h2 className="card-title text-3xl  mb-3">{Title}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 ">
                <p className="py-2 px-2">{Year}</p>
                <p className="py-2 px-2 lg:border-l-2">{Rated}</p>
                <p className="py-2 px-2 lg:border-l-2">{Released}</p>
                <p className="py-2 px-2 lg:border-l-2">{Runtime}</p>
              </div>
            </div>
            <div className="flex gap-8 items-center justify-between">
            <div><FaStar size={20} className="text-yellow-400"></FaStar> {imdbRating}/10</div>
<div>
<FavoriteButton movie={{imdbID,Title,Year,Plot}}></FavoriteButton>
</div>
            </div> 
          </div>
          <div>
            <p>{Plot}</p>
            <div className="divider"></div>
            <div>
              <p>
                <span className="font-bold">Genre:</span> {Genre}
              </p>
              <p>
                <span className="font-bold">Director:</span> {Director}
              </p>
              <p>
                <span className="font-bold">Writer:</span> {Writer}
              </p>
              <p>
                <span className="font-bold">Actors:</span> {Actors}
              </p>
              <p>
                <span className="font-bold">Language:</span> {Language}
              </p>
              <p>
                <span className="font-bold">Country:</span> {Country}
              </p>
              <p>
                <span className="font-bold">Awards:</span> {Awards}
              </p>
              <p>
                <span className="font-bold">Production:</span> {Production}
              </p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-red-600">Download Now</button>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mb-8">
        <Link  className="btn" to="/"> Back To Home </Link>
    </div>
    </div>
  );
};

export default MovieDetails;
