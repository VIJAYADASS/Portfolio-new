"use client"

import { useTheme } from "../context/ThemeContext"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/VIJAYADASS" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/vijayadass-m-635055179/" },
  { name: "Email", icon: Mail, href: "mailto:vijaydass0702@gmail.com" },
]

export default function Footer() {
  const { darkMode } = useTheme()

  const bgMain = darkMode ? "bg-[#8B4513]" : "bg-[#F7E1C7]"
  const bgCard = darkMode ? "bg-[#6E3B1F]" : "bg-[#F3D7B6]"
  const textPrimary = darkMode ? "!text-white" : "text-[#3B2A1A]"
  const textSecondary = darkMode ? "!text-white" : "text-[#5A3E2B]"
  const borderColor = darkMode ? "border-[#5a2d0c]" : "border-[#e5c9a8]"

  return (
    <footer className={`py-8 ${bgMain} border-t ${borderColor}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={textSecondary}>
            © 2026 <span className={textPrimary}>Vijayadass M</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 ${bgCard} rounded-full flex items-center justify-center hover:shadow-md transition-shadow ${textSecondary}`}
                aria-label={social.name}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}