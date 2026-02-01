'use client';

import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const radialGradient = `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(192,192,192,0.15) 0%, transparent 50%)`;

  const navItems = [
    { name: 'Manifesto', icon: 'ri-book-open-line', desc: 'La nostra visione' },
    { name: 'Metodo', icon: 'ri-compass-3-line', desc: 'Il nostro approccio' },
    { name: 'Servizi', icon: 'ri-stack-line', desc: 'Le nostre soluzioni' },
    { name: 'Governance', icon: 'ri-shield-star-line', desc: 'La nostra struttura' },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(1.1)` }}
        >
          <img
            src="https://readdy.ai/api/search-image?query=Cinematic%20ultra%20wide%20shot%20of%20monumental%20neoclassical%20government%20building%20facade%20with%20towering%20marble%20columns%20and%20grand%20entrance%2C%20dramatic%20upward%20angle%20perspective%2C%20deep%20navy%20blue%20twilight%20atmosphere%20with%20warm%20golden%20interior%20lighting%20glowing%20through%20windows%2C%20institutional%20architecture%20symbolizing%20authority%20and%20trust%2C%20volumetric%20fog%20rolling%20across%20steps%2C%20photorealistic%20architectural%20photography%2C%208k%20quality%2C%20professional%20composition%2C%20moody%20dramatic%20lighting%2C%20premium%20luxury%20aesthetic%2C%20sense%20of%20permanence%20and%20stability%2C%20civic%20grandeur%20and%20democratic%20values&width=1920&height=1080&seq=civika-hero-epic-001&orientation=landscape"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/60 to-[#0A192F]" />
        <div className="absolute inset-0 opacity-40 hidden md:block" style={{ background: radialGradient }} />
      </div>

      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none hidden md:block">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-[#C0C0C0]/20 to-transparent hero-line-float"
            style={{
              left: `${5 + i * 5}%`,
              height: '100%',
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      <nav
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 lg:py-6 transition-all duration-500"
        style={{
          backgroundColor: scrollY > 100 || menuOpen ? 'rgba(10,25,47,0.95)' : 'transparent',
          backdropFilter: scrollY > 100 || menuOpen ? 'blur(20px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://static.readdy.ai/image/640adb5b39f93fd5431710ed5e9933bf/6287314b30e94f8c6f70f25b309fada4.png"
              alt="CIVIKA Logo"
              className="h-10 sm:h-12 w-auto transition-all duration-500"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>

          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="text-[#F5F5F5]/70 hover:text-[#F5F5F5] transition-colors duration-300 text-sm tracking-widest uppercase cursor-pointer"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:block px-4 lg:px-6 py-2.5 lg:py-3 border border-[#F5F5F5]/30 text-[#F5F5F5] text-xs lg:text-sm tracking-wider hover:bg-[#F5F5F5]/10 hover:border-[#F5F5F5]/60 transition-all duration-300 whitespace-nowrap cursor-pointer">
              CONTATTO
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-12 h-12 flex items-center justify-center cursor-pointer group"
              aria-label="Menu"
            >
              <div className="absolute inset-0 rounded-full border border-[#F5F5F5]/20 group-hover:border-[#F5F5F5]/40 transition-all duration-300" />
              <div className="absolute inset-1 rounded-full bg-[#F5F5F5]/5 group-hover:bg-[#F5F5F5]/10 transition-all duration-300" />
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span 
                  className={`block h-0.5 bg-[#F5F5F5] rounded-full transition-all duration-500 origin-center ${
                    menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                  }`} 
                />
                <span 
                  className={`block h-0.5 bg-[#F5F5F5] rounded-full transition-all duration-300 ${
                    menuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                  }`} 
                />
                <span 
                  className={`block h-0.5 bg-[#F5F5F5] rounded-full transition-all duration-500 origin-center ${
                    menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                  }`} 
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-700 ${
          menuOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-[#0A192F] transition-opacity duration-500 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className={`absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-gradient-to-br from-[#1a3a5c]/50 to-transparent transition-all duration-1000 ${
              menuOpen ? 'scale-150 opacity-100' : 'scale-0 opacity-0'
            }`}
          />
          <div 
            className={`absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-gradient-to-tr from-[#C0C0C0]/10 to-transparent transition-all duration-1000 delay-200 ${
              menuOpen ? 'scale-150 opacity-100' : 'scale-0 opacity-0'
            }`}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-px bg-gradient-to-b from-transparent via-[#C0C0C0]/10 to-transparent h-full transition-all duration-700 ${
                menuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: `${15 + i * 15}%`,
                transitionDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>

        <div className="relative h-full flex flex-col pt-24 pb-8 px-6">
          <div className="flex-1 flex flex-col justify-center">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`group block py-4 transition-all duration-700 cursor-pointer ${
                    menuOpen 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: menuOpen ? `${index * 100 + 200}ms` : '0ms' }}
                >
                  <div className="flex items-center gap-5">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-2xl border border-[#F5F5F5]/10 group-hover:border-[#C0C0C0]/40 group-hover:bg-[#C0C0C0]/5 transition-all duration-500" />
                      <i className={`${item.icon} text-2xl text-[#C0C0C0] group-hover:text-[#F5F5F5] transition-colors duration-300`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl sm:text-3xl text-[#F5F5F5] tracking-wide group-hover:text-[#C0C0C0] transition-colors duration-300" style={{ fontFamily: 'Georgia, serif' }}>
                          {item.name}
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#F5F5F5]/20 to-transparent group-hover:from-[#C0C0C0]/40 transition-all duration-500" />
                        <i className="ri-arrow-right-line text-xl text-[#F5F5F5]/30 group-hover:text-[#C0C0C0] group-hover:translate-x-2 transition-all duration-300" />
                      </div>
                      <span className="text-sm text-[#F5F5F5]/40 tracking-wider mt-1 block group-hover:text-[#F5F5F5]/60 transition-colors duration-300">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div 
            className={`mt-8 transition-all duration-700 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: menuOpen ? '600ms' : '0ms' }}
          >
            <button 
              onClick={() => setMenuOpen(false)}
              className="group w-full relative overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5F5F5] to-[#C0C0C0] transition-transform duration-500 group-hover:scale-105" />
              <div className="relative px-8 py-5 flex items-center justify-center gap-3">
                <span className="text-[#0A192F] text-sm tracking-[0.2em] font-medium">CONTATTACI</span>
                <i className="ri-arrow-right-up-line text-lg text-[#0A192F] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </button>

            <div className="flex items-center justify-center gap-6 mt-8">
              {['ri-linkedin-fill', 'ri-twitter-x-fill', 'ri-instagram-line'].map((icon, i) => (
                <a
                  key={icon}
                  href="#"
                  className={`w-12 h-12 flex items-center justify-center rounded-full border border-[#F5F5F5]/20 text-[#F5F5F5]/60 hover:border-[#C0C0C0]/60 hover:text-[#F5F5F5] hover:bg-[#F5F5F5]/5 transition-all duration-300 cursor-pointer ${
                    menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`}
                  style={{ transitionDelay: menuOpen ? `${700 + i * 100}ms` : '0ms' }}
                >
                  <i className={`${icon} text-xl`} />
                </a>
              ))}
            </div>

            <p 
              className={`text-center text-[#F5F5F5]/30 text-xs tracking-wider mt-8 transition-all duration-500 ${
                menuOpen ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: menuOpen ? '900ms' : '0ms' }}
            >
              © 2024 CIVIKA. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32">
        <div className="grid grid-cols-12 gap-4 lg:gap-8 items-center min-h-[70vh]">
          <div className="col-span-12 lg:col-span-7">
            <div className="overflow-hidden mb-4 sm:mb-6">
              <div className="flex items-center gap-3 sm:gap-4 hero-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-8 sm:w-16 h-px bg-[#C0C0C0]" />
                <span className="text-[#C0C0C0] text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                  Infrastruttura Strategica
                </span>
              </div>
            </div>

            <div className="overflow-hidden">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#F5F5F5] leading-[1.1] sm:leading-[1.05] tracking-tight hero-slide-up"
                style={{ animationDelay: '0.4s', fontFamily: 'Georgia, serif' }}
              >
                L'architettura
                <br />
                <span className="text-[#C0C0C0]">della reputazione</span>
                <br />
                istituzionale.
              </h1>
            </div>

            <div className="overflow-hidden mt-4 sm:mt-6 lg:mt-8">
              <p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#F5F5F5]/70 leading-relaxed max-w-2xl hero-slide-up"
                style={{ animationDelay: '0.6s' }}
              >
                CIVIKA non è un fornitore. Siamo l'infrastruttura strategica su cui si costruisce la credibilità delle istituzioni.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12 hero-slide-up"
              style={{ animationDelay: '0.8s' }}
            >
              <button className="group w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 lg:py-5 bg-[#F5F5F5] text-[#0A192F] text-sm tracking-wider font-medium hover:bg-[#C0C0C0] transition-all duration-500 whitespace-nowrap cursor-pointer flex items-center justify-center gap-3">
                ESPLORA IL SISTEMA
                <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-4 lg:py-5 border border-[#F5F5F5]/30 text-[#F5F5F5] text-sm tracking-wider hover:bg-[#F5F5F5]/10 hover:border-[#F5F5F5]/60 transition-all duration-500 whitespace-nowrap cursor-pointer backdrop-blur-sm">
                GUARDA IL VIDEO
              </button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/20 via-transparent to-transparent blur-3xl hero-pulse-slow" />
              
              <div className="relative grid grid-cols-2 gap-4 hero-slide-up" style={{ animationDelay: '1s' }}>
                <div className="space-y-4">
                  <div className="group relative overflow-hidden border border-[#F5F5F5]/10 backdrop-blur-sm bg-[#F5F5F5]/5 p-6 hover:border-[#C0C0C0]/30 transition-all duration-500 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="w-12 h-12 flex items-center justify-center mb-4">
                        <i className="ri-shield-star-line text-3xl text-[#C0C0C0]" />
                      </div>
                      <h3 className="text-[#F5F5F5] text-lg font-medium mb-2" style={{ fontFamily: 'Georgia, serif' }}>Autorevolezza</h3>
                      <p className="text-[#F5F5F5]/60 text-sm">Costruiamo credibilità istituzionale</p>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden border border-[#F5F5F5]/10 backdrop-blur-sm bg-[#F5F5F5]/5 p-6 hover:border-[#C0C0C0]/30 transition-all duration-500 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="w-12 h-12 flex items-center justify-center mb-4">
                        <i className="ri-compass-3-line text-3xl text-[#C0C0C0]" />
                      </div>
                      <h3 className="text-[#F5F5F5] text-lg font-medium mb-2" style={{ fontFamily: 'Georgia, serif' }}>Strategia</h3>
                      <p className="text-[#F5F5F5]/60 text-sm">Metodologia rigorosa e precisa</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mt-8">
                  <div className="group relative overflow-hidden border border-[#F5F5F5]/10 backdrop-blur-sm bg-[#F5F5F5]/5 p-6 hover:border-[#C0C0C0]/30 transition-all duration-500 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="w-12 h-12 flex items-center justify-center mb-4">
                        <i className="ri-team-line text-3xl text-[#C0C0C0]" />
                      </div>
                      <h3 className="text-[#F5F5F5] text-lg font-medium mb-2" style={{ fontFamily: 'Georgia, serif' }}>Eccellenza</h3>
                      <p className="text-[#F5F5F5]/60 text-sm">Team di esperti dedicati</p>
                    </div>
                  </div>
                  
                  <div className="group relative overflow-hidden border border-[#F5F5F5]/10 backdrop-blur-sm bg-[#F5F5F5]/5 p-6 hover:border-[#C0C0C0]/30 transition-all duration-500 cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative">
                      <div className="w-12 h-12 flex items-center justify-center mb-4">
                        <i className="ri-line-chart-line text-3xl text-[#C0C0C0]" />
                      </div>
                      <h3 className="text-[#F5F5F5] text-lg font-medium mb-2" style={{ fontFamily: 'Georgia, serif' }}>Risultati</h3>
                      <p className="text-[#F5F5F5]/60 text-sm">Impatto misurabile e duraturo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-10 hero-bounce hidden sm:flex">
        <div className="flex flex-col items-center gap-2 text-[#F5F5F5]/50">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <i className="ri-arrow-down-line text-xl" />
        </div>
      </div>
    </section>
  );
}
