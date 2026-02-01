
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  const ExternalLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );

  return (
    <footer className="relative bg-[#050D1A] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#C0C0C0] rounded-full blur-[100px] sm:blur-[150px]"></div>
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#C0C0C0] rounded-full blur-[100px] sm:blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-20 lg:py-32 border-b border-[#F5F5F5]/10">
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-[#F5F5F5] leading-tight mb-4 sm:mb-6 lg:mb-8"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Trasforma la comunicazione<br />
                <span className="text-[#C0C0C0]">in asset di governance.</span>
              </h2>

              <p className="text-base sm:text-lg lg:text-xl text-[#F5F5F5] opacity-60 max-w-xl">
                Inizia una conversazione riservata con i nostri strategist per esplorare come CIVIKA può elevare la tua comunicazione istituzionale.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-5 mt-6 lg:mt-0">
              <div
                className="relative group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r from-[#C0C0C0] opacity-50 to-[#C0C0C0] opacity-20 blur transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                ></div>

                <button className="relative w-full px-6 sm:px-8 lg:px-12 py-5 sm:py-6 lg:py-8 bg-[#F5F5F5] text-[#0A192F] text-base sm:text-lg lg:text-xl font-medium hover:bg-[#C0C0C0] transition-all duration-500 whitespace-nowrap cursor-pointer flex items-center justify-center gap-3 sm:gap-4">
                  <span className="text-sm sm:text-base lg:text-lg">Richiedi Consultazione</span>
                  <i className="ri-arrow-right-line text-xl sm:text-2xl group-hover:translate-x-2 transition-transform duration-300"></i>
                </button>
              </div>

              <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4 text-[#F5F5F5] opacity-40 text-xs sm:text-sm">
                <i className="ri-shield-check-line"></i>
                <span>Conversazione confidenziale garantita</span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 sm:py-16 lg:py-20 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <div className="mb-4 sm:mb-6">
              <img
                src="https://static.readdy.ai/image/640adb5b39f93fd5431710ed5e9933bf/6287314b30e94f8c6f70f25b309fada4.png"
                alt="CIVIKA Logo"
                className="h-10 sm:h-12 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>

            <p className="text-[#F5F5F5] opacity-50 leading-relaxed mb-6 sm:mb-8 max-w-sm text-sm sm:text-base">
              L'infrastruttura strategica per la reputazione istituzionale. Governance, controllo assoluto, eccellenza.
            </p>

            <div className="flex gap-3 sm:gap-4">
              {['ri-linkedin-fill', 'ri-twitter-x-fill'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-[#F5F5F5]/10 hover:bg-[#C0C0C0]/20 transition-colors duration-300 cursor-pointer"
                >
                  <i className={`${icon} text-[#F5F5F5] opacity-70`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-[#F5F5F5] font-medium mb-4 sm:mb-6 text-xs sm:text-sm tracking-widest uppercase">Azienda</h3>
            <ul className="space-y-2 sm:space-y-4">
              {['Manifesto', 'Metodo', 'Casi Studio', 'Team'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#F5F5F5] opacity-50 hover:text-[#F5F5F5] transition-colors duration-300 cursor-pointer flex items-center gap-2 group text-sm sm:text-base">
                    <span className="w-0 group-hover:w-3 sm:group-hover:w-4 h-px bg-[#C0C0C0] transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-[#F5F5F5] font-medium mb-4 sm:mb-6 text-xs sm:text-sm tracking-widest uppercase">Servizi</h3>
            <ul className="space-y-2 sm:space-y-4">
              {['Event Management', 'Reputazione e Crisi', 'Comunicazione PA', 'Public Affairs', 'Corporate Governance'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#F5F5F5] opacity-50 hover:text-[#F5F5F5] transition-colors duration-300 cursor-pointer flex items-center gap-2 group text-sm sm:text-base">
                    <span className="w-0 group-hover:w-3 sm:group-hover:w-4 h-px bg-[#C0C0C0] transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-[#F5F5F5] font-medium mb-4 sm:mb-6 text-xs sm:text-sm tracking-widest uppercase">Governance</h3>
            <ul className="space-y-2 sm:space-y-4">
              {['Privacy Policy', 'Compliance', 'Termini di Servizio', 'Contatti'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[#F5F5F5] opacity-50 hover:text-[#F5F5F5] transition-colors duration-300 cursor-pointer flex items-center gap-2 group text-sm sm:text-base">
                    <span className="w-0 group-hover:w-3 sm:group-hover:w-4 h-px bg-[#C0C0C0] transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-6 sm:py-8 border-t border-[#F5F5F5]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-[#F5F5F5] opacity-30 text-xs sm:text-sm">© 2026 CIVIKA. Tutti i diritti riservati.</div>

          <div className="flex items-center gap-6 sm:gap-8">
            <ExternalLink
              href="https://readdy.ai/?ref=logo"
              className="text-[#F5F5F5] opacity-30 hover:opacity-50 text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-2"
            >
              <span>Made with</span>
              <span className="font-medium">Readdy</span>
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
