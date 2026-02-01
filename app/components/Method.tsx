'use client';

import { useEffect, useRef, useState } from 'react';

export default function Method() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      subtitle: 'Analisi Strategica',
      description: 'Analisi del contesto istituzionale e vincoli normativi. Mappatura completa degli stakeholder e delle dinamiche di potere.',
      icon: 'ri-radar-line',
      visual: 'https://readdy.ai/api/search-image?query=Abstract%20radar%20scanning%20visualization%20with%20concentric%20circles%20and%20data%20points%20floating%20in%20space%2C%20deep%20navy%20blue%20background%20with%20silver%20metallic%20accents%20creating%20high-tech%20minimalist%20aesthetic%2C%20institutional%20analysis%20concept%20with%20geometric%20precision%20and%20subtle%20glow%20effects%2C%20professional%20corporate%20environment%20with%20premium%20quality%203D%20render%20and%20dramatic%20volumetric%20lighting%2C%20sense%20of%20authority%20and%20strategic%20intelligence&width=800&height=600&seq=civika-method-001-v2&orientation=landscape',
    },
    {
      number: '02',
      title: 'Design',
      subtitle: 'Architettura Sistemica',
      description: 'Progettazione ecosistemi di comunicazione coerenti. Blueprint strategico per ogni touchpoint istituzionale.',
      icon: 'ri-draft-line',
      visual: 'https://readdy.ai/api/search-image?query=Architectural%20blueprint%20wireframe%20visualization%20with%20geometric%20grid%20patterns%20and%20technical%20schematic%20lines%2C%20deep%20navy%20blue%20and%20silver%20color%20scheme%20creating%20technical%20aesthetic%2C%20institutional%20design%20concept%20with%20clean%20minimalist%20lines%20and%20professional%20precision%2C%20subtle%20depth%20layers%20with%20premium%20quality%203D%20render%2C%20sense%20of%20structure%20and%20systematic%20planning%2C%20volumetric%20lighting%20effects&width=800&height=600&seq=civika-method-002-v2&orientation=landscape',
    },
    {
      number: '03',
      title: 'Orchestration',
      subtitle: 'Esecuzione Controllata',
      description: 'Gestione operativa con standard di compliance pubblica. Coordinamento sinergico di ogni elemento comunicativo.',
      icon: 'ri-organization-chart',
      visual: 'https://readdy.ai/api/search-image?query=Abstract%20orchestration%20network%20with%20interconnected%20luminous%20nodes%20and%20flowing%20data%20streams%20in%20space%2C%20deep%20navy%20blue%20atmosphere%20with%20silver%20metallic%20connections%20creating%20high-tech%20governance%20visualization%2C%20institutional%20control%20concept%20with%20geometric%20precision%20and%20professional%20corporate%20aesthetic%2C%20premium%20quality%203D%20render%20with%20volumetric%20lighting%2C%20sense%20of%20coordination%20and%20systematic%20execution&width=800&height=600&seq=civika-method-003-v2&orientation=landscape',
    },
    {
      number: '04',
      title: 'Measurement',
      subtitle: 'Ottimizzazione Continua',
      description: 'Monitoraggio impatto e ottimizzazione continua. Dashboard di governance per decisioni data-driven.',
      icon: 'ri-pulse-line',
      visual: 'https://readdy.ai/api/search-image?query=Advanced%20analytics%20dashboard%20visualization%20with%20charts%20and%20metrics%20floating%20in%20space%20with%20holographic%20displays%2C%20deep%20navy%20blue%20background%20with%20silver%20and%20white%20data%20visualizations%20creating%20high-tech%20measurement%20concept%2C%20institutional%20performance%20monitoring%20with%20geometric%20precision%20and%20professional%20corporate%20aesthetic%2C%20premium%20quality%203D%20render%20with%20volumetric%20effects%2C%20sense%20of%20precision%20and%20continuous%20optimization&width=800&height=600&seq=civika-method-004-v2&orientation=landscape',
    },
  ];

  return (
    <section
      id="metodo"
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0D1E33] to-[#0A192F]">
        <div className="absolute inset-0">
          <img
            src="https://readdy.ai/api/search-image?query=Cinematic%20abstract%20visualization%20of%20interconnected%20geometric%20patterns%20and%20flowing%20data%20streams%20representing%20systematic%20process%2C%20deep%20navy%20blue%20and%20silver%20metallic%20tones%20creating%20sense%20of%20precision%20and%20methodology%2C%20high-tech%20minimalist%20aesthetic%20with%20architectural%20elements%2C%20professional%20premium%20quality%20with%20dramatic%20lighting%20and%20volumetric%20atmosphere%2C%208k%20quality%20photorealistic%20rendering%20symbolizing%20structured%20approach&width=1920&height=1200&seq=civika-method-bg-v2&orientation=landscape"
            alt="Method Background"
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
          <span className="text-[#C0C0C0] text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">02 — Processo</span>
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
              Il Metodo CIVIKA
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
              Governance della Complessità attraverso un processo rigoroso e replicabile.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-3 sm:space-y-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`group relative p-5 sm:p-6 lg:p-7 cursor-pointer transition-all duration-500 border-l-2 overflow-hidden ${
                    activeStep === index
                      ? 'bg-[#F5F5F5]/10 border-[#C0C0C0]'
                      : 'bg-transparent border-[#F5F5F5]/10 hover:bg-[#F5F5F5]/5 hover:border-[#F5F5F5]/30'
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                    transitionDelay: `${0.4 + index * 0.1}s`,
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-[#C0C0C0]/5 to-transparent transition-opacity duration-500 ${activeStep === index ? 'opacity-100' : 'opacity-0'}`} />
                  
                  <div className="relative flex items-start gap-4 sm:gap-5">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-500 flex-shrink-0 ${
                        activeStep === index ? 'bg-[#C0C0C0] text-[#0A192F] scale-110' : 'bg-[#F5F5F5]/10 text-[#F5F5F5]/60'
                      }`}
                    >
                      <i className={`${step.icon} text-xl sm:text-2xl`}></i>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs tracking-widest transition-colors duration-500 ${activeStep === index ? 'text-[#C0C0C0]' : 'text-[#F5F5F5]/40'}`}>
                          {step.number}
                        </span>
                        <span className={`text-lg sm:text-xl font-medium transition-colors duration-500 ${activeStep === index ? 'text-[#F5F5F5]' : 'text-[#F5F5F5]/70'}`} style={{ fontFamily: 'Georgia, serif' }}>
                          {step.title}
                        </span>
                      </div>
                      <p className={`text-sm sm:text-base transition-colors duration-500 ${activeStep === index ? 'text-[#F5F5F5]/70' : 'text-[#F5F5F5]/40'}`}>
                        {step.subtitle}
                      </p>
                    </div>

                    <div className={`w-8 h-8 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${activeStep === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                      <i className="ri-arrow-right-line text-xl text-[#C0C0C0]"></i>
                    </div>
                  </div>

                  <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#C0C0C0] to-transparent transition-all duration-500 ${activeStep === index ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} origin-left`} />
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    activeStep === index ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="relative overflow-hidden mb-6 sm:mb-8 group">
                    <div className="relative overflow-hidden">
                      <img 
                        src={step.visual} 
                        alt={step.title} 
                        className="w-full h-56 sm:h-72 lg:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/40 to-transparent"></div>
                    </div>
                    
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 px-4 py-2 bg-[#0A192F]/90 backdrop-blur-sm border border-[#F5F5F5]/20">
                      <span className="text-[#C0C0C0] text-sm sm:text-base tracking-widest font-medium">{step.number}</span>
                    </div>

                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#C0C0C0]/20 backdrop-blur-sm border border-[#F5F5F5]/30">
                          <i className={`${step.icon} text-xl sm:text-2xl text-[#F5F5F5]`}></i>
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl text-[#F5F5F5] font-medium" style={{ fontFamily: 'Georgia, serif' }}>
                          {step.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 bg-[#F5F5F5]/5 backdrop-blur-sm border border-[#F5F5F5]/10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-1 h-16 bg-gradient-to-b from-[#C0C0C0] to-transparent"></div>
                      <div>
                        <p className="text-lg sm:text-xl text-[#C0C0C0] font-medium mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                          {step.subtitle}
                        </p>
                        <p className="text-base sm:text-lg text-[#F5F5F5]/70 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`h-1 transition-all duration-500 cursor-pointer ${
                      activeStep === index ? 'w-12 sm:w-16 bg-[#C0C0C0]' : 'w-6 sm:w-8 bg-[#F5F5F5]/20 hover:bg-[#F5F5F5]/40'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
