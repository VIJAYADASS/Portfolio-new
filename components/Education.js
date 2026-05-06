"use client"

import { useTheme } from "../context/ThemeContext"

const educationData = [
  { degree: "Master's in ECS", year: "2022", percentage: "85%" },
  { degree: "Bachelor of Electronics", year: "2020", percentage: "72%" },
  { degree: "Higher Secondary", year: "2017", percentage: "70%" },
  { degree: "SSLC", year: "2015", percentage: "60%" },
]

export default function Education() {
  const { darkMode } = useTheme()

  const bgMain = darkMode ? "bg-[#8B4513]" : "bg-[#F7E1C7]"
  const bgCard = darkMode ? "bg-[#6E3B1F]" : "bg-[#F3D7B6]"
  const textPrimary = darkMode ? "!text-white" : "text-[#3B2A1A]"
  const textSecondary = darkMode ? "!text-white" : "text-[#5A3E2B]"
  const borderColor = darkMode ? "border-[#5a2d0c]" : "border-[#e5c9a8]"
  const badgeBg = "bg-[#8B4513]"

  return (
    <section id="education" className={`min-h-screen py-20 ${bgMain}`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-4 ${textPrimary}`}>
          Education
        </h2>
        <div className="w-24 h-1 bg-[#8B4513] mx-auto mb-12 rounded-full"></div>

        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <div key={index} className={`${bgCard} rounded-xl p-6 border ${borderColor} shadow-md flex items-center justify-between`}>
              <h3 className={`text-lg font-semibold ${textPrimary}`}>{edu.degree}</h3>
              <div className="flex items-center gap-6">
                <span className={textSecondary}>{edu.year}</span>
                <span className={`text-sm font-semibold text-white ${badgeBg} px-3 py-1 rounded-full`}>
                  {edu.percentage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}