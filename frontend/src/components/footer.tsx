import footerImg from "../../public/img/streamverseLogo.jpg"; 

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white px-20 py-10 mt-20">
      <div className="flex justify-center gap-40">
        <div>
        <img src={footerImg} className="w-[180px] h-[180px] object-cover rounded-full" />

          <h2 className="text-3xl font-bold drop-shadow-[2px_2px_2px_black]">
            <span className="text-white"><span className="text-[#FF9D23]">S</span>TREAM</span>{" "}
            <span className="text-[#FF9D23]">VERSE</span>
          </h2>
        </div>

        {/* Left: Logo + Info */}
        <div>
          <h3 className="text-3xl font-bold">Contact</h3>
          <ul className="mt-4 text-[20px] font-medium">
            <li className="flex gap-2 items-center">📞 Call - +1234 567 890</li>
            <li className="flex gap-2 items-center">📧 Email - support@streamverse.com</li>
            <li>🔐 Privacy Policy</li>
          </ul>
        </div>

        {/* Right: About */}
        <div className="max-w-md">
          <h3 className="text-3xl font-bold mb-3">About StreamVerse</h3>
          <p className="text-[20px] font-medium">
            StreamVerse is your go-to platform for streaming the latest movies and TV shows. We provide HD-quality content across a variety of genres, available to watch anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="border-t border-white mt-6"></div>
      <p className="flex justify-center text-sm">© Copyright 2025 StreamVerse. All Rights Reserved. Designed by Panda.</p>
    </footer>
  );
};

export default Footer;
