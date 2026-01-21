import { useEffect, useRef, useState } from "react";
import product1 from "../assets/Product1.png";
import product2 from "../assets/Product2.png";

const products = [
  {
    id: 1,
    title: "Hair Regrowth Oil",
    rating: 4.9,
    price: 45,
    image: product1,
    desc: "Controls hair fall and promotes regrowth",
  },
  {
    id: 2,
    title: "Scalp Detox",
    rating: 4.7,
    price: 32,
    image: product2,
    desc: "Removes buildup and purifies scalp",
  },
  {
    id: 3,
    title: "Root Activator",
    rating: 4.8,
    price: 58,
    image: product1,
    desc: "Intense nourishment for hair roots",
  },
  {
    id: 4,
    title: "Follicle Vitality",
    rating: 5.0,
    price: 39,
    image: product2,
    desc: "Internal support with biotin",
  },
];

export default function Products() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Section visibility animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // One-by-one automatic animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
  id="products"
  ref={sectionRef}
  className="py-20 bg-white"
>

      <div className="mx-auto px-6 text-center">
        {/* Heading */}
        <p
          className={`text-green-500 text-6xl font-semibold tracking-wide
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          SHOP THE COLLECTION
        </p>

        <h2
          className={`text-3xl md:text-4xl font-bold mt-3
          transition-all duration-700 delay-100
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Our Ayurvedic Solutions
        </h2>

        <p
          className={`text-gray-600 mt-4 max-w-xl mx-auto font-bold text-xl
          transition-all duration-700 delay-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Harness the power of ancient wisdom blended with modern extraction techniques.
        </p>

        {/* Products */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-gray-50 rounded-3xl p-5 shadow-sm
              transition-all duration-700
              ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  key={activeIndex === index ? "active" : "inactive"}
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-48 object-cover
                  ${activeIndex === index ? "animate-focus" : ""}`}
                />
                <button className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full flex items-center justify-center shadow">
                  ❤️
                </button>
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2 text-sm">
                <span className="text-green-500">★★★★★</span>
                <span className="text-gray-500">({product.rating})</span>
              </div>

              {/* Info */}
              <h3 className="font-semibold mt-2 text-xl">
                {product.title}
              </h3>
              <p className="text-gray-500 text-md mt-1 line-clamp-1">
                {product.desc}
              </p>

              {/* Price + CTA */}
              <div className="mt-5 flex items-center justify-between">
                <span className="font-bold text-lg">
                  ${product.price}.00
                </span>
                <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-lg flex items-center gap-2 transition-transform duration-300 hover:scale-105">
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <button
          className={`mt-14 text-sm font-medium underline underline-offset-4
          transition-all duration-700 delay-500
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          View All Products
        </button>
      </div>
    </section>
  );
}
