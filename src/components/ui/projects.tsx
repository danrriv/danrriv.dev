"use client"

import { useState } from "react"

export default function Projects() {
    const [activeTab, setActiveTab] = useState<"work" | "personal">("personal")

    const projects = {
        work: [
            {
                title: "Titilaka",
                description: "Aplicación fullstack para administrar usuarios y permisos con interfaz intuitiva y segura.",
                tech: ["Astro", "Tailwind CSS"],
                highlights: "Implementación de control de acceso granular",
                image: "",
                website: "https://www.titilaka.pe"
            },
            {
                title: "Travel Professional's Site",
                description: "Panel de análisis con visualización de datos en tiempo real y reportes exportables.",
                tech: ["Angular", "Spring Boot", "PostgreSQL", "Sanity", "Spring Security"],
                highlights: "Procesamiento de 100k+ registros con optimización de queries",
                image: "",
                website: "https://info.andean.travel"
            },
            {
                title: "Complaints Book",
                description: "Arquitectura de microservicios con Spring Boot enfocada en rendimiento y escalabilidad.",
                tech: ["Angular", "Spring Boot", "PostgreSQL"],
                highlights: "Caché distribuido y rate limiting",
                image: "",
                repository: ""
            },
            {
                title: "Intranet",
                description: "Aplicación frontend moderna con formularios complejos y validaciones avanzadas.",
                tech: ["Angular", "Spring Boot", "PostgreSQL", "Spring Security"],
                highlights: "Componentes reutilizables y estado compartido",
                image: "",

            },
        ],
        personal: [
            {
                title: "Buscador Giphy",
                description: (
                    <span>
                        A simple GIF search engine built with the
                        <a
                            href="https://developers.giphy.com"
                            className="hover:cursor-pointer hover:text-gray-300"
                        > Giphy API</a>
                        . It includes search history, language switching, and was originally created for a technical test.
                    </span>
                ),
                tech: ["Angular", "Giphy API"],
                highlights: "External API integration",
                image: "",
                website: "https://buscador-giphy.vercel.app",
                repository: "https://github.com/danrriv/Buscador_Giphy "
            },
            {
                title: "DSTR-Santa-Natura",
                description: "Blog dinámico con editor de contenido, categorías y sistema de comentarios.",
                tech: [".NET", "SQL Server", "WinForms"],
                image: "",
                highlights: "SEO optimizado y carga rápida",
                repository: "https://github.com/danrriv/DSTR-Santa-Natura"
            },
            {
                title: (
                    <span>
                        This site{" "}
                        <span className="text-xs inline-block transition-transform duration-300 hover:rotate-180 hover:cursor-help">(?)</span>
                    </span>

                ),
                description: "Aplicación de productividad con colaboración en tiempo real y sincronización.",
                tech: ["Nextjs", "Tailwind CSS"],
                image: "",
                highlights: "It's open source; if you liked it, you can use it as a template. :)",
                repository: "https://github.com/danrriv/danrriv.dev"
            },
        ],
    }

    const currentProjects = projects[activeTab]

    return (
        <section id="projects" className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-center font-bold mb-8">Some of my projects</h2>

                <div className="relative mb-12 w-max">
                    {/* Línea animada */}
                    <span
                        className={`
            absolute bottom-0 left-0 h-0.5 bg-teal-500 transition-all duration-300
        `}
                        style={{
                            width: activeTab === "personal" ? "100px" : "65px", // ajusta al tamaño de tus botones
                            transform: activeTab === "personal" ? "translateX(0)" : "translateX(100px)",
                        }}
                    />

                    <div className="flex border-b border-gray-700">
                        <button
                            onClick={() => setActiveTab("personal")}
                            className="py-3 px-4 font-medium transition-all hover:bg-gray-800 hover:cursor-pointer"
                        >
                            Personal
                        </button>

                        <button
                            onClick={() => setActiveTab("work")}
                            className="py-3 px-4 font-medium transition-all hover:bg-gray-800 hover:cursor-pointer"
                        >
                            Work
                        </button>
                    </div>
                </div>


                <div className="grid md:grid-cols-2 gap-6">
                    {currentProjects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-800 rounded-lg p-6 hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-center mb-10">
                                <h3 className="text-xl font-bold group-hover:text-teal-500 transition-colors">{project.title}</h3>
                                <div className="flex gap-3">
                                    {project.website && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="h-5 w-5 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g>
                                                    <path
                                                        d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                                                        stroke="#d1d5dc" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </g>
                                            </svg>
                                        </a>
                                    )}
                                    {project.repository && (
                                        <a
                                            href={project.repository}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub"
                                            className="h-4.5 w-4.5 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                                        >
                                            <svg fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                            <p className="text-muted-foreground mb-10 leading-relaxed">
                                {project.description}
                            </p>
                            {project.highlights && (
                                <div className="mb-5">
                                    <p className="text-sm text-accent text-gray-400">
                                        {project.highlights}
                                    </p>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((tech, tidx) => (
                                    <span
                                        key={tidx}
                                        className="inline-block px-3 pb-1 pt-4 text-teal-500 text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
