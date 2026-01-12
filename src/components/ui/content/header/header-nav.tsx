'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';

export default function NavSticky() {
    const t = useTranslations('NavSticky');

    const [show, setShow] = useState(true);
    const [lastY, setLastY] = useState(0);
    const [activated, setActivated] = useState(false);
    const [preActivated, setPreActivated] = useState(false);

    const smallThreshold = 80;
    const bigThreshold = 140;

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setPreActivated(y >= smallThreshold);

            if (y < bigThreshold) {
                setActivated(false);
                setShow(true);
                setLastY(y);
                return;
            }

            setActivated(true);
            setShow(y < lastY);
            setLastY(y);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [lastY]);

    // Variantes para los links (cascada)
    const linkVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2, // Retraso progresivo
                duration: 0.5,
            }
        })
    };

    return (
        <motion.nav
            // Animación de entrada inicial del contenedor
            initial={{ y: -50, x: "-50%", opacity: 0 }}
            animate={{
                y: activated ? (show ? 0 : -100) : 0,
                x: "-50%",
                opacity: 1
            }}
            transition={{
                opacity: { duration: 0.5 },
                y: { type: "spring", stiffness: 300, damping: 30 } // Suaviza el hide/show al scroll
            }}
            className={`
                fixed top-6 left-1/2 rounded-full
                transition-colors duration-300 backdrop-blur-sm
                h-10 flex items-center md:gap-7 gap-4 text-sm px-6 z-50
                ${preActivated ? 'bg-gray-800/80 shadow-lg' : 'bg-gray-900/80'}
            `}
        >
            <motion.div custom={0} variants={linkVariants} initial="hidden" animate="visible">
                <Link href={`#${t('display.experience')}`} className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                    <span className="text-teal-500 text-xs font-mono">01.</span>
                    {t('experience')}
                </Link>
            </motion.div>

            <motion.div custom={1} variants={linkVariants} initial="hidden" animate="visible">
                <Link href={`#${t('display.projects')}`} className="text-gray-300 hover:text-white transition-colors flex items-center gap-1">
                    <span className="text-teal-500 text-xs font-mono">02.</span>
                    {t('projects')}
                </Link>
            </motion.div>

            <motion.div custom={2} variants={linkVariants} initial="hidden" animate="visible">
                <Link href={`#${t('display.about')}`} className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap">
                    <span className="text-teal-500 text-xs font-mono">03.</span>
                    {t('about')}
                </Link>
            </motion.div>
        </motion.nav>
    );
}