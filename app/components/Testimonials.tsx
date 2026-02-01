
'use client';

import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "CIVIKA ha trasformato il nostro approccio alla comunicazione istituzionale. La loro metodologia rigorosa ci ha permesso di navigare scenari complessi con sicurezza assoluta.",
    author: "Dott. Marco Bianchi",
    role: "Direttore Generale",
    org: "Ministero dell'Innovazione",
    image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20distinguished%20Italian%20male%20executive%20in%20his%2050s%2C%20silver%20grey%20hair%2C%20wearing%20elegant%20dark%20navy%20suit%2C%20confident%20authoritative%20expression%2C%20neutral%20grey%20background%2C%20professional%20corporate%20photography%2C%20high-end%20portrait%20lighting&width=200&height=200&seq=civika-test-001&orientation=squarish",
  },
  {
    quote: "La precisione e l'attenzione ai dettagli di CIVIKA sono incomparabili. Ogni evento che hanno orchestrato ha superato le nostre aspettative più elevate.",
    author: "Dott.ssa Elena Rossi",
    role: "Presidente",
    org: "Fondazione Europea per lo Sviluppo",
    image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20elegant%20Italian%20female%20executive%20in%20her%2040s%2C%20sophisticated%20appearance%2C%20wearing%20dark%20professional%20attire%2C%20confident%20warm%20expression%2C%20neutral%20grey%20background%2C%20professional%20corporate%20photography%2C%20high-end%20portrait%20lighting&width=200&height=200&seq=civika-test-002&orientation=squarish",
  },
  {
    quote: "In momenti di crisi, CIVIKA è stata la nostra ancora. La loro capacità di gestire situazioni ad alta pressione con calma e strategia è straordinaria.",
    author: "Ing. Alessandro Conti",
    role: "CEO",
    org: "Gruppo Industriale Nazionale",
    image: "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20distinguished%20Italian%20male%20CEO%20in%20his%2060s%2C%20grey%20hair%2C%20wearing%20premium%20dark%20suit%20with%20subtle%20pinstripes%2C%20authoritative%20wise%20expression%20neutral%20grey%20background%20professional%20corporate%20photography%20high-end%20portrait%20lighting&width=200&height=200&seq=civika-test-003&orientation=squarish",
  },
] as const;

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || testimonials.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050D1A] to-[#0A192F] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="w-8 sm:w-16 h-px bg-[#C0C0C0]" />
          <span className="text-[#C0C0C0] text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">Testimonianze</span>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F5F5] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Voci di Leadership
            </h2>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 text-6xl sm:text-8xl md:text-[120px] lg:text-[200px] text-[#F5F5F5]/5 leading-none pointer-events-none" style={{ fontFamily: 'Georgia, serif' }}>
            &quot;
          </div>

          <div className="relative min-h-[300px] sm:min-h-[350px] lg:min-h-[400px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  activeIndex === index ? 'opacity-100 translate-x-0' : index < activeIndex ? 'opacity-0 -translate-x-20' : 'opacity-0 translate-x-20'
                }`}
              >
                <div className="grid grid-cols-12 gap-4 lg:gap-8 items-center">
                  <div className="col-span-12 lg:col-span-8">
                    <blockquote
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F5F5F5] leading-relaxed mb-6 sm:mb-8 lg:mb-12"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      &quot;{testimonial.quote}&quot;
                    </blockquote>

                    <div className="flex items-center gap-4 sm:gap-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-[#C0C0C0]/30 flex-shrink-0">
                        <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover object-top" />
                      </div>
                      <div>
                        <div className="text-base sm:text-lg lg:text-xl text-[#F5F5F5] font-medium">{testimonial.author}</div>
                        <div className="text-[#C0C0C0] text-sm sm:text-base">{testimonial.role}</div>
                        <div className="text-[#F5F5F5]/50 text-xs sm:text-sm">{testimonial.org}</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-12 lg:col-span-4 hidden lg:block">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C0C0C0]/20 to-transparent blur-3xl" />
                      <div className="relative w-48 h-48 xl:w-64 xl:h-64 mx-auto rounded-full overflow-hidden border-4 border-[#C0C0C0]/20">
                        <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover object-top" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 sm:mt-10 lg:mt-12">
            <div className="flex gap-2 sm:gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 transition-all duration-500 cursor-pointer ${
                    activeIndex === index ? 'w-8 sm:w-12 bg-[#C0C0C0]' : 'w-2 bg-[#F5F5F5]/20 hover:bg-[#F5F5F5]/40'
                  }`}
                  aria-label={`Vai al testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-3 sm:gap-4">
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-[#F5F5F5]/20 hover:border-[#F5F5F5]/40 hover:bg-[#F5F5F5]/10 transition-all duration-300 cursor-pointer"
                aria-label="Testimonial precedente"
              >
                <i className="ri-arrow-left-line text-[#F5F5F5]" />
              </button>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-[#F5F5F5]/20 hover:border-[#F5F5F5]/40 hover:bg-[#F5F5F5]/10 transition-all duration-300 cursor-pointer"
                aria-label="Testimonial successivo"
              >
                <i className="ri-arrow-right-line text-[#F5F5F5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
