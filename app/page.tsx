"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleSmoothScroll = (e) => {
      e.preventDefault()
      const targetId = e.currentTarget.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
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
      name: "Resolucion de Problemas",
      image: "/certificaciones/resolucion-problemas.jpg",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "WikiDev",
      description: "Tecnologias: HTML, CSS, JavaScript",
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
      <style jsx global>{`
        .gradient-text {
          background-image: linear-gradient(45deg, #18A4E0, #F8B4C1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gradient-link-underline {
          position: relative;
        }
        .gradient-link-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background-image: linear-gradient(45deg, #18A4E0, #F8B4C1);
          transition: width 0.3s ease-in-out;
        }
        .gradient-link-underline:hover::after {
          width: 100%;
        }

        .gradient-cta-button {
          background-image: linear-gradient(90deg, #F8B4C1, #F4F1EA);
          background-size: 200% 100%;
          transition: background-position 0.5s ease-in-out;
        }
        .gradient-cta-button:hover {
          background-position: -100% 0;
        }

        .skill-pill {
          background: #252a34;
          transition: background 0.3s ease, transform 0.3s ease;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .skill-pill::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: linear-gradient(45deg, #18A4E0, #F8B4C1);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        .skill-pill:hover::before {
          opacity: 0.8;
        }
        .skill-pill:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .bg-diagonal-gradient {
          background-image: linear-gradient(135deg, #222D6D 0%, #32448F 100%);
        }

        .glassmorphism {
          background: rgba(34, 45, 109, 0.5);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(49, 57, 68, 0.3);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      <nav className="fixed top-0 left-0 w-full z-50 glassmorphism transition-shadow duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-2xl text-white tracking-wider">Ian Manfredi</span>
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a href="#sobre-mi" className="text-gray-200 hover:text-white font-medium transition-colors duration-200 gradient-link-underline">Sobre Mi</a>
            </li>
            <li>
              <a href="#educacion" className="text-gray-200 hover:text-white font-medium transition-colors duration-200 gradient-link-underline">Educacion</a>
            </li>
            <li>
              <a href="#certificaciones" className="text-gray-200 hover:text-white font-medium transition-colors duration-200 gradient-link-underline">Certificaciones</a>
            </li>
            <li>
              <a href="#proyectos" className="text-gray-200 hover:text-white font-medium transition-colors duration-200 gradient-link-underline">Proyectos</a>
            </li>
            <li>
              <a href="#contacto" className="hidden lg:block">
                <Button className="gradient-cta-button text-white rounded-full px-6 py-3 font-semibold">
                  Contacto
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="pt-20 min-h-screen bg-[#222D6D] text-white font-sans scroll-smooth">
        <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-[#222D6D]" id="hero">
          <div className={`text-center max-w-4xl mx-auto ${isVisible ? "fade-in-up" : "opacity-0"}`}>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight gradient-text">
              Ian Manfredi
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 font-semibold text-gray-200">Full Stack Developer</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-gray-400">
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                size="lg"
                className="hover-button bg-gray-800 hover:bg-gray-700 text-white rounded-full px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="https://github.com/ianmanfredi" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                size="lg"
                className="hover-button bg-gray-800 hover:bg-gray-700 text-white rounded-full px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="https://linkedin.com/in/ianmanfredi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-diagonal-gradient" id="sobre-mi">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 animate-on-scroll gradient-text">
              Sobre Mi & Skills
            </h2>
            <div className="portfolio-card glassmorphism animate-on-scroll p-6 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-lg md:text-xl leading-relaxed text-gray-300 space-y-6">
                    <p>
                      Soy un programador Full Stack con experiencia en JavaScript y Python. Me dedico al desarrollo web y conozco bases de datos, tanto SQL como NoSQL.
                    </p>
                    <p>
                      Siempre busco aprender y aplicar nuevas tecnologias para resolver problemas, asi que me mantengo estudiando para estar al dia.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Habilidades Tecnicas</h3>
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-200 mb-4">Lenguajes y Tecnologias Web</h4>
                      <div className="flex flex-wrap gap-3">
                        {skills.lenguajesYWeb.map((skill) => (
                          <span key={skill} className="skill-pill text-white px-5 py-2 rounded-full text-base font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-200 mb-4">Frameworks y Librerias</h4>
                      <div className="flex flex-wrap gap-3">
                        {skills.frameworksYLibrerias.map((skill) => (
                          <span key={skill} className="skill-pill text-white px-5 py-2 rounded-full text-base font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-200 mb-4">Bases de Datos</h4>
                      <div className="flex flex-wrap gap-3">
                        {skills.basesDeDatos.map((skill) => (
                          <span key={skill} className="skill-pill text-white px-5 py-2 rounded-full text-base font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-200 mb-4">Herramientas y Plataformas</h4>
                      <div className="flex flex-wrap gap-3">
                        {skills.herramientasYPlataformas.map((skill) => (
                          <span key={skill} className="skill-pill text-white px-5 py-2 rounded-full text-base font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4" id="educacion">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16 animate-on-scroll gradient-text">
              Educacion
            </h2>
            <Card className="portfolio-card glassmorphism animate-on-scroll">
              <CardHeader>
                <div className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">Tecnico Superior en Programacion</CardTitle>
                  <CardDescription className="text-xl text-gray-300">
                    UTN Bahia Blanca | Carrera orientada a desarrollo web
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4 bg-[#181B20]" id="certificaciones">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll gradient-text">
              Certificaciones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {certifications.map((cert, index) => (
                <Card
                  key={cert.name}
                  className="portfolio-card glassmorphism animate-on-scroll"
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

        <section className="py-20 px-4" id="proyectos">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 animate-on-scroll gradient-text">
              Proyectos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="portfolio-card glassmorphism animate-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {project.github ? (
                      <Button className="hover-button bg-gray-800 hover:bg-gray-700 rounded-full" asChild>
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

        <section className="py-20 px-4" id="contacto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 animate-on-scroll gradient-text">Contacto</h2>
            <p className="text-lg mb-12 text-gray-300 animate-on-scroll">¿Interesado en trabajar juntos? ¡Contactame!</p>
            <div className="flex flex-wrap justify-center gap-6 animate-on-scroll">
              <Button
                size="lg"
                className="hover-button bg-gray-800 hover:bg-gray-700 text-white rounded-full px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ian.manfredi12@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Email
                </a>
              </Button>
              <Button
                size="lg"
                className="hover-button bg-gray-800 hover:bg-gray-700 text-white rounded-full px-8 py-3 text-lg font-semibold"
                asChild
              >
                <a href="https://linkedin.com/in/ianmanfredi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                className="hover-button bg-gray-800 hover:bg-gray-700 text-white rounded-full px-8 py-3 text-lg font-semibold"
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

        <footer className="py-8 px-4 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400">© 2025 Ian Manfredi</p>
          </div>
        </footer>
      </div>
    </>
  )
}