"use client"

import { useTheme } from "../context/ThemeContext"
import { Code2, Database, Sparkles } from "lucide-react"

export default function About() {
  const { darkMode } = useTheme()

  const bgMain = darkMode ? "bg-[#8B4513]" : "bg-[#F7E1C7]"
  const bgCard = darkMode ? "bg-[#6E3B1F]" : "bg-[#F3D7B6]"
  const textPrimary = darkMode ? "text-white" : "text-[#3B2A1A]"
  const textSecondary = darkMode ? "text-white" : "text-[#5A3E2B]"
  const borderColor = darkMode ? "border-[#5a2d0c]" : "border-[#e5c9a8]"

  const highlights = [
    { icon: Code2, label: "Frontend", value: "React, Tailwind, JS" },
    { icon: Database, label: "Backend", value: "Node.js, Express" },
    { icon: Sparkles, label: "Focus", value: "UI/UX Design" },
  ]

  return (
    <section id="about" className={`min-h-screen py-20 ${bgMain}`}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${textPrimary}`}>
          About Me
        </h2>
        <div className="w-24 h-1 bg-[#8B4513] mx-auto mb-12 rounded-full"></div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className={`${bgCard} rounded-xl p-8 border ${borderColor} shadow-md`}>
              <h3 className={`text-xl font-semibold mb-4 ${textPrimary}`}>
                Who I Am
              </h3>
              <p className={`${textSecondary} text-lg leading-relaxed`}>
                I am a frontend developer with hands-on experience in building responsive and user-friendly web applications using React and modern technologies. I am currently exploring backend development with Node.js and Express to become a full-stack developer.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`${bgCard} rounded-xl p-5 border ${borderColor} shadow-md flex items-center gap-4`}
              >
                <div className="w-12 h-12 rounded-lg bg-[#8B4513]/30 flex items-center justify-center">
                  <item.icon size={24} className={textPrimary} />
                </div>
                <div>
                  <p className={`text-sm ${textSecondary}`}>{item.label}</p>
                  <p className={`font-semibold ${textPrimary}`}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}