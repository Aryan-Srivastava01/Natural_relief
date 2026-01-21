import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gray-100 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <p
          className={`text-green-500 font-semibold text-3xl mb-3
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          CONTACT US
        </p>

        <h2
          className={`text-3xl md:text-4xl font-bold
          transition-all duration-700 delay-100
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Let’s Talk About Your Hair Goals
        </h2>

        <p
          className={`mt-4 text-gray-600 max-w-xl mx-auto
          transition-all duration-700 delay-200
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          Have questions or need guidance? Our experts are here to help you.
        </p>

        {/* Form */}
        <form
          className={`mt-12 bg-white p-8 rounded-3xl shadow-sm
          transition-all duration-700 delay-300
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border rounded-xl px-4 py-3 mt-6 focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />

          <button
            type="submit"
            className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
