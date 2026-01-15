"use client"

import { motion } from 'motion/react'; 
import { ReactNode } from "react";

/**
 * Componente Acerca de Mí, recibe datos para poder renderizar
 */
export default function AboutContent({
    children,
    title,
    techList,
    techLabel,
    spotifyWidget
}: {
    children: ReactNode,
    title: ReactNode,
    techList: string[],
    techLabel: string,
    spotifyWidget: ReactNode
}) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl font-bold flex items-center gap-3 mb-12">
                {title}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex-1 h-px bg-gray-800 origin-left"
                />
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                {/* Bloque de Texto */}
                <motion.div variants={itemVariants} className="space-y-6 md:col-span-7 text-base text-foreground/70 leading-relaxed">
                    {children}
                </motion.div>

                <div className="space-y-12 md:col-span-5">
                    {/* Bloque de Tecnologías */}
                    <motion.div variants={itemVariants} className="px-2 space-y-4">
                        <h3 className="text-sm tracking-wider opacity-60">
                            {techLabel}:
                        </h3>
                        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                            {techList.map((tech, i) => (
                                <motion.div
                                    key={tech}
                                    whileHover={{ x: 5 }}
                                    className="group flex items-center gap-2 transition-all duration-200"
                                >
                                    <span className="text-teal-500/60 font-mono text-sm">&raquo;</span>
                                    <span className="text-sm font-medium text-foreground/80">{tech}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bloque de Música */}
                    <motion.div variants={itemVariants}>
                        {spotifyWidget}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}