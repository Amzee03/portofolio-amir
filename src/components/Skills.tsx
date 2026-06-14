"use client";

import ScrollReveal from "@/components/ScrollReveal";

import { Code2, Wind, Braces, Palette, PenTool, Layers, Wrench, Users, Atom, Triangle, Sparkles, Database } from "lucide-react";

const hardSkillsData = [
  { name: "React.js", icon: Atom, color: "#61DAFB" },
  { name: "Next.js", icon: Triangle, color: "#000000" },
  { name: "Framer Motion", icon: Sparkles, color: "#BB44F2" },
  { name: "Zustand", icon: Database, color: "#443E38" },
  { name: "HTML & CSS", icon: Code2, color: "#e44d26" },
  { name: "Tailwind CSS", icon: Wind, color: "#06b6d4" },
  { name: "JavaScript", icon: Braces, color: "#d4a500" },
  { name: "Figma", icon: Palette, color: "#a259ff" },
  { name: "Adobe Illustrator", icon: PenTool, color: "#ff7c00" },
  { name: "Flutter", icon: Layers, color: "#0175c2" },
];

const softSkillsData = [
  "Komunikasi",
  "Kolaborasi Tim",
  "Manajemen Waktu",
  "Problem Solving",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* JUDUL SECTION */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keahlian
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Teknologi dan kemampuan yang saya kuasai dalam proses desain dan pengembangan.
            </p>
            <div 
              className="w-16 h-1 mx-auto mt-4 rounded-full"
              style={{ background: "linear-gradient(135deg, #003366, #0066cc)" }}
            ></div>
          </div>
        </ScrollReveal>

        {/* GRID DUA CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CARD HARD SKILLS */}
          <ScrollReveal delay={0.1} direction="left">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100 flex items-center gap-2">
                <Wrench size={20} style={{ color: "#003366" }} />
                Hard Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                {hardSkillsData.map((item) => (
                  <div key={item.name} className="flex items-center gap-3 py-3 border-b border-gray-50">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#f8fafc" }}>
                      <item.icon size={16} style={{ color: item.color }} />
                    </div>
                    <span className="text-gray-700 font-medium truncate">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* CARD SOFT SKILLS */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100 flex items-center gap-2">
                <Users size={20} style={{ color: "#003366" }} />
                Soft Skills
              </h3>
              <div>
                {softSkillsData.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "#003366" }}
                    ></div>
                    <span className="text-gray-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
