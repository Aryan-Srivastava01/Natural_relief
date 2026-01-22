import { useRef, useState } from "react";

// ✅ Cloudinary video URL (string, NOT import)
const ownerVideo =
  "https://res.cloudinary.com/daknbumls/video/upload/f_auto,q_auto/natural_relief6_fjgprq.mp4";

export default function OwnersMessage() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="bg-green-50 py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[2fr_3fr] gap-16 items-center">

        {/* Left Content */}
        <div className="max-w-xl">
          <p className="text-green-600 font-semibold mb-4 tracking-wide">
            A MESSAGE FROM OUR FOUNDER
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Healing Begins With <br /> Trust & Nature
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            At <span className="font-semibold text-green-600">Natural Relief</span>,
            our mission is simple — provide honest, natural, and effective solutions
            backed by care and science.
          </p>

          <div>
            <p className="font-semibold text-gray-800">— Founder & Owner</p>
            <p className="text-gray-500">Natural Relief</p>
          </div>
        </div>

        {/* Right Video */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-green-100 h-[420px] md:h-[520px]">
          <video
            ref={videoRef}
            src={ownerVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="absolute bottom-6 right-6 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur"
          >
            {isMuted ? "🔇 Tap for Sound" : "🔊 Mute"}
          </button>
        </div>

      </div>
    </section>
  );
}
