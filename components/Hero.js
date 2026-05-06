"use client"

import { useState, useEffect } from "react"
import { Download, Mail } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const roleText = "Frontend Developer"

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const { darkMode } = useTheme()

  const bgMain = darkMode ? "bg-[#8B4513]" : "bg-[#F7E1C7]"

  useEffect(() => {
    let index = 0
    let deleting = false

    const type = () => {
      if (!deleting) {
        if (index <= roleText.length) {
          setDisplayedText(roleText.slice(0, index))
          index++
        } else {
          deleting = true
          setTimeout(type, 2000)
          return
        }
      } else {
        if (index > 0) {
          setDisplayedText(roleText.slice(0, index - 1))
          index--
        } else {
          deleting = false
        }
      }
      setTimeout(type, deleting ? 50 : 100)
    }

    const timeout = setTimeout(type, 100)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section id="home" className={`min-h-screen flex items-center ${bgMain}`}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
        <div className="space-y-5 order-2 lg:order-1">
          <p className="text-[#8B4513] dark:!text-white text-lg font-medium">
            Hello, I&apos;m
          </p>
          
          <h1 className="text-5xl md:text-6xl font-bold text-[#3B2A1A] dark:!text-white">
            Vijayadass M
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-[#5A3E2B] dark:!text-gray-200">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-[#6B4F3A] dark:!text-gray-200 text-lg">
            A passionate frontend developer with experience building modern,
            responsive, and user-friendly web applications using React.
          </p>

          <div className="flex gap-4 pt-2">
            <a
              href="/VijayadassResume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-lg bg-[#3B2A1A] text-white dark:bg-white dark:text-[#8B4513] hover:opacity-90 transition font-medium"
            >
              <Download size={20} className="inline mr-2" />
              View Resume
            </a>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 rounded-lg border border-[#3B2A1A] text-[#3B2A1A] dark:border-white dark:text-white hover:opacity-90 transition duration-300 font-medium"
            >
              <Mail size={20} className="inline mr-2" />
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center order-1 lg:order-2 mt-6 md:mt-0">
          <div className="p-3 rounded-2xl bg-[#F3D7B6] dark:bg-black/20">
            <img
              src="/p1.png"
              alt="profile"
              className="w-[300px] md:w-[380px] rounded-3xl object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  )
}