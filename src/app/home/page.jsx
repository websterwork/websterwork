// app/components/HeroSection.jsx
'use client';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-green-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <path
              d="M0,100 C300,150 600,50 900,100 C1050,125 1150,100 1200,100 L1200,200 L0,200 Z"
              fill="rgba(34, 197, 94, 0.1)"
            />
            <path
              d="M0,120 C300,170 600,70 900,120 C1050,145 1150,120 1200,120 L1200,200 L0,200 Z"
              fill="rgba(34, 197, 94, 0.05)"
            />
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            A Digital Product Studio
            <br />
            <span className="text-white">that will Work</span>
          </h1>

          {/* Category Text */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 text-gray-300 text-lg md:text-xl">
            <span className="text-gray-400">For</span>
            <span className="text-white font-medium">Startups</span>
            <span className="text-gray-400">,</span>
            <span className="text-white font-medium">Enterprise leaders</span>
            <span className="text-gray-400">,</span>
            <span className="text-white font-medium">Media & Publishers</span>
            <span className="text-gray-400">and</span>
            <span className="text-white font-medium">Social Good</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-transparent border border-gray-500 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium text-lg">
              Our Works
            </button>
            <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black rounded-lg transition-colors duration-300 font-medium text-lg">
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
