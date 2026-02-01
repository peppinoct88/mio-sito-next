
'use client';

import { useEffect, useState, useRef } from 'react';

export default function DataProof() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = [10, 95, 100, 0];
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCounts(targets.map((target) => Math.round(target * easeOut)));
        if (step >= steps) clearInterval(timer);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    { value: counts[0], suffix: '+', label: 'Anni', sublabel: 'Al vertice delle istituzioni', icon: 'ri-time-line' },
    { value: counts[1], suffix: '%', label: 'Fidelizzazione', sublabel: 'Partnership durature', icon: 'ri-heart-line' },
    { value: counts[2], suffix: '%', label: 'Compliance', sublabel: 'Standard normativi', icon: 'ri-checkbox-circle-line' },
    { value: 'Zero', suffix: '', label: 'Errori', sublabel: 'Precisione garantita', icon: 'ri-focus-3-line' },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=Abstract%20architectural%20marble%20texture%20with%20subtle%20geometric%20patterns%2C%20deep%20navy%20blue%20and%20silver%20metallic%20tones%2C%20institutional%20luxury%20aesthetic%2C%20clean%20minimalist%20design%2C%20professional%20premium%20quality%2C%20subtle%20depth%20and%20shadows%2C%20sophisticated%20background%20texture&width=1920&height=800&seq=civika-data-bg&orientation=landscape"
          alt="Background"
          className="w-full h-full object-cover object-top opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/95 to-[#0A192F]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="w-8 sm:w-16 h-px bg-[#C0C0C0]"></div>
          <span className="text-[#C0C0C0] text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">04 — Risultati</span>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-8 mb-10 sm:mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F5F5] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              La Garanzia
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-end mt-4 lg:mt-0">
            <p className="text-base sm:text-lg lg:text-xl text-[#F5F5F5]/60">
              Numeri che definiscono l'eccellenza. Metriche che testimoniano l'impegno verso la perfezione.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
              }}
            >
              <div className="absolute -inset-px bg-gradient-to-b from-[#C0C0C0]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative p-4 sm:p-5 lg:p-8 bg-[#F5F5F5]/5 border border-[#F5F5F5]/10 group-hover:border-[#F5F5F5]/30 transition-all duration-500 h-full">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 bg-[#F5F5F5]/10 group-hover:bg-[#C0C0C0]/20 transition-colors duration-500">
                  <i className={`${stat.icon} text-lg sm:text-xl lg:text-2xl text-[#C0C0C0]`} aria-hidden="true"></i>
                </div>

                <div className="mb-2 sm:mb-3 lg:mb-4 flex items-baseline">
                  <span
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F5F5F5]"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {typeof stat.value === 'number' ? stat.value : stat.value}
                  </span>
                  <span
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#C0C0C0] ml-0.5 sm:ml-1"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {stat.suffix}
                  </span>
                </div>

                <div className="text-sm sm:text-base lg:text-lg text-[#F5F5F5] font-medium mb-1 sm:mb-2">{stat.label}</div>
                <div className="text-xs sm:text-sm text-[#F5F5F5]/50 hidden sm:block">{stat.sublabel}</div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C0C0C0] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
