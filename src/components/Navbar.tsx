"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Portofolio", href: "#portfolio" },
  { label: "Keahlian", href: "#skills" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      
      sections.forEach((section) => {
        const htmlSection = section as HTMLElement;
        const top = htmlSection.offsetTop - 100;
        const bottom = htmlSection.offsetTop + htmlSection.offsetHeight - 100;

        if (window.scrollY >= top && window.scrollY <= bottom) {
          setActiveSection(htmlSection.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-gray-200/50"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-lg" style={{ color: "#003366" }}>
          Portofolio Amir Hamzah
        </div>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-all duration-200 ${
                    isActive ? "font-bold" : "font-normal text-gray-600"
                  }`}
                  style={isActive ? { color: "#003366" } : {}}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
