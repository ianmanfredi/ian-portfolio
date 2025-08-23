"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, BarChart3, Search, Puzzle } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState("lenguajes")

  useEffect(() => {
    setIsVisible(true)

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

    return () => observer.disconnect()
  }, [])

  const skills = {
    lenguajes: ["JavaScript", "Python", "Bash"],
    frameworks: ["React", "React Native", "Node.js", "Express", "Flask"],
    basesDeDatos: ["MySQL", "MongoDB", "Neo4j", "AWS", "PyMongo"],
  }

  const aboutPoints = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      text: "📊 Certificado en Ciencia de Datos (Santander)",
    },
    {
      icon: <Search className="w-6 h-6" />,
      text: "🔍 Python (Santander)",
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      text: "🧩 Resolución de Problemas (Santander)",
    },
  ]

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
      github: "https://github.com/ianmanfredi",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className={`text-center max-w-4xl mx-auto ${isVisible ? "fade-in-up" : "opacity-0"}`}>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight gradient-text">
            Ian Manfredi
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 font-semibold text-white">Full Stack Developer</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-gray-300">
            Especializado en JavaScript, Python y base de datos.
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
              <a href="mailto:ian.manfredi12@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
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
              <p>
                🛠️ <strong className="text-white">Herramientas</strong>: Git, Postman, Google Colab, AWS etc.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
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

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 animate-on-scroll text-white">
            Certificaciones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={cert.name}
                className="portfolio-card text-center animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="w-full h-32 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                    {/* Imagen alternativa si no existe la certificación */}
                    <div className="text-4xl">
                      {cert.name.includes("Ciencia") && "📊"}
                      {cert.name.includes("Python") && "🐍"}
                      {cert.name.includes("Resolución") && "🧩"}
                    </div>
                  </div>
                  <p className="text-lg font-medium text-white">{cert.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
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
                  <Button className="hover-button bg-blue-600 hover:bg-blue-700 rounded-full" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Ver en GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 animate-on-scroll text-white">Contacto</h2>
          <p className="text-lg mb-12 text-gray-300 animate-on-scroll">¿Interesado en trabajar juntos? ¡Contáctame!</p>
          <div className="flex flex-wrap justify-center gap-6 animate-on-scroll">
            <Button
              size="lg"
              className="hover-button bg-blue-600 hover:bg-blue-700 rounded-full px-8 py-3 text-lg font-semibold"
              asChild
            >
              <a href="mailto:ian.manfredi12@gmail.com">
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

      <section className="py-12 px-4" id="certificaciones">
        <h2 className="text-3xl font-bold mb-8 text-center">Certificaciones</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <div key={idx} className="bg-gray-900 rounded-lg shadow-lg p-6 flex flex-col items-center">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-28 h-28 object-contain mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Ian Manfredi </p>
        </div>
      </footer>
    </div>
  )
}