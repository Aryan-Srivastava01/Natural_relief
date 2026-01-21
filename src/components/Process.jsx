import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Diagnosis",
    desc: "Complete our 2-minute assessment to identify root causes.",
    backgroundColor: "red"
  },
  {
    title: "Personalized Plan",
    desc: "Receive a custom regimen of natural actives.",
  },
  {
    title: "Results",
    desc: "Track visible improvements within 3 months.",
  },
];

export default function Process() {
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
      className="py-20 mx-auto px-6 text-center bg-gradient-to-b from-white to-gray-50"
    >
      {/* Heading */}
      <p
        className={`text-green-500 font-semibold mb-3 text-3xl
        transition-all duration-700
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        OUR PROCESS
      </p>

      <h2
        className={`text-3xl font-bold mb-4
        transition-all duration-700 delay-100
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        Three Steps to Restoration
      </h2>

      <p
        className={`text-gray-600 max-w-xl mx-auto font-bold
        transition-all duration-700 delay-200
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        We combine traditional Ayurvedic knowledge with modern clinical science.
      </p>

      {/* Steps */}
      <div className="mt-14 grid md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`bg-white p-8 rounded-2xl text-left
            shadow-sm hover:shadow-xl
            transition-all duration-700
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Step number */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold mb-4">
              {i + 1}
            </div>

            <h3 className="font-semibold text-xl mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 text-lg font-bold leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
