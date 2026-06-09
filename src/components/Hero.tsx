"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* KOLOM KIRI (Teks) */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-500 text-lg font-medium"
            >
              Halo! Selamat Datang
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              <span style={{
                background: "linear-gradient(135deg, #003366, #0066cc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                Portfolio
              </span>
              <br />
              Amir Hamzah
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 text-lg leading-relaxed max-w-lg"
            >
              Mahasiswa aktif Politeknik Negeri Jakarta dengan minat besar pada UI/UX Design. Saya senang menciptakan antarmuka yang menarik, fungsional, dan humanis.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a 
                href="#portfolio" 
                className="px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #003366, #0066cc)" }}
              >
                Lihat Portofolio Saya
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:bg-blue-50"
                style={{ color: "#003366", borderColor: "#003366" }}
              >
                Hubungi Saya
              </a>
            </motion.div>
          </div>

          {/* KOLOM KANAN (Foto Profil) */}
          <div className="flex items-center justify-center order-1 md:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              className="relative flex items-center justify-center"
            >
              {/* EFEK GLOW/PULSE */}
              <div 
                className="absolute rounded-full animate-pulse" 
                style={{ width: "320px", height: "320px", background: "rgba(0, 51, 102, 0.08)" }}
              ></div>
              <div 
                className="absolute rounded-full animate-pulse" 
                style={{ width: "280px", height: "280px", background: "rgba(0, 51, 102, 0.12)", animationDelay: "0.5s" }}
              ></div>
              
              {/* FOTO PROFIL */}
              <div className="relative z-10">
                <div 
                  className="rounded-full overflow-hidden border-4"
                  style={{ borderColor: "#003366", width: "240px", height: "240px" }}
                >
                  <Image 
                    src="/images/profile.jpg" 
                    alt="Amir Hamzah" 
                    width={240} 
                    height={240} 
                    className="object-cover w-full h-full"
                    priority={true} 
                  />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
