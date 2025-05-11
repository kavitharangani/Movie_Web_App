import React from "react";
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

const Service: React.FC = () => {
  return (
    <div className= "text-white">
      <MoviesSection title="Upcomming Movies" movies={sampleMovies} />

      <MoviesSection title="Latest Movies" movies={latestMovies} />
    </div>
  );
};

export default Service;
