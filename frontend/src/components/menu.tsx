import React, { useState } from "react";
import MoviesSection from "./moviesSection";

const sampleMovies = [
  {
    title: "My Office Boss",
    duration: "2hr : 38mins",
    imageUrl: "/img/upcome/u1.jpg",
  },
  {
    title: "Shadowe",
    duration: "2hr : 38mins",
    imageUrl: "/img/upcome/u2.jpg",
  },
  {
    title: "Another Danger",
    duration: "2hr : 38mins",
    imageUrl: "/img/upcome/u3.jpg",
  },
  {
    title: "Jumbo Queen",
    duration: "2hr : 38mins",
    imageUrl: "/img/upcome/u4.jpg",
  },
];

const latestMovies = [
  {
    title: "My Office Boss",
    duration: "2hr : 38mins",
    imageUrl: "/img/upcome/u5.jpg",
  },
  {
    title: "Shadowe",
    duration: "2hr : 38mins",
    imageUrl: "/img/upcome/u6.png",
  },
  {
    title: "Another Danger",
    duration: "2hr : 38mins",
    imageUrl: "/img/upcome/u7.jpg",
  },
  {
    title: "Jumbo Queen",
    duration: "2hr : 38mins",
    imageUrl: "/img/upcome/u1.jpg",
  },
];

const Menu: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterMovies = (movies: typeof sampleMovies) =>
    movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="px-8 py-10 bg-gradient-to-b from-[#1a1a1a] to-[#121212] min-h-screen text-white">
      <div className="max-w-2xl mx-auto mb-12 mt-14 text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-red-500">
          Explore Movies
        </h1>
        <p className="text-gray-400 mb-6">
          Search and discover your next favorite film
        </p>
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 rounded-full border border-gray-700 bg-[#1e1e1e] text-white focus:outline-none focus:ring-2 focus:ring-red-500 shadow-md"
        />
      </div>

      <div className="space-y-10">
        <h2 className="text-2xl font-bold text-white">Upcoming Movies</h2>

        <MoviesSection movies={filterMovies(sampleMovies)} title={""} />
        <h2 className="text-2xl font-bold text-white">Latest Movies</h2>
        <MoviesSection
          title=""
          movies={filterMovies(latestMovies)}
        />
      </div>
    </div>
  );
};

export default Menu;
