import { useEffect, useRef } from "react";

const videos = [
  {
    name: "Prince Gupta",
    role: "Owner",
    src: "https://res.cloudinary.com/daknbumls/video/upload/f_auto,q_auto/natural_relief6_fjgprq.mp4",
  },
  {
    name: "Dhruv Prasad",
    role: "Verified Customer",
    src: "https://res.cloudinary.com/daknbumls/video/upload/f_auto,q_auto/natural_relief7_jc166q.mp4",
  },
  {
    name: "Amit Verma",
    role: "Verified Customer",
    src: "https://res.cloudinary.com/daknbumls/video/upload/f_auto,q_auto/natural_relief5_pqwop3.mp4",
  },
  {
    name: "Abhay Singh",
    role: "Verified Customer",
    src: "https://res.cloudinary.com/daknbumls/video/upload/f_auto,q_auto/natural_relief4_qwxfv2.mp4",
  },
  {
    name: "Nidhi Singh",
    role: "Verified Customer",
    src: "https://res.cloudinary.com/daknbumls/video/upload/f_auto,q_auto/natural_relief1_mgt4qq.mp4",
  },
  {
    name: "Neha Kapoor",
    role: "Verified Customer",
    src: "https://res.cloudinary.com/daknbumls/video/upload/f_auto,q_auto/natural_relief3_tmbxwz.mp4",
  },
];

export default function VideoTestimonials() {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;

          if (entry.isIntersecting) {
            // Pause all other videos
            videoRefs.current.forEach((v) => {
              if (v && v !== video) v.pause();
            });

            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.6 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      className="px-6 md:px-12 py-20 bg-gray-50 scroll-mt-24"
    >
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
              onClick={(e) => {
                e.target.muted = !e.target.muted;
              }}
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
