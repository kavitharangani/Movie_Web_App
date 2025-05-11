import { useState, useEffect } from "react";
import ReviewCard from "./reviewCard"; // Import the ReviewCard component
import AOS from "aos"; // Import AOS for animations

const Reviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      name: "Dilshad",
      image: "https://picsum.photos/101/101",
      rating: 5,
      text: "Amazing movie selection! The action-packed thrillers were top-notch!",
      movieTitle: "The Last Stand",
    },
    {
      id: 2,
      name: "Sabir Ali",
      image: "https://picsum.photos/102/102",
      rating: 4,
      text: "Great streaming platform. The romance films were touching and well-made.",
      movieTitle: "Romance in Paris",
    },
    {
      id: 3,
      name: "Satya Narayan",
      image: "https://picsum.photos/103/103",
      rating: 5,
      text: "StreamVerse is fantastic! The documentaries are insightful and engaging.",
      movieTitle: "The Nature of Earth",
    },
    // Add 5 more reviews
    {
      id: 4,
      name: "John Doe",
      image: "https://picsum.photos/104/104",
      rating: 4,
      text: "A great platform! I loved the selection of classic films.",
      movieTitle: "Casablanca",
    },
    {
      id: 5,
      name: "Emma Wilson",
      image: "https://picsum.photos/105/105",
      rating: 5,
      text: "The best streaming experience I've had. Loved watching my favorite series!",
      movieTitle: "Friends",
    },
    {
      id: 6,
      name: "Michael Smith",
      image: "https://picsum.photos/106/106",
      rating: 3,
      text: "Good selection, but some movies weren't available in my region.",
      movieTitle: "Inception",
    },
    {
      id: 7,
      name: "Olivia Taylor",
      image: "https://picsum.photos/107/107",
      rating: 5,
      text: "I absolutely loved the horror genre section. Very thrilling!",
      movieTitle: "The Haunting",
    },
    {
      id: 8,
      name: "William Brown",
      image: "https://picsum.photos/108/108",
      rating: 4,
      text: "Nice platform with a variety of movies. A great choice for movie lovers.",
      movieTitle: "The Godfather",
    },
  ]);

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);

  return (
    <div className="py-20 bg-gray-50 mb-6">
      <div className="container mx-auto">
        <div className="text-center mb-20" data-aos="fade-down">
          <h1
            style={{ fontFamily: "Pacifico, Sriracha, cursive" }}
            className="text-5xl font-bold text-gray-800"
          >
            Movie Reviews
          </h1>
        </div>

        {/* Reviews List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              image={review.image}
              rating={review.rating}
              text={review.text}
              movieTitle={review.movieTitle} // Adding movie title for the review
              data-aos="flip-up"
              data-aos-delay="300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
