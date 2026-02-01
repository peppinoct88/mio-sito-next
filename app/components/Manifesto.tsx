'use client';

import { useEffect, useRef, useState } from 'react';

export default function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    const node = sectionRef.current;
    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let animationFrame: number;
    const updateProgress = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
        setScrollProgress(progress);
      }
      animationFrame = requestAnimationFrame(updateProgress);
    };
    animationFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const words = "In un'epoca in cui ogni parola può determinare la credibilità, l'improvvisazione non è un'opzione.".split(' ');

  const principles = [
    {
      icon: 'ri-shield-check-line',
      title: 'Integrità Assoluta',
      description: 'Ogni comunicazione è costruita su fondamenta di verità e trasparenza istituzionale.',
    },
    {
      icon: 'ri-eye-line',
      title: 'Visione Strategica',
      description: 'Anticipiamo scenari, prevediamo rischi, costruiamo narrazioni che resistono al tempo.',
    },
    {
      icon: 'ri-trophy-line',
      title: 'Eccellenza Operativa',
      description: 'Standard qualitativi che superano le aspettative del settore pubblico e privato.',
    },
  ];

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0f2847] to-[#0A192F]">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Cinematic%20aerial%20view%20of%20modern%20institutional%20architecture%20with%20geometric%20patterns%20and%20clean%20lines%20showcasing%20symmetry%20and%20order%2C%20deep%20navy%20blue%20and%20silver%20metallic%20tones%20creating%20sense%20of%20authority%20and%20precision%2C%20abstract%20architectural%20photography%20with%20dramatic%20lighting%20from%20above%2C%20professional%20premium%20quality%20with%20minimalist%20luxury%20aesthetic%2C%20architectural%20details%20symbolizing%20structure%20and%20governance%2C%208k%20quality%20photorealistic%20rendering%20with%20volumetric%20atmosphere&width=1920&height=1200&seq=civika-manifesto-epic-bg-v2&orientation=landscape"
            alt="Manifesto Background"
            className="w-full h-full object-cover object-center opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/60 to-[#0A192F]" />
      </div>

      {isMounted && (
        <>
          <div className="absolute inset-0 opacity-30 hidden md:block pointer-events-none">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-[#C0C0C0]"
                style={{
                  width: `${1 + Math.random() * 3}px`,
                  height: `${1 + Math.random() * 3}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `manifesto-pulse ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#C0C0C0]/15 to-transparent"
                style={{
                  left: `${5 + i * 8}%`,
                  animation: `manifesto-line-glow ${4 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </>
      )}

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[1000px] h-[400px] sm:h-[600px] lg:h-[1000px] rounded-full border border-[#C0C0C0]/10 pointer-events-none"
        style={{ 
          transform: `translate(-50%, -50%) scale(${0.7 + scrollProgress * 0.5}) rotate(${scrollProgress * 45}deg)`,
          transition: 'transform 0.1s linear',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[700px] h-[300px] sm:h-[450px] lg:h-[700px] rounded-full border border-[#F5F5F5]/10 pointer-events-none"
        style={{ 
          transform: `translate(-50%, -50%) scale(${0.8 + scrollProgress * 0.4}) rotate(${-scrollProgress * 30}deg)`,
          transition: 'transform 0.1s linear',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-[#C0C0C0] to-transparent"></div>
          <span className="text-[#C0C0C0] text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">01 — Manifesto</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <div className="relative inline-block mb-8 sm:mb-12">
                <div 
                  className="absolute -inset-6 bg-gradient-to-r from-[#C0C0C0]/20 via-transparent to-transparent blur-3xl transition-opacity duration-1000"
                  style={{ opacity: isVisible ? 0.7 : 0 }}
                />
                <p className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#F5F5F5] leading-[1.2] sm:leading-[1.15]" style={{ fontFamily: 'Georgia, serif' }}>
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="inline-block mr-3 sm:mr-4 lg:mr-5 transition-all duration-700"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                        transitionDelay: `${index * 80}ms`,
                      }}
                    >
                      {word}
                    </span>
                  ))}
                </p>
              </div>

              <div 
                className="w-32 sm:w-40 lg:w-48 h-1 bg-gradient-to-r from-[#C0C0C0] via-[#F5F5F5]/50 to-transparent transition-all duration-1000 delay-1000"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                }}
              />
            </div>

            <div
              className="relative group transition-all duration-1000 mb-8 lg:mb-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transitionDelay: '1.2s',
              }}
            >
              <div className="absolute -inset-6 bg-gradient-to-br from-[#C0C0C0]/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />
              <div className="relative p-8 sm:p-10 lg:p-12 border-l-4 border-[#C0C0C0] bg-gradient-to-r from-[#F5F5F5]/5 to-transparent group-hover:from-[#F5F5F5]/10 transition-all duration-500">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-6 bg-gradient-to-br from-[#C0C0C0]/20 to-transparent border border-[#F5F5F5]/20 group-hover:border-[#C0C0C0]/50 transition-all duration-500">
                  <i className="ri-quote-text text-3xl sm:text-4xl text-[#C0C0C0]" />
                </div>
                <p className="text-2xl sm:text-3xl lg:text-4xl text-[#F5F5F5] font-medium leading-tight mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                  CIVIKA è garanzia.
                </p>
                <p className="text-2xl sm:text-3xl lg:text-4xl text-[#C0C0C0] font-medium leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  È controllo assoluto.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              className="relative group transition-all duration-1000 mb-8 sm:mb-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                transitionDelay: '1.4s',
              }}
            >
              <div className="absolute -inset-4 bg-gradient-to-bl from-[#C0C0C0]/10 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              <div className="relative">
                <p className="text-xl sm:text-2xl md:text-3xl text-[#F5F5F5]/90 leading-relaxed mb-8" style={{ fontFamily: 'Georgia, serif' }}>
                  Non eseguiamo progetti: orchestriamo ecosistemi di comunicazione dove ogni elemento genera fiducia.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {principles.map((principle, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden transition-all duration-1000"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                    transitionDelay: `${1.6 + index * 0.15}s`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C0C0C0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 border border-[#F5F5F5]/10 group-hover:border-[#C0C0C0]/30 transition-colors duration-500" />
                  
                  <div className="relative p-6 sm:p-7 flex items-start gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#F5F5F5]/10 group-hover:bg-[#C0C0C0]/20 group-hover:scale-110 transition-all duration-500 flex-shrink-0">
                      <i className={`${principle.icon} text-2xl sm:text-3xl text-[#C0C0C0] group-hover:text-[#F5F5F5] transition-colors duration-500`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl text-[#F5F5F5] font-medium mb-2 group-hover:text-[#C0C0C0] transition-colors duration-500" style={{ fontFamily: 'Georgia, serif' }}>
                        {principle.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-[#F5F5F5]/60 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-center w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 flex-shrink-0">
                      <i className="ri-arrow-right-line text-xl text-[#C0C0C0]" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#C0C0C0] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
