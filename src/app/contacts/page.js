"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactReasons: {
      mobileAppDesign: false,
      collaboration: false,
      others: false,
    },
    budget: [2500],
    message: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (reason, checked) => {
    setFormData((prev) => ({
      ...prev,
      contactReasons: {
        ...prev.contactReasons,
        [reason]: checked,
      },
    }));
  };

  const handleBudgetChange = (e) => {
    const value = parseInt(e.target.value);
    setFormData((prev) => ({
      ...prev,
      budget: [value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      {/* Contact Section Container - Fixed width 1,596px, Hug height 1,771px */}
      <div
        className="bg-black border border-gray-600 rounded-lg overflow-hidden"
        style={{
          width: "1596px",
          minHeight: "1771px",
          maxWidth: "100vw", // Responsive fallback
          border: "1px solid #262626",
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-black to-zinc-900 text-center px-8 py-12 flex-shrink-0">
            {/* Icon Box */}
            <div className="w-16 h-16 rounded-xl mx-auto mb-8 flex items-center justify-center bg-lime-400 shadow-lg">
              <svg
                className="w-8 h-8 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z" />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="text-white text-3xl font-bold mb-6 max-w-2xl mx-auto leading-tight">
              Thank you for your Interest in{" "}
              <span className="text-white">SquareUp.</span>
            </h1>

            {/* Paragraph */}
            <p className="text-gray-400 text-base mb-10 leading-relaxed max-w-2xl mx-auto">
              We would love to hear from you and discuss how we can help bring
              your digital ideas to life. Here are the different ways you can
              get in touch with us.
            </p>

            {/* Button */}
            <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-lg shadow-lg transition duration-200 text-lg">
              Start Project
            </button>
          </div>

          {/* Form Section */}
          <div className="flex-1 px-8 py-12">
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label
                      htmlFor="fullName"
                      className="block text-white text-lg font-medium"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Type here"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="w-full px-4 py-4 bg-zinc-800 border border-zinc-600 rounded-lg text-white text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label
                      htmlFor="email"
                      className="block text-white text-lg font-medium"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Type here"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-4 bg-zinc-800 border border-zinc-600 rounded-lg text-white text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                {/* Contact Reasons */}
                <div className="space-y-6">
                  <label className="block text-white text-lg font-medium">
                    Why are you contacting us?
                  </label>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {[
                      { key: "webDesign", label: "Web Design" },
                      { key: "collaboration", label: "Collaboration" },
                      { key: "mobileAppDesign", label: "Mobile App Design" },
                      { key: "others", label: "Others" },
                    ].map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center space-x-4"
                      >
                        <div className="relative">
                          <input
                            type="checkbox"
                            id={item.key}
                            checked={formData.contactReasons[item.key]}
                            onChange={(e) =>
                              handleCheckboxChange(item.key, e.target.checked)
                            }
                            className="w-6 h-6 text-lime-400 bg-zinc-800 border-zinc-600 rounded focus:ring-lime-400 focus:ring-2"
                          />
                          {formData.contactReasons[item.key] && (
                            <svg
                              className="absolute top-1 left-1 w-4 h-4 text-lime-400 pointer-events-none"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <label
                          htmlFor={item.key}
                          className="text-gray-300 cursor-pointer hover:text-white transition-colors text-lg"
                        >
                          {item.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Budget Slider */}
                <div className="space-y-6">
                  <label className="block text-white text-lg font-medium">
                    Your Budget
                  </label>
                  <p className="text-gray-400 text-base">
                    Slide to indicate your budget range
                  </p>
                  <div className="px-4 py-8">
                    <div className="relative">
                      <input
                        type="range"
                        min="1000"
                        max="5000"
                        step="100"
                        value={formData.budget[0]}
                        onChange={handleBudgetChange}
                        className="w-full h-3 bg-zinc-700 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div
                        className="absolute top-0 left-0 h-3 bg-lime-400 rounded-lg pointer-events-none"
                        style={{
                          width: `${
                            ((formData.budget[0] - 1000) / 4000) * 100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-base text-gray-400 mt-4">
                      <span>$1000</span>
                      <span className="text-lime-400 font-semibold text-lg">
                        ${formData.budget[0].toLocaleString()}
                      </span>
                      <span>$5000</span>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label
                    htmlFor="message"
                    className="block text-white text-lg font-medium"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Type here"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    rows="6"
                    className="w-full px-4 py-4 bg-zinc-800 border border-zinc-600 rounded-lg text-white text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-8">
                  <button
                    type="submit"
                    className="w-full max-w-md bg-lime-400 hover:bg-lime-500 text-black font-semibold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #a3e635;
          cursor: pointer;
          border: 3px solid #18181b;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: #a3e635;
          cursor: pointer;
          border: 3px solid #18181b;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 1596px) {
          .contact-container {
            width: 100% !important;
            margin: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
}
