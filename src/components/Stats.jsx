import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "93%", label: "Success Rate" },
  { value: "20+", label: "Potent Extracts" },
  { value: "100k+", label: "Reversals & Growth" },
  { value: "50+", label: "Dermatologists" },
];

function AnimatedNumber({ value, start }) {
  const number = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0); // reset when out of view
      return;
    }

    const duration = 1500;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.floor(progress * number));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, number]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-14">
      <div className="max-w-8xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item, i) => (
          <div key={i}>
            <h3 className="text-green-500 text-3xl font-bold">
              <AnimatedNumber
                value={item.value}
                start={isVisible}
              />
            </h3>
            <p className="text-gray-700 text-sm font-bold">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
