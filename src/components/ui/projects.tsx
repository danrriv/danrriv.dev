"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import CustomLink from "../link"
import { AnimatePresence, motion } from "motion/react"


export default function Projects() {
    const [activeTab, setActiveTab] = useState<"work" | "personal">("personal")
    const t = useTranslations('Projects')
    const n = useTranslations('NavSticky')

    const currentProjects = t.raw(activeTab) as any[];

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2 // Retraso entre cada tarjeta
            }
        }
    }

    // Variantes para cada tarjeta
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8 }
        }
    }

    return (
        <section id={n('display.projects')} className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-center font-bold mb-8"
                >
                    <span className="text-teal-500 text-lg font-mono">02.</span> {t('title')}
                </motion.h2>

                <div className="relative mb-12 w-max">
                    <span
                        className="absolute bottom-0 left-0 h-0.5 bg-teal-500 transition-all duration-300"
                        style={{
                            width: activeTab === "personal" ? "100px" : "85px",
                            transform: activeTab === "personal" ? "translateX(0)" : "translateX(100px)",
                        }}
                    />

                    <div className="flex border-b border-gray-700">
                        <button
                            onClick={() => setActiveTab("personal")}
                            className={`py-3 px-4 font-medium transition-all hover:bg-gray-800 hover:cursor-pointer ${activeTab === "personal" ? "text-teal-500" : ""}`}
                        >
                            {t('personal_label')}
                        </button>
                        <button
                            onClick={() => setActiveTab("work")}
                            className={`py-3 px-4 font-medium transition-all hover:bg-gray-800 hover:cursor-pointer ${activeTab === "work" ? "text-teal-500" : ""}`}
                        >
                            {t('work_label')}
                        </button>
                    </div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    key={activeTab} // El key hace que se re-anime al cambiar de tab
                    className="grid md:grid-cols-2 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {currentProjects.map((_, idx) => (
                            <motion.div
                                key={`${activeTab}-${idx}`} // Key único por tab e índice
                                variants={itemVariants}
                                layout // Suaviza el movimiento si las tarjetas cambian de posición
                                className="bg-gray-800 rounded-lg p-6 hover:-translate-y-2 transition-all duration-300 group shadow-xl"
                            >
                                <div className="flex justify-between items-center mb-10">
                                    <h3 className="text-xl font-bold group-hover:text-teal-500 transition-colors">
                                        {t.rich(`${activeTab}.${idx}.title`, {
                                            tooltip: (chunks) => (
                                                <span className="text-xs inline-block transition-transform duration-300 hover:rotate-360 hover:cursor-help">
                                                    {chunks}
                                                </span>
                                            )
                                        })}
                                    </h3>

                                    <div className="flex gap-3">
                                        {t(`${activeTab}.${idx}.website`) && (
                                            <a href={t(`${activeTab}.${idx}.website`)} target="_blank" rel="noopener noreferrer" className="h-5 w-5 text-gray-400 hover:text-white transition-all">
                                                <ExternalIcon />
                                            </a>
                                        )}
                                        {t(`${activeTab}.${idx}.repository`) && (
                                            <a href={t(`${activeTab}.${idx}.repository`)} target="_blank" rel="noopener noreferrer" className="h-5 w-5 text-gray-400 hover:text-white transition-all">
                                                <GithubIcon />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-10 leading-relaxed text-gray-400">
                                    {t.rich(`${activeTab}.${idx}.description`, {
                                        giphy: (chunks) => <CustomLink href="https://developers.giphy.com">{chunks}</CustomLink>,
                                        merdarko: (chunks) => <CustomLink href="https://github.com/MerDark0">{chunks}</CustomLink>,
                                        codigo: (chunks) => <CustomLink href="https://www.youtube.com/watch?v=ezYDeaMivH8&list=PLx2nia7-PgoDk8pZ1YG8wtw5A8LH2kz96">{chunks}</CustomLink>,
                                        spotify: (chunks) => <CustomLink href="https://spotify.com">{chunks}</CustomLink>,
                                        selfbook: (chunks) => <CustomLink href="https://selfbook.com/">{chunks}</CustomLink>,
                                        sanity: (chunks) => <CustomLink href="https://www.sanity.io/">{chunks}</CustomLink>,
                                        salesiq: (chunks) => <CustomLink href="https://www.zoho.com/salesiq/">{chunks}</CustomLink>
                                    })}
                                </p>

                                {t(`${activeTab}.${idx}.highlights`) && (
                                    <div className="mb-5">
                                        <p className="text-sm text-gray-500 italic">
                                            {t(`${activeTab}.${idx}.highlights`)}
                                        </p>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-3">
                                    {(t.raw(`${activeTab}.${idx}.tech`) as string[]).map((tech, tidx) => (
                                        <span key={tidx} className="inline-block px-3 py-1 bg-gray-900 rounded text-teal-500 text-xs font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}

// Icons
const ExternalIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
const GithubIcon = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>