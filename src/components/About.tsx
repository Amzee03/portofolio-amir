"use client";

import { GraduationCap, Sparkles, Palette, Code, Pen, FileText } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* JUDUL SECTION */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang Saya
            </h2>
            <p className="text-gray-600 text-md max-w-xl mx-auto text-justify">
              Front-End Engineer yang berfokus pada pengembangan antarmuka web yang scalable dan integrasi user experience yang dinamis. Bersemangat dalam merancang arsitektur client-side yang efisien untuk menjembatani desain visual secara mulus ke dalam aplikasi dunia nyata menggunakan teknologi modern seperti React dan Next.js.
            </p>
            <div 
              className="w-16 h-1 mx-auto mt-4 rounded-full"
              style={{ background: "linear-gradient(135deg, #003366, #0066cc)" }}
            ></div>
          </div>
        </ScrollReveal>

        {/* GRID DUA CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* CARD 1 — PENDIDIKAN */}
          <ScrollReveal delay={0.1} direction="left">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <GraduationCap size={28} style={{ color: "#003366" }} />
                <h3 className="text-xl font-bold text-gray-900">Pendidikan</h3>
              </div>
              
              <div className="flex flex-col gap-6">
                {/* Item 1 (SMAIT) */}
                <div className="border-l-4 pl-4" style={{ borderColor: "#003366" }}>
                  <p className="font-semibold text-gray-900">SMAIT Al-Qudwah Depok</p>
                  <p className="text-sm text-gray-500 mt-1">Jurusan IPA</p>
                  <span 
                    className="text-xs font-medium px-2 py-1 rounded-full mt-2 inline-block"
                    style={{ background: "#e6f3ff", color: "#003366" }}
                  >
                    2020 – 2023
                  </span>
                </div>
                
                {/* Item 2 (Politeknik) */}
                <div className="border-l-4 pl-4" style={{ borderColor: "#003366" }}>
                  <p className="font-semibold text-gray-900">Politeknik Negeri Jakarta</p>
                  <p className="text-sm text-gray-500 mt-1">D4 Teknik Informatika dan Komputer</p>
                  <span 
                    className="text-xs font-medium px-2 py-1 rounded-full mt-2 inline-block"
                    style={{ background: "#e6f3ff", color: "#003366" }}
                  >
                    2023 – Sekarang
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CARD 2 — KEAHLIAN UTAMA */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <Sparkles size={28} style={{ color: "#003366" }} />
                <h3 className="text-xl font-bold text-gray-900">Keahlian Utama</h3>
              </div>
              
              <div className="flex flex-col gap-5">
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#e6f3ff" }}>
                    <Palette size={20} style={{ color: "#003366" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">UI/UX Designer</p>
                    <p className="text-sm text-gray-500 mt-1">Merancang antarmuka yang intuitif dan berpusat pada pengguna.</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#e6f3ff" }}>
                    <Code size={20} style={{ color: "#003366" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Front-end Developer</p>
                    <p className="text-sm text-gray-500 mt-1">Membangun tampilan web yang responsif dan modern.</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#e6f3ff" }}>
                    <Pen size={20} style={{ color: "#003366" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Logo Designer</p>
                    <p className="text-sm text-gray-500 mt-1">Menciptakan identitas visual yang kuat dan berkesan.</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* TOMBOL BUKA CV */}
        <ScrollReveal delay={0.3}>
          <div className="flex justify-center">
            <a 
              href="/CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:bg-blue-50"
              style={{ color: "#003366", borderColor: "#003366" }}
            >
              <FileText size={20} />
              Buka CV (PDF)
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
