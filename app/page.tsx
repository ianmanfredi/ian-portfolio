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
    {
      name: "Data Science",
      image: "/certificaciones/ciencia-datos.jpg",
    },
    {
      name: "Python",
      image: "/certificaciones/analisis-datos.jpg",
    },
    {
      name: "Problem Solving",
      image: "/certificaciones/resolucion-problemas.jpg",
    },
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
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-[#10b981]/30">
      {/* INYECCIÓN DE ESTILOS PARA VERCEL */}
      <style dangerouslySetInnerHTML={{
        __html: `
        html { scroll-behavior: smooth; }
        .text-foreground { color: #ededed; }
        .text-muted-foreground { color: #a1a1aa; }
        .text-primary { color: #10b981; }
        .border-border { border-color: rgba(255,255,255,0.1); }
        .glass { background: rgba(10, 10, 10, 0.75); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.05); }
        .text-gradient { background: linear-gradient(to right, #ffffff, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .btn-primary { background-color: #10b981; color: #000; font-weight: 600; transition: all 0.3s ease; }
        .btn-primary:hover { background-color: #34d399; box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); transform: translateY(-2px); }
        .btn-ghost { background-color: transparent; border: 1px solid rgba(255,255,255,0.1); transition: all 0.3s ease; }
        .btn-ghost:hover { background-color: rgba(255,255,255,0.05); border-color: #10b981; }
        .bento-item { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 24px; transition: all 0.3s ease; }
        .bento-item:hover { background: rgba(255, 255, 255, 0.05); border-color: rgba(16, 185, 129, 0.5); transform: translateY(-4px); }
        .skill-tag { background: rgba(16, 185, 129, 0.1); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.2); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 500; }
        .section-divider { height: 1px; background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent); margin: 4rem auto; }
        .gradient-border { background: linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(to right, #10b981, transparent) border-box; border: 1px solid transparent; border-radius: 24px; }
        .cert-card, .project-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; overflow: hidden; transition: all 0.3s ease; }
        .cert-card:hover, .project-card:hover { border-color: #10b981; transform: translateY(-4px); }
        .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .visible { opacity: 1 !important; transform: translateY(0) !important; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-lg font-semibold tracking-tight text-foreground">
            IM<span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link text-sm font-medium transition-colors hover:text-white ${activeSection === link.href.slice(1) ? "text-foreground" : "text-muted-foreground"}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn-primary px-5 py-2.5 rounded-full text-sm inline-flex items-center gap-2"
              >
                Contact
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-border">
            <ul className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="btn-primary px-5 py-2.5 rounded-full text-sm inline-flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="absolute inset-0 -z-10 bg-[#0a0a0a] [background:radial-gradient(125%_125%_at_50%_10%,#0a0a0a_40%,#10b9811a_100%)]"></div>
        <div className={`text-center max-w-4xl mx-auto ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              Full Stack Developer
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-12 text-balance">
            Ian <span className="text-gradient">Manfredi</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/ianmanfredi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ianmanfredi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-4xl mx-auto" />

      {/* About & Skills Section - Bento Grid */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Get to Know Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              About Me & Skills
            </h2>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* About Card - Large */}
            <div className="bento-item p-8 md:col-span-2 lg:col-span-2 animate-on-scroll stagger-1">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <span className="text-primary text-xs font-medium tracking-wider uppercase mb-4 block">
                    Bio
                  </span>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I am a Full Stack Developer with experience in JavaScript and Python. I specialize in web development and possess strong knowledge of both SQL and NoSQL databases. I am constantly learning and applying new technologies to solve complex problems, keeping my stack modern and up-to-date.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Languages Card */}
            <div className="bento-item p-6 animate-on-scroll stagger-2">
              <span className="text-primary text-xs font-medium tracking-wider uppercase mb-4 block">
                Core Languages
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.coreLanguages.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks Card */}
            <div className="bento-item p-6 lg:col-span-2 animate-on-scroll stagger-3">
              <span className="text-primary text-xs font-medium tracking-wider uppercase mb-4 block">
                Frameworks & Libraries
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.frameworksLibraries.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data Management Card */}
            <div className="bento-item p-6 animate-on-scroll stagger-4">
              <span className="text-primary text-xs font-medium tracking-wider uppercase mb-4 block">
                Data Management
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.dataManagement.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Card - Full Width */}
            <div className="bento-item p-6 md:col-span-2 lg:col-span-3 animate-on-scroll">
              <span className="text-primary text-xs font-medium tracking-wider uppercase mb-4 block">
                Tools & Platforms
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.toolsPlatforms.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-4xl mx-auto" />

      {/* Education Section */}
      <section id="experience" className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Background
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Academic Journey
            </h2>
          </div>

          <div className="gradient-border p-8 md:p-12 animate-on-scroll">
            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                  Higher Technician in Programming
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Web development oriented degree
                </p>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="font-medium text-foreground">UTN Bahia Blanca</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-4xl mx-auto" />

      {/* Certifications Section */}
      <section id="certifications" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Credentials
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Credentials & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`cert-card animate-on-scroll stagger-${index + 1}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="p-5 border-t border-border">
                  <h3 className="font-semibold text-foreground">{cert.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-4xl mx-auto" />

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Featured Projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card animate-on-scroll stagger-${index + 1}`}
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-primary text-xs font-medium tracking-wider uppercase">
                      Project {String(index + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost px-5 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-4xl mx-auto" />

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-on-scroll">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Contact
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
              Interested in working together? Let&apos;s connect.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 animate-on-scroll">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ian.manfredi12@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/ianmanfredi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/ianmanfredi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Ian Manfredi
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ianmanfredi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/ianmanfredi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ian.manfredi12@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
