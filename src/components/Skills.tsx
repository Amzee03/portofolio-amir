"use client";

import ScrollReveal from "@/components/ScrollReveal";

const hardSkills = [
  "HTML & CSS",
  "Tailwind CSS",
  "JavaScript",
  "Figma",
  "Adobe Illustrator",
  "Flutter"
];

const softSkills = [
  "Komunikasi",
  "Kolaborasi Tim",
  "Manajemen Waktu",
  "Problem Solving"
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
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                ⚙️ Hard Skills
              </h3>
              <div>
                {hardSkills.map((skill, index) => (
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

          {/* CARD SOFT SKILLS */}
          <ScrollReveal delay={0.2} direction="right">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                🤝 Soft Skills
              </h3>
              <div>
                {softSkills.map((skill, index) => (
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
