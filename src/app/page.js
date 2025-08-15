'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const splashVideoRef = useRef(null);
  const bgVideoRef = useRef(null);

  useEffect(() => {
    const splashVideo = splashVideoRef.current;
    const bgVideo = bgVideoRef.current;

    const tryAutoplay = (video) => {
      if (video) {
        video.muted = true;
        video.playsInline = true;
        video.autoplay = true;

        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.warn('Autoplay failed:', err);
          });
        }
      }
    };

    tryAutoplay(splashVideo);
    tryAutoplay(bgVideo);

    if (splashVideo) {
      splashVideo.onended = () => setShowSplash(false);

      const timeout = setTimeout(() => {
        setShowSplash(false);
      }, 6000);

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Splash Video */}
      {showSplash && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <video
            ref={splashVideoRef}
            muted
            autoPlay
            playsInline
            preload="auto"
            loading="eager"
            className="w-full h-full object-cover"
            onError={(e) => console.error('Splash video error:', e)}
          >
            <source
              src="https://res.cloudinary.com/dyfutod3m/video/upload/v1754240114/intro_wiqhff.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Main Page Content */}
      <main className={`${showSplash ? 'hidden' : 'block'}`}>
        <div className="relative h-screen w-full overflow-hidden text-center flex items-center justify-center">
          {/* Background Video */}
          <video
            ref={bgVideoRef}
            muted
            autoPlay
            loop
            playsInline
            preload="auto"
            loading="eager"
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            onError={(e) => console.error('Background video error:', e)}
          >
            <source
              src="https://res.cloudinary.com/dyfutod3m/video/upload/v1754240148/binarycode_undm3w.mp4"
              type="video/mp4"
            />
          </video>

          {/* Content */}
          <div className="relative z-10 text-white p-8 text-center max-w-3xl">
            <h1 className="text-4xl font-aquarium">AI-Powered Software Development</h1>
            <h2 className="text-lg md:text-xl text-gray-300 mt-2">
              Smarter Code. Faster Results. Powered by AI.
            </h2>
            <p className="text-white text-base md:text-lg mt-4">
              We build intelligent, scalable software using cutting-edge AI technologies —
              tailored to automate workflows, accelerate growth, and drive digital transformation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
