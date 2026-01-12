"use client"

import { useTranslations } from "next-intl";
import { motion } from 'motion/react';

// types
interface Role {
    position: string;
    period: string;
    responsibilities: string[];
}

interface ExperienceItem {
    company: string;
    website: string;
    roles: Role[];
}

export default function Experience() {
    const t = useTranslations('Experience');
    const n = useTranslations('NavSticky');
    const experiences = t.raw('experiences') as ExperienceItem[];

    // Variantes para los elementos de la lista
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { 
            opacity: 1, 
            x: 0, 
            transition: { duration: 0.5} 
        }
    };

    return (
        <section id={n('display.experience')} className="py-20">
            <div className="mx-auto max-w-7xl px-4">

                {/* Título con Animación de entrada */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                        <span className="text-teal-500 text-lg font-mono">01.</span>
                        {t('title')}
                    </h2>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex-1 h-px bg-gray-800 origin-left" 
                    />
                </motion.div>

                <div className="space-y-20">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="group">

                            {/* Empresa */}
                            <motion.h3 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-xl sm:text-2xl font-bold mb-8"
                            >
                                <a
                                    href={exp.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground/90 hover:text-teal-500 transition-colors duration-300 flex items-center gap-2 w-fit"
                                >
                                    {exp.company}
                                    <span className="text-teal-500 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 text-sm">
                                        ↗
                                    </span>
                                </a>
                            </motion.h3>

                            {/* Contenedor de Roles con Animación de la Línea Lateral */}
                            <div className="relative ml-2 sm:ml-6 border-l border-gray-800 space-y-12">
                                {exp.roles.map((role, ridx) => (
                                    <motion.div 
                                        key={ridx} 
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-50px" }}
                                        variants={itemVariants}
                                        className="relative pl-8"
                                    >
                                        {/* El "Punto" de la línea temporal con efecto de pulso */}
                                        <motion.div 
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                                            className="absolute w-3 h-3 bg-gray-900 border border-teal-500 rounded-full -left-[6.5px] top-2 z-10" 
                                        />

                                        <div className="flex flex-col gap-1 mb-4">
                                            <h4 className="text-lg font-bold text-foreground/90">
                                                {role.position}
                                            </h4>
                                            <span className="text-xs font-mono text-teal-500/80 tracking-wider">
                                                {role.period}
                                            </span>
                                        </div>

                                        {/* Responsabilidades */}
                                        <ul className="grid gap-3 max-w-3xl">
                                            {role.responsibilities.map((a, aidx) => (
                                                <motion.li
                                                    key={aidx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.1 * aidx }}
                                                    className="text-sm text-muted-foreground flex gap-3 leading-relaxed"
                                                >
                                                    <span className="text-teal-500 mt-1.5 shrink-0 w-1 h-1 rounded-full bg-teal-500" />
                                                    <span>{a}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}