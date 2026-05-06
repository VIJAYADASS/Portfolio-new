"use client"

import { useState } from "react"
import { Send, User, Mail, Phone, MapPin, Loader2, CheckCircle, XCircle } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

export default function Contact() {
  const { darkMode } = useTheme()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState({ type: "", message: "" })
  const [loading, setLoading] = useState(false)

  const bgMain = darkMode ? "bg-[#8B4513]" : "bg-[#F7E1C7]"
  const bgCard = darkMode ? "bg-[#6E3B1F]" : "bg-[#F3D7B6]"
  const textPrimary = darkMode ? "!text-white" : "text-[#3B2A1A]"
  const textSecondary = darkMode ? "!text-white" : "text-[#5A3E2B]"
  const textMuted = darkMode ? "!text-white" : "text-[#6B4F3A]"
  const borderColor = darkMode ? "border-[#5a2d0c]" : "border-[#e5c9a8]"
  const accent = darkMode ? "!text-white" : "text-[#8B4513]"
  const buttonPrimary = darkMode ? "bg-white text-[#8B4513] hover:bg-gray-100" : "bg-[#8B4513] text-white hover:bg-[#6E3810]"
  const inputBg = darkMode ? "bg-[#6E3B1F]" : "bg-white"
  const inputBorder = darkMode ? "border-[#5a2d0c]" : "border-[#e5c9a8]"
  const inputText = darkMode ? "!text-white" : "text-[#3B2A1A]"
  const placeholderColor = darkMode ? "placeholder-gray-400" : "placeholder-[#6B4F3A]"
  const availableBg = darkMode ? "bg-[#6E3B1F]" : "bg-[#F3D7B6]"
  const availableBorder = darkMode ? "border-[#5a2d0c]" : "border-[#e5c9a8]"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: "", message: "" })

    try {
      const res = await fetch("https://portfolio-new-qem7.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" })
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus({ type: "error", message: data.message || "Failed to send message" })
      }
    } catch (error) {
      setStatus({ type: "error", message: "Network error. Please try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className={`min-h-screen py-20 ${bgMain}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${textPrimary} mb-4`}>Contact Me</h2>
          <div className="w-24 h-1 bg-[#8B4513] mx-auto mb-4 rounded-full"></div>
          <p className={textMuted}>Get in touch</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-xl font-semibold mb-6 ${textPrimary}`}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>Name</label>
                <div className="relative">
                  <User className={`absolute left-3 top-3 ${accent}`} size={20} />
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className={`w-full pl-10 pr-4 py-3 ${inputBg} border ${inputBorder} ${inputText} ${placeholderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]`} />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>Email</label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-3 ${accent}`} size={20} />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className={`w-full pl-10 pr-4 py-3 ${inputBg} border ${inputBorder} ${inputText} ${placeholderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]`} />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>Message</label>
                <div className="relative">
                  <Send className={`absolute left-3 top-3 ${accent}`} size={20} />
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Your message" required className={`w-full pl-10 pr-4 py-3 ${inputBg} border ${inputBorder} ${inputText} ${placeholderColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]`}></textarea>
                </div>
              </div>

              {status.message && (
                <div className={`flex items-center gap-2 p-3 rounded-lg ${status.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {status.type === "success" ? <CheckCircle size={20} /> : <XCircle size={20} />}
                  {status.message}
                </div>
              )}

              <button type="submit" disabled={loading} className={`w-full px-6 py-3 ${buttonPrimary} rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50`}>
                {loading ? <><Loader2 size={20} className="animate-spin" /> Sending...</> : <><Send size={20} /> Send Message</>}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <h3 className={`text-xl font-semibold ${textPrimary}`}>Contact Info</h3>
            <div className={`${bgCard} rounded-xl p-6 border ${borderColor} shadow-md`}>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${availableBg} flex items-center justify-center`}>
                    <Mail className={accent} size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${textMuted}`}>Email</p>
                    <p className={textPrimary}>vijaydass0702@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${availableBg} flex items-center justify-center`}>
                    <Phone className={accent} size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${textMuted}`}>Phone</p>
                    <p className={textPrimary}>+91 7339003474</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${availableBg} flex items-center justify-center`}>
                    <MapPin className={accent} size={24} />
                  </div>
                  <div>
                    <p className={`text-sm ${textMuted}`}>Location</p>
                    <p className={textPrimary}>Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${availableBg} rounded-xl p-6 border ${availableBorder} shadow-md`}>
              <h4 className={`text-lg font-semibold ${textPrimary} mb-4`}>Currently Available</h4>
              <p className={textSecondary}>I am open to work opportunities and collaborations. Feel free to reach out!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}