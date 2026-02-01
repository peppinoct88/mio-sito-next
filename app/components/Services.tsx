'use client';

import { useEffect, useRef, useState } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: 'Event Management Istituzionale',
      description: 'Architettura di relazioni e consenso. Orchestrazione di summit, conferenze e momenti istituzionali ad alto impatto.',
      image: 'https://readdy.ai/api/search-image?query=Prestigious%20institutional%20summit%20in%20grand%20marble%20hall%20with%20elegant%20chandeliers%20and%20sophisticated%20architecture%2C%20high-level%20government%20officials%20and%20executives%20in%20formal%20attire%20creating%20diplomatic%20atmosphere%2C%20deep%20navy%20blue%20and%20gold%20accents%20with%20professional%20photography%20and%20dramatic%20lighting%2C%20premium%20corporate%20event%20with%20architectural%20grandeur%2C%20wide%20angle%20cinematic%20composition%20showing%20authority%20and%20prestige&width=800&height=600&seq=civika-service-001-v2&orientation=landscape',
      icon: 'ri-government-line',
      stats: '150+ Eventi',
    },
    {
      title: 'Reputazione e Crisi',
      description: 'Protezione del capitale reputazionale. War room strategica per la gestione di scenari critici e comunicazione di crisi.',
      image: 'https://readdy.ai/api/search-image?query=Abstract%203D%20visualization%20of%20protective%20digital%20shield%20with%20hexagonal%20patterns%20and%20cybersecurity%20elements%2C%20deep%20navy%20blue%20and%20silver%20metallic%20tones%20creating%20high-tech%20concept%2C%20institutional%20protection%20infrastructure%20with%20geometric%20precision%20and%20subtle%20glow%20effects%2C%20futuristic%20defense%20system%20with%20premium%20quality%20cinematic%20render%20and%20dramatic%20volumetric%20lighting&width=800&height=600&seq=civika-service-002-v2&orientation=landscape',
      icon: 'ri-shield-check-line',
      stats: 'Zero Crisi Irrisolte',
    },
    {
      title: 'Comunicazione PA',
      description: 'Fiducia e trasparenza verso i cittadini. Strategie di comunicazione pubblica che costruiscono legittimità istituzionale.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20government%20building%20with%20contemporary%20glass%20and%20marble%20architecture%20at%20twilight%20with%20golden%20hour%20lighting%2C%20institutional%20authority%20and%20transparency%20symbolism%20with%20deep%20navy%20blue%20sky%2C%20clean%20geometric%20lines%20with%20professional%20architectural%20photography%2C%20premium%20quality%20sophisticated%20urban%20environment%2C%20wide%20angle%20perspective%20showing%20civic%20pride%20and%20public%20service&width=800&height=600&seq=civika-service-003-v2&orientation=landscape',
      icon: 'ri-building-4-line',
      stats: '40+ Enti Pubblici',
    },
    {
      title: 'Public Affairs',
      description: 'Gestione strategica delle relazioni. Navigazione degli ecosistemi decisionali con precisione chirurgica.',
      image: 'https://readdy.ai/api/search-image?query=Abstract%20network%20visualization%20with%20interconnected%20luminous%20nodes%20representing%20strategic%20relationships%20and%20data%20flow%2C%20deep%20navy%20blue%20atmosphere%20with%20silver%20metallic%20connections%20creating%20high-tech%20minimalist%20aesthetic%2C%20institutional%20network%20mapping%20with%20geometric%20precision%20and%20professional%20corporate%20environment%2C%20premium%203D%20render%20with%20volumetric%20lighting%20showing%20connectivity&width=800&height=600&seq=civika-service-004-v2&orientation=landscape',
      icon: 'ri-links-line',
      stats: '200+ Stakeholder',
    },
    {
      title: 'Corporate Governance',
      description: 'Autorevolezza per grandi aziende. Framework di comunicazione per board, C-suite e azionisti.',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20executive%20boardroom%20with%20panoramic%20city%20view%20at%20night%20and%20modern%20minimalist%20design%2C%20deep%20navy%20blue%20and%20marble%20white%20color%20scheme%20with%20sophisticated%20lighting%2C%20high-end%20furniture%20creating%20authoritative%20corporate%20atmosphere%2C%20professional%20architectural%20photography%20with%20cinematic%20wide%20angle%2C%20sense%20of%20power%20and%20strategic%20decision%20making&width=800&height=600&seq=civika-service-005-v2&orientation=landscape',
      icon: 'ri-briefcase-4-line',
      stats: '25+ Corporate',
    },
    {
      title: 'Digital Transformation',
      description: 'Innovazione istituzionale. Digitalizzazione dei processi comunicativi con standard di sicurezza governativi.',
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20digital%20transformation%20visualization%20with%20holographic%20interfaces%20and%20data%20streams%20floating%20in%20space%2C%20deep%20navy%20blue%20environment%20with%20cyan%20and%20silver%20accents%20creating%20high-tech%20institutional%20innovation%20concept%2C%20geometric%20precision%20with%20professional%20corporate%20aesthetic%2C%20premium%203D%20render%20with%20volumetric%20effects%20and%20cinematic%20lighting%20showing%20technological%20advancement&width=800&height=600&seq=civika-service-006-v2&orientation=landscape',
      icon: 'ri-cpu-line',
      stats: '100% Compliance',
    },
  ];

  return (
    <section 
      id="servizi" 
      ref={sectionRef} 
      className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0D1E33] to-[#0A192F]">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Cinematic%20abstract%20visualization%20of%20interconnected%20service%20ecosystem%20with%20geometric%20patterns%20and%20flowing%20elements%2C%20deep%20navy%20blue%20and%20silver%20metallic%20tones%20creating%20sense%20of%20comprehensive%20solutions%2C%20high-tech%20minimalist%20aesthetic%20with%20architectural%20precision%2C%20professional%20premium%20quality%20with%20dramatic%20lighting%20and%20volumetric%20atmosphere%2C%208k%20quality%20photorealistic%20rendering%20symbolizing%20integrated%20services&width=1920&height=1200&seq=civika-services-bg-v2&orientation=landscape"
            alt="Services Background"
            className="w-full h-full object-cover object-center opacity-15"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A192F]/60 to-[#0A192F]" />
      </div>

      {isMounted && (
        <>
          <div className="absolute inset-0 opacity-25 hidden md:block pointer-events-none">
            {[...Array(40)].map((_, i) => (
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
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-[#C0C0C0]/15 to-transparent"
                style={{
                  left: `${8 + i * 9}%`,
                  animation: `manifesto-line-glow ${4 + i * 0.3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </>
      )}

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-[#C0C0C0] to-transparent"></div>
          <span className="text-[#C0C0C0] text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">03 — Servizi</span>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-7">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#F5F5F5] leading-tight transition-all duration-1000"
              style={{ 
                fontFamily: 'Georgia, serif',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              Ecosistema di Servizi
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end mt-4 lg:mt-0">
            <p 
              className="text-base sm:text-lg lg:text-xl text-[#F5F5F5]/60 transition-all duration-1000 delay-200"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              Soluzioni integrate per la governance della comunicazione istituzionale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden cursor-pointer"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                transitionDelay: `${0.4 + index * 0.1}s`,
              }}
            >
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/60 to-transparent"></div>

                <div
                  className={`absolute inset-0 bg-[#0A192F]/90 backdrop-blur-sm transition-opacity duration-500 flex items-center justify-center p-6 sm:p-8 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#C0C0C0]/20 border border-[#C0C0C0]/40">
                      <i className={`${service.icon} text-3xl text-[#C0C0C0]`}></i>
                    </div>
                    <p className="text-sm sm:text-base text-[#F5F5F5]/90 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#F5F5F5]/10 backdrop-blur-sm border border-[#F5F5F5]/20 group-hover:bg-[#C0C0C0] group-hover:border-[#C0C0C0] transition-all duration-500">
                  <i className={`${service.icon} text-xl sm:text-2xl text-[#F5F5F5] group-hover:text-[#0A192F] transition-colors duration-500`}></i>
                </div>

                <div className="absolute top-4 sm:top-5 right-4 sm:right-5 px-3 py-1.5 bg-[#0A192F]/80 backdrop-blur-sm border border-[#F5F5F5]/20">
                  <span className="text-[#C0C0C0] text-xs tracking-wider font-medium">{service.stats}</span>
                </div>

                <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
                  <h3 className="text-xl sm:text-2xl text-[#F5F5F5] font-medium mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    {service.title}
                  </h3>
                  <div className="w-12 h-px bg-gradient-to-r from-[#C0C0C0] to-transparent"></div>
                </div>
              </div>

              <div className="p-5 sm:p-6 bg-[#F5F5F5]/5 border border-[#F5F5F5]/10 border-t-0 group-hover:bg-[#F5F5F5]/10 group-hover:border-[#F5F5F5]/20 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <span className="text-[#F5F5F5]/50 text-sm">Scopri di più</span>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <i className="ri-arrow-right-up-line text-xl text-[#C0C0C0] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C0C0C0] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
