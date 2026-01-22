import { useEffect, useRef } from "react";
import user1 from "../assets/natural_relief1.mp4";
import user2 from "../assets/natural_relief2.mp4";
import user3 from "../assets/natural_relief3.mp4";
import user4 from "../assets/natural_relief4.mp4";
import user5 from "../assets/natural_relief5.mp4";
import user6 from "../assets/natural_relief6.mp4";


const videos = [
  { name: "Prince Gupta", role: "Owner", src: user6 },
  { name: "Dhruv Prasad", role: "Verified Customer", src: user2 },
  { name: "Amit Verma", role: "Verified Customer", src: user4 },
  { name: "Abhay Singh", role: "Verified Customer", src: user5 },
  { name: "Nidhi Singh", role: "Verified Customer", src: user1 },
  { name: "Neha Kapoor", role: "Verified Customer", src: user3 },
];

export default function VideoTestimonials() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 },
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 md:px-12 py-20 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Real Stories From Real Users
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {videos.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.src}
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full h-[420px] object-cover cursor-pointer"
              onClick={(e) => (e.target.muted = !e.target.muted)}
            />

            <div className="p-4 text-center">
              <h4 className="font-semibold text-lg">{item.name}</h4>
              <p className="text-gray-500 text-sm">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
