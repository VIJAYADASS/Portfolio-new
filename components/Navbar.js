"use client"

import { useState } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { darkMode, toggleTheme, mounted } = useTheme()

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#8B4513] border-b border-[#5a2d0c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold text-white">Vijayadass M</span>
          </div>
        </div>
      </nav>
    )
  }

  const bgMain = darkMode ? "bg-[#8B4513]/95" : "bg-[#F7E1C7]"
  const borderColor = darkMode ? "border-[#5a2d0c]" : "border-[#e5c9a8]"
  const textPrimary = "text-[#3B2A1A] dark:text-white"

  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${bgMain} shadow-sm border-b ${borderColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className={`text-xl font-bold ${textPrimary}`}>Vijayadass M</span>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className={`${textPrimary} hover:text-[#D6A77A] dark:hover:text-[#FFD8A8] transition`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${textPrimary} hover:bg-[#e5c9a8] dark:hover:bg-white/20 transition`}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            className={`md:hidden ${textPrimary}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden ${bgMain} border-t ${borderColor}`}>
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className={`block w-full text-left py-2 ${textPrimary}`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-2 w-full py-2 ${textPrimary}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}