"use client"

import { useTheme } from "../context/ThemeContext"
import { 
  Code2, 
  Database, 
  Wrench, 
  FileJson, 
  Layout, 
  Terminal, 
  GitBranch, 
  Globe, 
  Layers,
  Palette
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React", icon: FileJson },
      { name: "JavaScript", icon: FileJson },
      { name: "HTML", icon: Layout },
      { name: "CSS", icon: Palette },
      { name: "Tailwind", icon: Layers },
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", icon: Terminal },
      { name: "Express", icon: Database },
      { name: "MongoDB", icon: Database },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Globe },
      { name: "Netlify", icon: Globe },
    ],
  },
]

export default function Skills() {
  const { darkMode } = useTheme()

  const bgMain = darkMode ? "bg-[#8B4513]" : "bg-[#F7E1C7]"
  const bgCard = darkMode ? "bg-[#6E3B1F]" : "bg-[#F3D7B6]"
  const textPrimary = darkMode ? "!text-white" : "text-[#3B2A1A]"
  const textMuted = darkMode ? "!text-white" : "text-[#6B4F3A]"
  const borderColor = darkMode ? "border-[#5a2d0c]" : "border-[#e5c9a8]"
  const accent = darkMode ? "!text-white" : "text-[#8B4513]"
  const skillBg = darkMode ? "bg-[#6E3B1F]" : "bg-[#F3D7B6]"

  return (
    <section id="skills" className={`min-h-screen py-20 ${bgMain}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary} mb-4`}>
            Skills
          </h2>
          <div className="w-24 h-1 bg-[#8B4513] mx-auto mb-4 rounded-full"></div>
          <p className={textMuted}>Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`${bgCard} rounded-xl p-8 border ${borderColor} shadow-md`}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={accent} size={28} />
                <h3 className={`text-2xl font-semibold ${textPrimary}`}>{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg ${skillBg} ${textPrimary} border ${borderColor}`}
                  >
                    <skill.icon className={`w-5 h-5 ${accent}`} size={20} />
                    <span className="text-base font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}