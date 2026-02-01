
'use client';

import { useEffect, useRef, useState } from 'react';

export default function Positioning() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const traditionalItems = [
    { title: 'Esecuzione tattica', desc: 'Approccio progettuale limitato' },
    { title: 'Competizione sul prezzo', desc: 'Valore non differenziato' },
    { title: 'Rischio operativo', desc: 'Margine di errore elevato' },
    { title: 'Reattività', desc: 'Gestione emergenziale' },
  ];

  const civikaItems = [
    { title: 'Partner strategico', desc: 'Infrastruttura di governance completa' },
    { title: 'Governance rigida', desc: 'Controllo assoluto su ogni elemento' },
    { title: 'Integrazione nativa', desc: 'Ecosistema coerente e sicuro' },
    { title: 'Proattività', desc: 'Anticipazione degli scenari' },
  ];

  const clients = [
    { name: 'Istituzioni Pubbliche', icon: 'ri-government-line' },
    { name: 'Grandi Organizzazioni', icon: 'ri-building-2-line' },
    { name: 'Top Management', icon: 'ri-user-star-line' },
    { name: 'Enti Regolatori', icon: 'ri-scales-3-line' },
  ];

  return (
    <section id="governance" ref={sectionRef} className="py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0A192F] to-[#050D1A]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="w-8 sm:w-16 h-px bg-[#C0C0C0]"></div>
          <span className="text-[#C0C0C0] text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">05 — Posizionamento</span>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-8 mb-10 sm:mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F5F5] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              La scelta quando l'errore<br className="hidden sm:block" /> non è un'opzione.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-24 lg:mb-32">
          <div
            className="relative overflow-hidden"
            style={{
              opacity: isVisible ? 0.5 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F5]/5 to-transparent"></div>
            <div className="relative p-5 sm:p-6 lg:p-10 border border-[#F5F5F5]/10">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#F5F5F5]/10">
                  <i className="ri-close-line text-lg sm:text-xl text-[#F5F5F5]/40"></i>
                </div>
                <span className="text-[#F5F5F5]/40 text-xs sm:text-sm tracking-widest uppercase">Agenzie Tradizionali</span>
              </div>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {traditionalItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                      <i className="ri-subtract-line text-[#F5F5F5]/30"></i>
                    </div>
                    <div>
                      <div className="text-sm sm:text-base lg:text-lg text-[#F5F5F5]/50 mb-0.5 sm:mb-1">{item.title}</div>
                      <div className="text-xs sm:text-sm text-[#F5F5F5]/30">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
            }}
          >
            <div className="absolute -inset-px bg-gradient-to-br from-[#C0C0C0]/30 via-[#C0C0C0]/10 to-transparent"></div>
            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-[#C0C0C0]/10 blur-3xl"></div>

            <div className="relative p-5 sm:p-6 lg:p-10 border-2 border-[#C0C0C0]/40 bg-[#F5F5F5]/5">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[#C0C0C0]">
                  <i className="ri-check-line text-lg sm:text-xl text-[#0A192F]"></i>
                </div>
                <span className="text-[#F5F5F5] text-xs sm:text-sm tracking-widest uppercase font-medium">CIVIKA</span>
              </div>

              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                {civikaItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mt-0.5 sm:mt-1 flex-shrink-0">
                      <i className="ri-arrow-right-s-line text-[#C0C0C0]"></i>
                    </div>
                    <div>
                      <div className="text-sm sm:text-base lg:text-lg text-[#F5F5F5] mb-0.5 sm:mb-1 font-medium">{item.title}</div>
                      <div className="text-xs sm:text-sm text-[#F5F5F5]/60">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
          }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F5F5F5] mb-6 sm:mb-8 lg:mb-12" style={{ fontFamily: 'Georgia, serif' }}>
            Scelto da chi governa la complessità
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group p-4 sm:p-6 lg:p-8 bg-[#F5F5F5]/5 border border-[#F5F5F5]/10 hover:bg-[#F5F5F5]/10 hover:border-[#F5F5F5]/30 transition-all duration-500 cursor-pointer"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 bg-[#F5F5F5]/10 group-hover:bg-[#C0C0C0]/20 transition-colors duration-500">
                  <i className={`${client.icon} text-lg sm:text-xl lg:text-2xl text-[#C0C0C0]`}></i>
                </div>
                <span className="text-[#F5F5F5]/70 text-xs sm:text-sm block">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
