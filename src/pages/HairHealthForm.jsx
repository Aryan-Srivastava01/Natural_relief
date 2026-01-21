import { useState } from "react";
import toast from "react-hot-toast";

const steps = [
  {
    question: "What’s your name?",
    type: "text",
    key: "name",
    placeholder: "Enter your name",
  },
  {
    question: "How old are you?",
    type: "number",
    key: "age",
    placeholder: "Your age",
  },
  {
    question: "What best describes your hair concern?",
    type: "options",
    key: "concern",
    options: [
      "Hair fall",
      "Thinning",
      "Dandruff",
      "Slow growth",
      "Premature greying",
    ],
  },
  {
    question: "How severe is your hair fall?",
    type: "options",
    key: "severity",
    options: ["Mild", "Moderate", "Severe"],
  },
  {
    question: "How would you describe your lifestyle?",
    type: "options",
    key: "lifestyle",
    options: [
      "Low stress & good sleep",
      "Moderate stress",
      "High stress & poor sleep",
    ],
  },
];

export default function HairHealthForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const current = steps[step];

  const handleNext = () => {
    if (!formData[current.key]) {
      toast.error("Please answer before continuing");
      return;
    }

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      toast.success("✅ Assessment completed successfully!");
      // later you can send formData to backend here
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-6">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-xl p-8">

        {/* Brand Heading */}
        <h1 className="text-center text-2xl font-bold text-green-600 mb-2">
          Natural Relief
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Personalized Hair Health Assessment
        </p>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-8">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition-all
              ${i <= step ? "bg-green-500" : "bg-gray-300"}`}
            />
          ))}
        </div>

        {/* Question */}
        <h2 className="text-2xl font-semibold text-center mb-8">
          {current.question}
        </h2>

        {/* Input */}
        {current.type === "text" || current.type === "number" ? (
          <input
            type={current.type}
            placeholder={current.placeholder}
            className="w-full border-b-2 border-green-400 focus:outline-none py-3 text-lg text-center"
            value={formData[current.key] || ""}
            onChange={(e) =>
              setFormData({ ...formData, [current.key]: e.target.value })
            }
          />
        ) : (
          <div className="grid gap-4">
            {current.options.map((opt) => (
              <button
                key={opt}
                onClick={() =>
                  setFormData({ ...formData, [current.key]: opt })
                }
                className={`border rounded-xl py-3 px-4 text-left transition
                ${
                  formData[current.key] === opt
                    ? "border-green-500 bg-green-50"
                    : "border-gray-300 hover:border-green-400"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="mt-10 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition"
        >
          {step === steps.length - 1 ? "Finish Assessment" : "Next →"}
        </button>

        {/* Privacy note */}
        <p className="text-xs text-gray-500 text-center mt-6">
          Your data is safe with us. We never share your information.
        </p>
      </div>
    </section>
  );
}
