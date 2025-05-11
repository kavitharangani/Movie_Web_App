import { useState } from "react";
import notification from "../../public/img/notification.png";
import logout from "../../public/img/log-out.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // Redirect to Home page
  };

  return (
    <nav className="bg-gradient-to-r bg-black/50 border border-black/20 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-bold">
              <span className="text-white">Stream</span>
              <span className="text-[#FF9D23]">F</span>
              <span className="text-white">lix </span>
              <span className="text-[#FF9D23]">M</span>
              <span className="text-white">OVIE</span>
              <span className="text-[#FF9D23]"> A</span>
              <span className="text-white">PP</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/home"
              className="text-gray-200 hover:text-[#FF9D23] transition duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-200 hover:text-[#FF9D23] transition duration-300 font-medium"
            >
              About
            </Link>

            <Link
              to="/menu"
              className="text-gray-200 hover:text-[#FF9D23] transition duration-300 font-medium"
            >
              Menu
            </Link>
            

            <button className="hover:opacity-80 transition duration-300">
              <img src={notification} alt="Notifications" className="w-6 h-6" />
            </button>
            <button
              className="hover:opacity-80 transition duration-300"
              onClick={handleLogin}
            >
              <img src={logout} alt="Logout" className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FF9D23] focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/home"
                className="text-gray-200 hover:text-[#FF9D23] transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-200 hover:text-[#FF9D23] transition duration-300"
              >
                About
              </Link>

              <Link
                to="/menu"
                className="text-gray-200 hover:text-[#FF9D23] transition duration-300"
              >
                Menu
              </Link>
              
             
              <div className="flex space-x-4">
                <button className="hover:opacity-80 transition duration-300">
                  <img
                    src={notification}
                    alt="Notifications"
                    className="w-6 h-6"
                  />
                </button>
                <button
                  className="hover:opacity-80 transition duration-300"
                  onClick={handleLogin}
                >
                  <img src={logout} alt="Logout" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
