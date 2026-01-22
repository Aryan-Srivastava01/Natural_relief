import { useNavigate, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import AboutVideoModal from "./AboutVideoModal";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAbout, setShowAbout] = useState(false);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="font-bold text-xl text-green-600 cursor-pointer"
        >
          🌿 Natural Relief
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-lg text-gray-700 font-bold cursor-pointer">
          <li onClick={() => navigate("/hair-test")}>Hair Test</li>
          <li onClick={() => scrollToSection("products")}>Shop</li>
          <li onClick={() => scrollToSection("testimonials")}>Reviews</li>
          <li onClick={() => setShowAbout(true)}>About Us</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button
            className="bg-green-500 text-white p-3 rounded-full shadow-lg
                       hover:scale-110 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={22} />
          </button>

          <button
            onClick={() => navigate("/hair-test")}
            className="bg-green-700 text-green-200 font-bold px-5 py-2 rounded-lg
                       shadow-lg shadow-green-400/80 animate-pulse
                       hover:scale-105 transition"
          >
            Take the Hair Test
          </button>
        </div>
      </nav>

      {/* About Modal */}
      {showAbout && <AboutVideoModal onClose={() => setShowAbout(false)} />}
    </>
  );
}
