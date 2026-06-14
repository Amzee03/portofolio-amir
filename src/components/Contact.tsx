"use client";

import { Mail, Phone, Globe, FileText } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const contactData = [
  {
    id: 1,
    label: "Email",
    value: "2003amirhamzah@gmail.com",
    href: "mailto:2003amirhamzah@gmail.com",
    icon: "Mail",
    description: "Kirim pesan langsung ke email saya",
  },
  {
    id: 2,
    label: "WhatsApp",
    value: "+62 858-9474-4507",
    href: "https://wa.me/6285894744507",
    icon: "Phone",
    description: "Chat langsung via WhatsApp",
  },
  {
    id: 3,
    label: "LinkedIn",
    value: "hamzah-amir",
    href: "https://linkedin.com/in/hamzah-amir",
    icon: "Globe",
    description: "Lihat profil profesional saya",
  },
];

const iconMap = { Mail, Phone, Globe };

export default function Contact() {
  return (
    <>
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* JUDUL SECTION */}
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Hubungi Saya
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Tertarik bekerja sama? Jangan ragu untuk menghubungi saya melalui salah satu platform berikut.
              </p>
              <div 
                className="w-16 h-1 mx-auto mt-4 rounded-full"
                style={{ background: "linear-gradient(135deg, #003366, #0066cc)" }}
              ></div>
            </div>
          </ScrollReveal>

          {/* GRID TIGA CARD KONTAK */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactData.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap];
              return (
                <ScrollReveal key={item.id} delay={index * 0.15}>
                  <a 
                    href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center gap-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ background: "#e6f3ff" }}
                  >
                    <IconComponent size={28} style={{ color: "#003366" }} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {item.label}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {item.description}
                  </p>
                  <p className="font-medium text-sm" style={{ color: "#003366" }}>
                    {item.value}
                  </p>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>

          {/* TOMBOL "TAMPILKAN CV LENGKAP" */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center">
              <a 
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #003366, #0066cc)" }}
              >
                <FileText size={20} />
                Tampilkan CV Lengkap
              </a>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-200 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-center gap-2">
          <p className="text-gray-500 text-sm text-center">
            © 2025 Portofolio Amir Hamzah. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
