import { useEffect, useState } from "react";
import meditationimage from "../assets/Hero_Image.png";
import hair2 from "../assets/hair2.png";
import hair1 from "../assets/hair1.png";
import hair3 from "../assets/hair3.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
  const images = [meditationimage, hair3, hair1];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change slide speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto px-10 py-16 flex gap-10 items-center">
      {/* LEFT CONTENT */}
      <div>
        <p className="text-green-500 text-xl font-semibold mb-4">
          100% ORGANIC INGREDIENTS
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Your Journey <br />
          to Thicker, <br />
          Healthier Hair <br />
          Starts Here.
        </h1>

        <p className="mt-6 text-gray-600 max-w-md">
          Science-backed natural treatments personalized for your unique hair
          profile. Take our assessment to find your perfect regimen.
        </p>

        <div className="mt-8 flex gap-4">
          <button onClick={() => navigate("/hair-test")} className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-lg whitespace-nowrap h-14 cursor-pointer">
            Take the Hair Test
          </button>

          <button className="px-4 py-2 border rounded-lg font-bold text-lg whitespace-nowrap h-14 cursor-pointer">
            Browse Products
          </button>
        </div>
      </div>

      {/* RIGHT SLIDER */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl h-[520px] w-full">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Hair Care"
              className="min-w-full h-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
