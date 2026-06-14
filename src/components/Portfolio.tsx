"use client";

import { portfolioData } from "@/data/portfolio";
import { ExternalLink, Monitor } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* JUDUL SECTION */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portofolio
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Kumpulan proyek yang pernah saya kerjakan dalam bidang desain dan pengembangan.
            </p>
            <div 
              className="w-16 h-1 mx-auto mt-4 rounded-full"
              style={{ background: "linear-gradient(135deg, #003366, #0066cc)" }}
            ></div>
          </div>
        </ScrollReveal>

        {/* GRID CARD PORTOFOLIO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.15} className="h-full">
              <div 
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
              
              {/* AREA THUMBNAIL */}
              <div 
                className="relative overflow-hidden h-48 bg-gray-100 group"
                style={{ background: "linear-gradient(135deg, #e6f3ff, #cce0ff)" }}
              >
                {item.image ? (
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <Monitor size={40} style={{ color: "#003366", opacity: 0.4 }} />
                  </div>
                )}
                <div 
                  className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full"
                  style={{ background: "#003366", color: "white" }}
                >
                  {item.role.length > 20 ? `${item.role.substring(0, 20)}...` : item.role}
                </div>
              </div>

              {/* KONTEN CARD */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                
                {/* PERAN */}
                <div className="mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Peran
                  </span>
                  <p className="text-sm text-gray-700 mt-1">
                    {item.role}
                  </p>
                </div>
                
                {/* TOOLS */}
                <div className="mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Tools
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.tools.map((tool, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full font-medium"
                        style={{ background: "#e6f3ff", color: "#003366" }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* PROSES */}
                <div className="mb-4">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Proses
                  </span>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {item.process}
                  </p>
                </div>
                
                {/* TOMBOL "LIHAT PROJECT" */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <a 
                    href={item.link}
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #003366, #0066cc)" }}
                  >
                    Lihat Project
                    <ExternalLink size={14} />
                  </a>
                </div>
                
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
