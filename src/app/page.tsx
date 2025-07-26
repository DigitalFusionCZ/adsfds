'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = "Truhlářství Modrý Dub | Nábytek na míru Praha";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#8D8741" /><stop offset="100%" stop-color="#659DBD" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    if (faviconLink) {
      faviconLink.setAttribute('href', faviconUrl);
    }
  }, []);

  return (
    <div className="font-sans text-[#4A4A4A] bg-[#F4F1E8]">
      <header className="fixed w-full bg-[#F4F1E8] bg-opacity-95 shadow-sm z-50 py-4 px-6 md:px-12">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-[#8D8741]">
            Truhlářství Modrý Dub s.r.o.
          </div>
          <div className="hidden md:flex space-x-8 text-[#4A4A4A]">
            <a href="#hero" className="hover:text-[#659DBD] transition-colors">Domů</a>
            <a href="#about" className="hover:text-[#659DBD] transition-colors">O nás</a>
            <a href="#services" className="hover:text-[#659DBD] transition-colors">Služby</a>
            <a href="#contact" className="hover:text-[#659DBD] transition-colors">Kontakt</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-[#8D8741] focus:outline-none">
              <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-[#F4F1E8] py-4 mt-2 rounded-lg shadow-md">
            <nav className="flex flex-col items-center space-y-4 text-[#4A4A4A]">
              <a href="#hero" onClick={toggleMenu} className="block hover:text-[#659DBD] transition-colors py-2">Domů</a>
              <a href="#about" onClick={toggleMenu} className="block hover:text-[#659DBD] transition-colors py-2">O nás</a>
              <a href="#services" onClick={toggleMenu} className="block hover:text-[#659DBD] transition-colors py-2">Služby</a>
              <a href="#contact" onClick={toggleMenu} className="block hover:text-[#659DBD] transition-colors py-2">Kontakt</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="hero" className="relative h-screen flex items-center justify-center text-center p-6 bg-[url('https://images.unsplash.com/photo-1549770802-945763266228?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative max-w-2xl text-white z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-shadow-lg drop-shadow-lg">
              Truhlářství Modrý Dub s.r.o.
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-light text-shadow-md drop-shadow-md">
              Nábytek na míru, který vydrží generace.
            </p>
            <a href="#contact" className="mt-8 inline-block bg-[#8D8741] hover:bg-[#659DBD] text-white font-semibold py-3 px-8 rounded-full transition-colors shadow-lg">
              Kontaktujte nás pro nezávaznou konzultaci
            </a>
          </div>
        </section>

        <section id="about" className="py-16 px-6 md:py-24 bg-[#F4F1E8]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-[#8D8741] mb-12 relative">
              <span className="relative z-10">O nás</span>
              <span className="absolute left-1/2 -ml-8 bottom-0 w-16 h-2 bg-[#659DBD] opacity-50"></span>
            </h2>
            <p className="text-lg leading-relaxed text-center mb-8">
              Jsme rodinné truhlářství z Prahy se zaměřením na poctivou výrobu nábytku na míru. Pracujeme výhradně s kvalitním dřevem od prověřených dodavatelů a každý kus zpracováváme s důrazem na detail, funkčnost a dlouhou životnost. Pomůžeme vám od prvotního návrhu přes 3D vizualizaci až po precizní montáž u vás doma či v kanceláři. Naším cílem je nábytek, který bude sloužit desítky let a který vás bude těšit každý den.
            </p>
            <div className="flex justify-center mt-10">
              <img src="https://images.unsplash.com/photo-1598300263309-17d43232bb4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Truhlářská dílna Modrý Dub" className="w-full max-w-lg rounded-xl shadow-lg border-4 border-[#8D8741]/20" />
            </div>
          </div>
        </section>

        <section id="services" className="py-16 px-6 md:py-24 bg-[#E0DEC0]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-[#8D8741] mb-12 relative">
              <span className="relative z-10">Naše služby</span>
              <span className="absolute left-1/2 -ml-8 bottom-0 w-16 h-2 bg-[#659DBD] opacity-50"></span>
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-[#4A4A4A] list-none p-0">
              <li className="flex items-start bg-white p-6 rounded-xl shadow-md border border-[#8D8741]/10 transform hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 mr-3 mt-1 text-[#659DBD] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 0V3h4v2m-4 0h4m-6 9l2 2 4-4"></path></svg>
                <div>
                  <h3 className="font-semibold text-xl text-[#8D8741] mb-2">Kuchyně na míru</h3>
                  <p>včetně 3D návrhů a instalace spotřebičů</p>
                </div>
              </li>
              <li className="flex items-start bg-white p-6 rounded-xl shadow-md border border-[#8D8741]/10 transform hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 mr-3 mt-1 text-[#659DBD] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                <div>
                  <h3 className="font-semibold text-xl text-[#8D8741] mb-2">Vestavěné skříně</h3>
                  <p>a úložné systémy do atypických prostor</p>
                </div>
              </li>
              <li className="flex items-start bg-white p-6 rounded-xl shadow-md border border-[#8D8741]/10 transform hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 mr-3 mt-1 text-[#659DBD] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2H0V9a6 6 0 0112 0v11zm-5 0V3a3 3 0 00-3-3H6a3 3 0 00-3 3v17"></path></svg>
                <div>
                  <h3 className="font-semibold text-xl text-[#8D8741] mb-2">Masivní nábytek</h3>
                  <p>jídelní stoly, konferenční stolky a knihovny</p>
                </div>
              </li>
              <li className="flex items-start bg-white p-6 rounded-xl shadow-md border border-[#8D8741]/10 transform hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 mr-3 mt-1 text-[#659DBD] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7V4c0-1.105.895-2 2-2h12a2 2 0 012 2v3m-2 4h.01M16 16h.01"></path></svg>
                <div>
                  <h3 className="font-semibold text-xl text-[#8D8741] mb-2">Interiérové prvky</h3>
                  <p>dřevěné obklady, interiérové dveře a schodiště</p>
                </div>
              </li>
              <li className="flex items-start bg-white p-6 rounded-xl shadow-md border border-[#8D8741]/10 transform hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 mr-3 mt-1 text-[#659DBD] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-2.828-2.828L6.707 19.293a1 1 0 001.414 1.414l9.171-9.171z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.428 17.428C16.591 16.264 18 15.253 18 15c0-3.313-1.343-6-3-6S12 5.687 12 9c0 .253 1.409 1.264 2.572 2.428.17.17.33.35.48.54l-3.232 3.232a1 1 0 001.414 1.414L15.428 17.428z"></path></svg>
                <div>
                  <h3 className="font-semibold text-xl text-[#8D8741] mb-2">Renovace a opravy</h3>
                  <p>dřevěného nábytku</p>
                </div>
              </li>
              <li className="flex items-start bg-white p-6 rounded-xl shadow-md border border-[#8D8741]/10 transform hover:scale-105 transition-transform duration-300">
                <svg className="w-6 h-6 mr-3 mt-1 text-[#659DBD] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div>
                  <h3 className="font-semibold text-xl text-[#8D8741] mb-2">Kompletní servis</h3>
                  <p>zaměření na místě, doprava, montáž, záruční i pozáruční servis</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="contact" className="py-16 px-6 md:py-24 bg-[#DCE8D8]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-[#8D8741] mb-12 relative">
              <span className="relative z-10">Kontakt</span>
              <span className="absolute left-1/2 -ml-8 bottom-0 w-16 h-2 bg-[#659DBD] opacity-50"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-md border border-[#8D8741]/10">
                <h3 className="text-2xl font-semibold text-[#8D8741] mb-6">Napište nám</h3>
                <p className="text-lg mb-2 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#659DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8m0-3V6a2 2 0 012-2h10a2 2 0 012 2v1"></path></svg>
                  E‑mail: info@modrydub.cz
                </p>
                <p className="text-lg mb-2 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#659DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Telefon: +420 777 000 123
                </p>
                <p className="text-lg mb-2 flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#659DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  Adresa: Fiktivní 12, 110 00 Praha
                </p>
                <p className="text-lg flex items-center">
                  <svg className="w-6 h-6 mr-3 text-[#659DBD]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h.01M9 16h.01M13 16h.01M17 16h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                  Otevírací doba: Po–Pá 9:00–17:00
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-[#8D8741]/10">
                <h3 className="text-2xl font-semibold text-[#8D8741] mb-6">Kde nás najdete</h3>
                <div className="aspect-video w-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.816040854291!2d14.42065831572978!3d50.081827679424074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b938c538a0f9f%3A0x7d28e7e1b2f7a0b!2sPraha!5e0!3m2!1sen!2scz!4v1678901234567!5m2!1sen!2scz"
                    width="100%"
                    height="100%"
                    style={{border:0}}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of Prague"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-[#8D8741] text-white text-center text-sm">
        <div className="container mx-auto">
          <p className="mb-2">&copy; {new Date().getFullYear()} Truhlářství Modrý Dub s.r.o. Všechna práva vyhrazena.</p>
          <p>Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#F4F1E8]">DigitalFusion</a></p>
        </div>
      </footer>
    </div>
  );
}
