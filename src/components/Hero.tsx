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
              Professional Portfolio
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight"
            >
              <span style={{
                background: "linear-gradient(135deg, #003366, #0066cc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                Amir
              </span>
              <br />
              Hamzah
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 font-bold text-lg leading-relaxed max-w-lg"
            >
              Front-End Developer & <br/> UI/UX Designer
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
                className="absolute rounded-full animate-pulse blur-3xl" 
                style={{ width: "420px", height: "420px", background: "rgba(0, 51, 102, 0.15)" }}
              ></div>
              <div 
                className="absolute rounded-full animate-pulse blur-2xl" 
                style={{ width: "360px", height: "360px", background: "rgba(0, 51, 102, 0.2)", animationDelay: "0.5s" }}
              ></div>
              
              {/* FOTO PROFIL */}
              <div className="relative z-10">
                <div 
                  className="rounded-full overflow-hidden border-4"
                  style={{ borderColor: "#003366", width: "320px", height: "320px" }}
                >
                  <Image 
                    src="/images/amir.jpeg" 
                    alt="Amir Hamzah" 
                    width={320} 
                    height={320} 
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
