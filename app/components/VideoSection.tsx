
'use client';

import { useEffect, useRef, useState } from 'react';

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const current = sectionRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, []);

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
          <div
            className="col-span-12 lg:col-span-5 order-2 lg:order-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-16 h-px bg-[#C0C0C0]"></div>
              <span className="text-[#C0C0C0] text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">Vision</span>
            </div>

            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F5F5F5] leading-tight mb-4 sm:mb-6 lg:mb-8"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              L'eccellenza nella comunicazione istituzionale
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-[#F5F5F5]/60 leading-relaxed mb-6 sm:mb-8">
              Scopri come CIVIKA trasforma la complessità in opportunità strategica, costruendo ponti di fiducia tra istituzioni e cittadini.
            </p>

            <div className="flex items-center gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F5F5F5]" style={{ fontFamily: 'Georgia, serif' }}>
                  2:45
                </div>
                <div className="text-xs sm:text-sm text-[#F5F5F5]/50">Durata</div>
              </div>
              <div className="w-px h-8 sm:h-12 bg-[#F5F5F5]/20"></div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#F5F5F5]" style={{ fontFamily: 'Georgia, serif' }}>
                  4K
                </div>
                <div className="text-xs sm:text-sm text-[#F5F5F5]/50">Qualità</div>
              </div>
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-7 order-1 lg:order-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}
          >
            <div className="relative group cursor-pointer" onClick={handleTogglePlay} aria-label={isPlaying ? 'Pause video' : 'Play video'}>
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=Cinematic%20video%20thumbnail%20showing%20prestigious%20institutional%20conference%20hall%20with%20dramatic%20lighting%2C%20marble%20columns%20and%20modern%20architecture%2C%20deep%20navy%20blue%20atmosphere%20with%20golden%20accents%2C%20professional%20corporate%20environment%2C%20high-end%20production%20quality%2C%20film%20grain%20texture%2C%20wide%20angle%20cinematic%20composition%2C%20premium%20luxury%20aesthetic&width=1280&height=720&seq=civika-video-thumb&orientation=landscape"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#0A192F]/40 group-hover:bg-[#0A192F]/30 transition-colors duration-500"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#F5F5F5] rounded-full animate-ping opacity-20"></div>
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center bg-[#F5F5F5] rounded-full group-hover:scale-110 transition-transform duration-500">
                      <i className="ri-play-fill text-2xl sm:text-3xl lg:text-4xl text-[#0A192F] ml-1"></i>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 bg-gradient-to-t from-[#0A192F] to-transparent">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <div className="text-[#F5F5F5] font-medium text-sm sm:text-base mb-0.5 sm:mb-1">CIVIKA Corporate Video</div>
                      <div className="text-[#F5F5F5]/50 text-xs sm:text-sm">L'infrastruttura della reputazione</div>
                    </div>
                    <div className="flex items-center gap-2 text-[#F5F5F5]/50 text-xs sm:text-sm">
                      <i className="ri-eye-line"></i>
                      <span>12.5K views</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-[#C0C0C0]/30 pointer-events-none hidden sm:block"></div>
              <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border border-[#C0C0C0]/30 pointer-events-none hidden sm:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
