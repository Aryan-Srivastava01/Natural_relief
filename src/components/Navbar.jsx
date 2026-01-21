import { useNavigate, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    // If NOT on home, go to home first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      // Already on home → just scroll
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
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
      </ul>

      {/* Right Side Buttons */}
      <div className="flex items-center gap-4">
        {/* WhatsApp Icon Button (UI only) */}
        <button
          type="button"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg 
                     flex items-center justify-center 
                     hover:scale-110 transition"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={22} />
        </button>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/hair-test")}
          className="bg-green-700 text-green-200 font-bold px-5 py-2 rounded-lg text-md 
                     shadow-lg shadow-green-400/80 animate-pulse 
                     hover:scale-105 transition cursor-pointer"
        >
          Take the Hair Test
        </button>
      </div>
    </nav>
  );
}
