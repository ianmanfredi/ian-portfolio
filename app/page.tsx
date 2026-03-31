"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail, ArrowUpRight, Menu, X } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    setIsVisible(true)

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observerRef.current?.observe(el))

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => sectionObserver.observe(section))

    return () => {
      observerRef.current?.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  const skills = {
    coreLanguages: ["JavaScript ES6+", "Python", "HTML5", "CSS3"],
    frameworksLibraries: ["React", "Node.js", "Express", "Django", "Flask", "React Native"],
    dataManagement: ["MySQL", "MongoDB", "Neo4j"],
    toolsPlatforms: ["Git", "GitHub", "GitLab", "AWS", "GCP"],
  }

  const certifications = [
    { name: "Data Science", image: "/certificaciones/ciencia-datos.jpg" },
    { name: "Python Analysis", image: "/certificaciones/analisis-datos.jpg" },
    { name: "Problem Solving", image: "/certificaciones/resolucion-problemas.jpg" },
  ]

  const projects = [
    {
      id: 1,
      title: "WikiDev",
      description: "A developer-focused wiki platform built using core web technologies.",
      link: "https://wikidev-theta.vercel.app/index.html",
    },
    {
      id: 2,
      title: "Cinema Comparisons",
      description: "An application to search, compare, and rate movies from multiple sources.",
      link: "https://imdbcomparisons.vercel.app/",
    },
  ]

  const navLinks = [
    { href: "#about", label: "About Me" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#projects", label: "Projects" },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 selection:bg-[#10b981]/30">
      {/* INYECCIÓN DE ESTILOS DE v0 */}
      <style jsx global>{`
        html { scroll-behavior: smooth; }
        .glass { background: rgba(10, 10, 10, 0.7); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.05); }
        .text-gradient { background: linear-gradient(to bottom right, #fff 30%, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .btn-primary { background: #10b981; color: #000; font-weight: 600; transition: 0.3s; }
        .btn-primary:hover { background: #34d399; box-shadow: 0 0 25px rgba(16, 185, 129, 0.4); transform: translateY(-2px); }
        .btn-ghost { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); transition: 0.3s; }
        .btn-ghost:hover { background: rgba(255,255,255,0.08); border-color: #10b981; }
        .bento-item { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 24px; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .bento-item:hover { background: rgba(255,255,255,0.04); border-color: rgba(16, 185, 129, 0.4); transform: scale(1.01); }
        .skill-tag { background: rgba(16, 185, 129, 0.1); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.2); padding: 5px 14px; border-radius: 99px; font-size: 0.8rem; font-weight: 500; }
        .section-divider { height: 1px; background: linear-gradient(to right, transparent, rgba(16, 185, 129, 0.2), transparent); margin: 4rem auto; width: 80%; }
        .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1); }
        .visible { opacity: 1 !important; transform: translateY(0) !important; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in-up { animation: fadeInUp 1s ease-out forwards; }
        .nav-link { color: #a1a1aa; transition: 0.3s; }
        .nav-link:hover { color: #fff; }
        .cert-card { border-radius: 16px; overflow: hidden; background: #161616; border: 1px solid rgba(255,255,255,0.05); }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-xl font-bold tracking-tighter">
            IM<span className="text-[#10b981]">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link text-sm font-medium">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn-primary px-5 py-2.5 rounded-full text-sm inline-flex items-center gap-2">
                Contact <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
          </ul>

          <button className="md:hidden p-2 text-zinc-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Fondo decorativo de v0 */}
        <div className="absolute inset-0 -z-10 bg-[#0a0a0a] [background:radial-gradient(125%_125%_at_50%_10%,#0a0a0a_40%,#10b9811a_100%)]"></div>
        
        <div className={`text-center max-w-4xl mx-auto ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-[#10b981]/10 text-[#10b981] border border-[#10b981]/20 uppercase tracking-widest">
              Full Stack Developer
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-gradient">
            Ian Manfredi
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/ianmanfredi" target="_blank" className="btn-ghost px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2">
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a href="https://linkedin.com/in/ianmanfredi" target="_blank" className="btn-ghost px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* About & Skills */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">About & Skills</h2>
          <p className="text-[#10b981] font-mono text-sm uppercase tracking-widest">Technical Stack</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bento-item p-8 md:col-span-2 animate-on-scroll">
            <span className="text-[#10b981] text-xs font-bold uppercase tracking-widest block mb-4">Biography</span>
            <p className="text-lg text-zinc-400 leading-relaxed">
              I am a Full Stack Developer specialized in JavaScript and Python. I build scalable web applications with clean architecture and performant databases. Constant learner of emerging technologies.
            </p>
          </div>

          <div className="bento-item p-8 animate-on-scroll">
            <span className="text-[#10b981] text-xs font-bold uppercase tracking-widest block mb-4">Core Tech</span>
            <div className="flex flex-wrap gap-2">
              {skills.coreLanguages.map(s => <span key={s} className="skill-tag">{s}</span>)}
            </div>
          </div>

          <div className="bento-item p-8 md:col-span-3 animate-on-scroll">
            <span className="text-[#10b981] text-xs font-bold uppercase tracking-widest block mb-4">Frameworks & Tools</span>
            <div className="flex flex-wrap gap-3">
              {[...skills.frameworksLibraries, ...skills.toolsPlatforms].map(s => <span key={s} className="skill-tag">{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Certifications */}
      <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 animate-on-scroll tracking-tighter">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.name} className="cert-card animate-on-scroll">
              <img src={cert.image} alt={cert.name} className="w-full aspect-video object-cover opacity-80 hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <h3 className="font-bold text-lg">{cert.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 text-center">
        <div className="max-w-2xl mx-auto animate-on-scroll bento-item p-12">
          <h2 className="text-5xl font-black mb-6 tracking-tighter">Ready to work?</h2>
          <p className="text-zinc-400 mb-10 text-lg">Let's build something amazing together. Reach out via email.</p>
          <a href="mailto:ian.manfredi12@gmail.com" className="btn-primary px-10 py-4 rounded-full text-lg inline-flex items-center gap-3">
            <Mail /> Send Message
          </a>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-zinc-500 text-sm">
        <p>© 2026 Ian Manfredi • Built with Precision</p>
      </footer>
    </div>
  )
}
