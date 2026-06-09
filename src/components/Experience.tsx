"use client";

import { experienceData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* JUDUL SECTION */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pengalaman Kerja
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Rekam jejak profesional dan pengalaman kerja yang telah saya jalani.
            </p>
            <div 
              className="w-16 h-1 mx-auto mt-4 rounded-full"
              style={{ background: "linear-gradient(135deg, #003366, #0066cc)" }}
            ></div>
          </div>
        </ScrollReveal>

        {/* LAYOUT VERTICAL TIMELINE */}
        <div className="relative">
          
          {/* GARIS VERTIKAL */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-0.5"
            style={{ background: "linear-gradient(to bottom, #003366, #0066cc)" }}
          ></div>

          {/* LIST ITEM TIMELINE */}
          <div className="flex flex-col gap-8">
            {experienceData.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 0.2} direction="left">
                <div className="relative flex items-start gap-6 pl-20">
                
                {/* NODE */}
                <div 
                  className="absolute left-4 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center z-10 shadow-md flex-shrink-0"
                  style={{ background: "#003366" }}
                >
                  <Briefcase size={14} color="white" />
                </div>

                {/* KARTU KONTEN */}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex-1">
                  
                  {/* HEADER KARTU */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {item.company}
                      </h3>
                      <p className="font-semibold" style={{ color: "#003366" }}>
                        {item.position}
                      </p>
                    </div>
                    {/* BADGE PERIODE */}
                    <span 
                      className="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                      style={{ background: "#e6f3ff", color: "#003366" }}
                    >
                      {item.period}
                    </span>
                  </div>
                  
                  {/* DIVIDER */}
                  <hr className="border-gray-100 mb-3" />
                  
                  {/* DESKRIPSI */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  
                </div>

              </div>
              </ScrollReveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
