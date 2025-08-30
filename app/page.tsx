"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Smooth scroll functionality
    const handleSmoothScroll = (e) => {
      e.preventDefault()
      const targetId = e.currentTarget.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for fixed navbar height
          behavior: "smooth",
        })
      }
    }

    const navLinks = document.querySelectorAll("nav ul a")
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
      observer.disconnect()
    }
  }, [])

  const skills = {
    lenguajesYWeb: ["HTML", "CSS", "JavaScript", "Python"],
    frameworksYLibrerias: ["Flask", "Django", "jQuery", "React-React Native", "Node.js", "Express"],
    basesDeDatos: ["MySQL", "MongoDB", "PyMongo", "Neo4j"],
    herramientasYPlataformas: ["Eslint", "EJS y Pug", "Git", "Github y Gitlab", "Google cloud", "AWS"],
  }

  const certifications = [
    {
      name: "Ciencia de Datos",
      image: "/certificaciones/ciencia-datos.jpg",
    },
    {
      name: "Python",
      image: "/certificaciones/analisis-datos.jpg",
    },
    {
      name: "Resolución de Problemas",
      image: "/certificaciones/resolucion-problemas.jpg",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "WikiDev",
      description: "Tecnologías: HTML, CSS, JavaScript",
      github: "https://wikidev-theta.vercel.app/index.html",
    },
    {
      id: 2,
      title: "Proyecto 2",
      description: "En proceso...",
    },
  ]

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#181B20] bg-opacity-95 shadow-md border-b border-gray-800 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-bold text-xl text-white tracking-tight">Ian Manfredi</span>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#sobre-mi" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">Sobre Mí</a>
            </li>
            <li>
              <a href="#educacion" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">Educación</a>
            </li>
            <li>
              <a href="#certificaciones" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">Certificaciones</a>
            </li>
            <li>
              <a href="#proyectos" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">Proyectos</a>
            </li>
            <li>
              <a href="#contacto" className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200">Contacto</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="pt-20 min-h-screen bg-[#0d1117] text-white font-sans">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20" id="hero">
          <div className={`text-center max-w-4xl mx-auto ${isVisible ? "fade-in-up" : "opacity-0"}`}>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight gradient-text">
              Ian Manfredi
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 font-semibold text-white">Full Stack Developer</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-gray-300">
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                className="hover-button bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="https://github.com/ianmanfredi" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                size="lg"
                className="hover-button bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="https://linkedin.com/in/ianmanfredi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                className="hover-button bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ian.manfredi12@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Sobre Mí Section */}
        <section className="py-20 px-4" id="sobre-mi">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 animate-on-scroll text-white">
              Sobre Mí
            </h2>
            <div className="animate-on-scroll max-w-3xl mx-auto">
              <div className="text-lg md:text-xl leading-relaxed text-gray-300 space-y-4">
                <p>
                  🚀 <strong className="text-white">Desarrollador Full Stack</strong> con foco en JavaScript, Python y
                  bases de datos (SQL/NoSQL).
                </p>
                <p>
                  📜 <strong className="text-white">Certificado</strong> en Ciencia de Datos, Python y
                  Resolución de Problemas.
                </p>
              </div>
              {/* Skills Section */}
              <div className="mt-10 animate-on-scroll">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="portfolio-card">
                    <CardHeader>
                      <CardTitle className="text-xl text-center text-white">Lenguajes y Tecnologías Web</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center gap-2">
                      {skills.lenguajesYWeb.map((skill) => (
                        <span key={skill} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                          {skill}
                        </span>
                      ))}
                    </CardContent>
                  </Card>
                  <Card className="portfolio-card">
                    <CardHeader>
                      <CardTitle className="text-xl text-center text-white">Frameworks y Librerías</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center gap-2">
                      {skills.frameworksYLibrerias.map((skill) => (
                        <span key={skill} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                          {skill}
                        </span>
                      ))}
                    </CardContent>
                  </Card>
                  <Card className="portfolio-card">
                    <CardHeader>
                      <CardTitle className="text-xl text-center text-white">Bases de Datos</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center gap-2">
                      {skills.basesDeDatos.map((skill) => (
                        <span key={skill} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                          {skill}
                        </span>
                      ))}
                    </CardContent>
                  </Card>
                  <Card className="portfolio-card">
                    <CardHeader>
                      <CardTitle className="text-xl text-center text-white">Herramientas y Plataformas</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center gap-2">
                      {skills.herramientasYPlataformas.map((skill) => (
                        <span key={skill} className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                          {skill}
                        </span>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educación Section */}
        <section className="py-20 px-4" id="educacion">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 animate-on-scroll text-white">
              Educación
            </h2>
            <Card className="portfolio-card animate-on-scroll">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">Técnico Superior en Programación</CardTitle>
                  <CardDescription className="text-xl text-gray-300">
                    UTN Bahía Blanca | Carrera orientada a desarrollo web
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Certificaciones Section */}
        <section className="py-20 px-4 bg-[#181B20]" id="certificaciones">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll text-white">
              Certificaciones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {certifications.map((cert, index) => (
                <Card
                  key={cert.name}
                  className="portfolio-card animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-8 pb-8 flex flex-col items-center">
                    <div className="w-full aspect-video bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center border-2 border-blue-600 shadow-lg mb-6">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="object-cover w-full h-full"
                        style={{ maxHeight: '220px' }}
                      />
                    </div>
                    <p className="text-xl font-bold text-white mt-2">{cert.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proyectos Section */}
        <section className="py-20 px-4" id="proyectos">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll text-white">
              Proyectos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="portfolio-card animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {project.github ? (
                      <Button className="hover-button bg-blue-600 hover:bg-blue-700 rounded-full" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          {project.title === "WikiDev" ? "Ver" : "Ver en GitHub"}
                        </a>
                      </Button>
                    ) : (
                      <span className="inline-block px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm">En proceso</span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto Section */}
        <section className="py-20 px-4" id="contacto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 animate-on-scroll text-white">Contacto</h2>
            <p className="text-lg mb-12 text-gray-300 animate-on-scroll">¿Interesado en trabajar juntos? ¡Contáctame!</p>
            <div className="flex flex-wrap justify-center gap-6 animate-on-scroll">
              <Button
                size="lg"
                className="hover-button bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ian.manfredi12@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Email
                </a>
              </Button>
              <Button
                size="lg"
                className="hover-button bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="https://linkedin.com/in/ianmanfredi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                className="hover-button bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="https://github.com/ianmanfredi" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400">© 2025 Ian Manfredi</p>
          </div>
        </footer>
      </div>
    </>
  )
}