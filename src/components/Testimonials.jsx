import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Verified Buyer",
      text: "After struggling with hair fall for years, Natural Relief completely changed my confidence. My hair feels thicker, healthier, and more alive than ever.",
      highlight: false,
    },
    {
      name: "Rohit Mehra",
      role: "Verified Buyer",
      text: "The personalized plan made all the difference. Within 3 months, my hair fall reduced drastically and new growth became visible. Truly natural and effective.",
      highlight: true,
    },
    {
      name: "Priya Nair",
      role: "Verified Buyer",
      text: "I was skeptical at first, but the results speak for themselves. No chemicals, no side effects—just healthy hair growth backed by science.",
      highlight: false,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        } else {
          setAnimate(false); // reset when leaving
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 bg-green-100 text-center scroll-mt-24"
    >
      <h2 className="text-4xl font-bold">
        Real People, Real Results
      </h2>
      <p className="mt-3 text-gray-700">
        ⭐ 4.8/5 (Based on 12,000+ journeys)
      </p>

      {/* Cards */}
      <div className="mt-16 max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3 items-center">
        {testimonials.map((item, i) => (
          <div
            key={i}
            className={`
              rounded-2xl p-8 shadow-xl transition-all duration-700
              ${
                animate
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }
              ${
                item.highlight
                  ? "bg-green-600 text-white scale-110"
                  : "bg-white text-gray-800"
              }
            `}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Avatar */}
            <div className="w-16 h-16 mx-auto rounded-full bg-green-200 flex items-center justify-center text-2xl font-bold mb-4">
              {item.name.charAt(0)}
            </div>

            <h4 className="text-xl font-semibold">{item.name}</h4>
            <p className={`text-sm ${item.highlight ? "text-green-100" : "text-gray-500"}`}>
              {item.role}
            </p>

            <div className="mt-3 text-yellow-400 text-lg">★★★★★</div>

            <p
              className={`mt-6 text-sm leading-relaxed ${
                item.highlight ? "text-green-50" : "text-gray-600"
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-16 bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
        See More Transformations →
      </button>
    </section>
  );
}
