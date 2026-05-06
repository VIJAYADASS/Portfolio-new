"use client"

import { useTheme } from "../context/ThemeContext"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Photo Gallery",
    description: "A paginated photo gallery with API integration and smooth navigation.",
    techStack: ["React", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    liveUrl: "https://photogallery-jsonfakery-api.netlify.app/",
    githubUrl: "https://github.com/VIJAYADASS/PhotoGallery",
  },
  {
    id: 2,
    title: "Hotel Booking App",
    description: "A full-stack hotel booking application where users can browse hotels, view details, and make reservations.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    liveUrl: "https://hotel-seavora.netlify.app/",
    githubUrl: "https://github.com/VIJAYADASS/Hotel-Seavora",
  },
  {
    id: 3,
    title: "BMI Calculator",
    description: "A responsive web application that calculates BMI and provides accurate health status feedback.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    liveUrl: "https://age-weight-cal.netlify.app/",
    githubUrl: "https://github.com/VIJAYADASS/BMI-Calculator",
  },
  {
    id: 4,
    title: "Calculator",
    description: "A modern calculator application built with React featuring a clean UI and precise operations.",
    techStack: ["React", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&q=80",
    liveUrl: "https://calculator-vite-react-app.netlify.app/",
    githubUrl: "https://github.com/VIJAYADASS/Calculator",
  },
  {
    id: 5,
    title: "FreshMart",
    description: "A supermarket e-commerce UI with product browsing and cart functionality.",
    techStack: ["React", "Tailwind CSS", "Context API"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
    liveUrl: "https://supermarket-product-ui.netlify.app/",
    githubUrl: "https://github.com/VIJAYADASS/Supermarket",
  },
]

function ProjectCard({ project, darkMode }) {
  const bgCard = darkMode ? "bg-[#6E3B1F]" : "bg-[#F3D7B6]"
  const textPrimary = darkMode ? "!text-white" : "text-[#3B2A1A]"
  const textSecondary = darkMode ? "!text-white" : "text-[#5A3E2B]"
  const textMuted = darkMode ? "!text-white" : "text-[#6B4F3A]"
  const borderColor = darkMode ? "border-[#5a2d0c]" : "border-[#e5c9a8]"
  const buttonPrimary = "bg-[#8B4513] text-white hover:bg-[#6E3810]"
  const buttonSecondary = darkMode 
    ? "border-2 border-white !text-white hover:bg-white hover:text-[#8B4513]" 
    : "border-2 border-[#8B4513] !text-[#8B4513] hover:bg-[#8B4513] hover:text-white"
  const tagBg = darkMode ? "bg-[#6E3B1F]" : "bg-[#F3D7B6]"

  return (
    <div className={`${bgCard} rounded-xl border ${borderColor} shadow-md overflow-hidden flex flex-col`}>
      <div className="h-48 w-full overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-t-xl" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className={`text-lg font-semibold ${textPrimary} mb-2`}>{project.title}</h3>
        <p className={`${textMuted} text-sm mb-3 flex-1`}>{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span key={tech} className={`px-2 py-1 ${tagBg} rounded-full text-xs ${textSecondary}`}>
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a href={project.liveUrl} target="_blank" className={`flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 ${buttonPrimary} rounded-lg font-medium text-sm`}>
            <ExternalLink size={14} /> Live
          </a>
          <a href={project.githubUrl} target="_blank" className={`flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 ${buttonSecondary} rounded-lg font-medium text-sm`}>
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const { darkMode } = useTheme()
  const bgMain = darkMode ? "bg-[#8B4513]" : "bg-[#F7E1C7]"
  const textPrimary = darkMode ? "!text-white" : "text-[#3B2A1A]"

  return (
    <section id="projects" className={`min-h-screen py-20 ${bgMain}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary} mb-4`}>My Projects</h2>
          <div className="w-24 h-1 bg-[#8B4513] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  )
}