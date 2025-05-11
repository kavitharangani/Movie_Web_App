import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import aboutMovie from "../../public/img/streamverseLogo.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,
    });

    // Refresh AOS on window load
    window.addEventListener("load", AOS.refresh);

    return () => {
      window.removeEventListener("load", AOS.refresh);
    };
  }, []);

  return (
    <div className="py-16">
      <div className="text-center mb-20">
        <h1
          style={{ fontFamily: "Pacifico, Sriracha, cursive" }}
          className="text-5xl font-bold text-gray-800"
        >
          About Movie App
        </h1>
      </div>
      <div
        className="flex justify-center items-center gap-10 text-[22px] -mt-10"
        data-aos="fade-up"
      >
        <p
          className="text-gray-800 leading-relaxed bg-white p-8 shadow-xl rounded-lg border-l-8 border-[#FF9D23]  ml-6 mr-6 mt-1 mb-4 text-justify"
          data-aos="fade-right"
        >
          <span className="font-bold text-[#D2691E]">StreamVerse</span> is your
          go-to destination for streaming the best movies and shows across every
          genre. Whether you're a fan of thrillers, rom-coms, documentaries, or
          classics — we've got something that matches your mood.
          <br />
          <br />
          Designed for movie lovers and binge-watchers, StreamVerse brings the
          big screen to your fingertips. Our mission is simple:{" "}
          <span className="font-bold text-[#D2691E]">
            escape into a story before life calls you back.
          </span>{" "}
          Sit back, hit play, and enjoy a cinematic experience anytime,
          anywhere.
          <br />
          <br />
          With personalized recommendations, offline viewing, and stunning HD
          quality, StreamVerse ensures every user finds joy in their watchlist.
          Whether you're commuting, relaxing at home, or on a break — your next
          movie is just one tap away. Explore. Discover. Stream.
        </p>

        <img
          src={aboutMovie}
          alt="About movie"
          className="w-[380px] h-[380px]  rounded-full drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]  ]"
        />
      </div>
    </div>
  );
};

export default About;
