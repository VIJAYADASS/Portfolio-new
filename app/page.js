"use client"

import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Education from "../components/Education"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  const { darkMode } = useTheme()

  const bgMain = darkMode ? "bg-[#8B4513] text-white" : "bg-[#F7E1C7] text-[#3B2A1A]"

  return (
    <main className={`min-h-screen ${bgMain}`}>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </main>
  )
}