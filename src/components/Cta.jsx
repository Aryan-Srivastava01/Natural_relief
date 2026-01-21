import { useNavigate } from "react-router-dom";

export default function CTA() {
    const navigate = useNavigate();
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900 to-black text-white rounded-3xl p-14 text-center">
        <h2 className="text-3xl font-bold">
          Ready to regain your confidence?
        </h2>
        <p className="mt-4 text-gray-300 font-bold">
          Join over 100,000 people who transformed their hair naturally.
        </p>

        <button onClick={() => navigate("/hair-test")} className="mt-8 bg-green-500 px-8 py-4 rounded-lg font-medium cursor-pointer">
          Start Your Free Hair Test
        </button>
      </div>
    </section>
  );
}
