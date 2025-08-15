"use client";
import React, { useState } from "react";
export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Our Services Section */}
      <section className="relative w-full max-w-[1596px] mx-auto h-auto min-h-[336px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('image.png')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content Container */}
        <div className="relative z-10 px-4 md:px-[300px] py-16 md:py-[120px] flex flex-col items-center justify-center text-center gap-[14px]">
          {/* Main Heading */}
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
            Our Services
          </h2>

          {/* Description Text */}
          <p className="text-white/90 text-base md:text-lg lg:text-xl xl:text-2xl font-light max-w-4xl leading-relaxed">
            Transform your brand with our innovative digital solutions that
            captivate and engage your audience.
          </p>
        </div>
      </section>

      {/* Design Section */}
      <section className="w-full max-w-[1596px] mx-auto bg-[#262626] text-white py-16 md:py-[120px] px-4 md:px-[162px]">
        <div className="space-y-8 md:space-y-[50px]">
          {/* Header */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Design
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl">
              At Squareup, our design team is passionate about creating
              stunning, user-centric designs that captivate your audience and
              elevate your brand. We believe that great design is not just about
              aesthetics; it&apos;s about creating seamless and intuitive user
              experiences.
            </p>
            <p className="text-gray-300 text-base md:text-lg">
              Our design services include:
            </p>
          </div>

          {/* User Experience (UX) Design Section */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-400">
              User Experience (UX) Design
            </h3>

            {/* UX Design Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {/* User Research */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  User Research and Personal Development
                </h4>
              </div>

              {/* Information Architecture */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Information Architecture and Wireframing
                </h4>
              </div>

              {/* Interactive Prototyping */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Interactive Prototyping and User Testing
                </h4>
              </div>

              {/* UI Design */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  UI Design and Visual Branding
                </h4>
              </div>
            </div>
          </div>

          {/* User Interface (UI) Design Section */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-400">
              User Interface (UI) Design
            </h3>

            {/* UI Design Grid */}
            <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Intuitive Design */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M11,16C10.4,16 10,15.6 10,15C10,14.4 10.4,14 11,14C11.6,14 12,14.4 12,15C12,15.6 11.6,16 11,16M13,12C12.4,12 12,11.6 12,11C12,10.4 12.4,10 13,10C13.6,10 14,10.4 14,11C14,11.6 13.6,12 13,12M14,7H10V4H14V7Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Intuitive and Visually Appealing Interface Design
                </h4>
              </div>

              {/* Custom Iconography */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Custom Iconography and Illustration
                </h4>
              </div>

              {/* Typography */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Typography and Color Palette Selection
                </h4>
              </div>

              {/* Responsive Design */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Responsive Design for Various Devices
                </h4>
              </div>
            </div>
          </div>
        </div>
       {/* second div with heading */}
            <div className="space-y-8 md:space-y-[50px]">
          {/* Header */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Engineering 
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl">
              At Squareup, our design team is passionate about creating
              stunning, user-centric designs that captivate your audience and
              elevate your brand. We believe that great design is not just about
              aesthetics; it&apos;s about creating seamless and intuitive user
              experiences.
            </p>
            <p className="text-gray-300 text-base md:text-lg">
              Our design services include:
            </p>
          </div>

          {/* User Experience (UX) Design Section */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-400">
              User Experience (UX) Design
            </h3>

            {/* UX Design Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {/* User Research */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  User Research and Personal Development
                </h4>
              </div>

              {/* Information Architecture */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Information Architecture and Wireframing
                </h4>
              </div>

              {/* Interactive Prototyping */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Interactive Prototyping and User Testing
                </h4>
              </div>

              {/* UI Design */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  UI Design and Visual Branding
                </h4>
              </div>
            </div>
          </div>

          {/* User Interface (UI) Design Section */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-400">
              User Interface (UI) Design
            </h3>

            {/* UI Design Grid */}
            <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Intuitive Design */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M11,16C10.4,16 10,15.6 10,15C10,14.4 10.4,14 11,14C11.6,14 12,14.4 12,15C12,15.6 11.6,16 11,16M13,12C12.4,12 12,11.6 12,11C12,10.4 12.4,10 13,10C13.6,10 14,10.4 14,11C14,11.6 13.6,12 13,12M14,7H10V4H14V7Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Intuitive and Visually Appealing Interface Design
                </h4>
              </div>

              {/* Custom Iconography */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Custom Iconography and Illustration
                </h4>
              </div>

              {/* Typography */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Typography and Color Palette Selection
                </h4>
              </div>

              {/* Responsive Design */}
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Responsive Design for Various Devices
                </h4>
              </div>
            </div>
          </div>
        </div>
{/* 
third div with heading  */}
  <div className="space-y-8 md:space-y-[50px]">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Engineering 
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-4xl">
              At Squareup, our design team is passionate about creating
              stunning, user-centric designs that captivate your audience and
              elevate your brand. We believe that great design is not just about
              aesthetics; it&apos;s about creating seamless and intuitive user
              experiences.
            </p>
            <p className="text-gray-300 text-base md:text-lg">
              Our design services include:
            </p>
          </div>
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-400">
              User Experience (UX) Design
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  User Research and Personal Development
                </h4>
              </div>
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Information Architecture and Wireframing
                </h4>
              </div>
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Interactive Prototyping and User Testing
                </h4>
              </div>
                  <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  UI Design and Visual Branding
                </h4>
              </div>
            </div>
          </div>
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-400">
              User Interface (UI) Design
            </h3>
            <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M11,16C10.4,16 10,15.6 10,15C10,14.4 10.4,14 11,14C11.6,14 12,14.4 12,15C12,15.6 11.6,16 11,16M13,12C12.4,12 12,11.6 12,11C12,10.4 12.4,10 13,10C13.6,10 14,10.4 14,11C14,11.6 13.6,12 13,12M14,7H10V4H14V7Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Intuitive and Visually Appealing Interface Design
                </h4>
              </div>
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Custom Iconography and Illustration
                </h4>
              </div>
              <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Typography and Color Palette Selection
                </h4>
              </div>
                      <div className="flex flex-col items-start space-y-3 md:space-y-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium text-sm md:text-base">
                  Responsive Design for Various Devices
                </h4>
              </div>
            </div>
          </div>
        </div>








      </section>

  <section className="relative w-full bg-black text-white py-20 md:py-32 overflow-hidden">
        {/* Background Pattern/Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-lime-400 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2L2,7L12,12L22,7L12,2M2,17L12,22L22,17L12,12L2,17Z"/>
              </svg>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight">
            Let us Bring your Ideas to Life in the Digital World.
          </h2>
          
          {/* Description Text */}
          <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 max-w-3xl mx-auto">
            No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.
          </p>

          {/* CTA Button */}
          <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 md:px-12 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Start Project
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-lime-400 rounded-full opacity-60"></div>
        <div className="absolute top-20 right-20 w-1 h-1 bg-lime-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-lime-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-lime-400 rounded-full opacity-30"></div>
  </section>


    </div>
  );
}
