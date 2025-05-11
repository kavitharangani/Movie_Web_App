import React from "react";

type Movie = {
  title: string;
  duration: string;
  imageUrl: string;
};

type MoviesSectionProps = {
  title: string;
  movies: Movie[];
};

const MoviesSection: React.FC<MoviesSectionProps> = ({ title, movies }) => {
  return (
    <div className="px-8 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-black">{title}</h2>
        <button className="text-red-600 hover:underline">View All</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="relative rounded overflow-hidden shadow-lg group"
          >
            <img
              src={movie.imageUrl}
              alt={movie.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition"
            />
            <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-4">
              <h3 className="text-white text-xl font-semibold">{movie.title}</h3>
              <p className="text-gray-300 text-sm">{movie.duration}</p>
              <button className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                ▶ PLAY NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
