'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

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

            // pre-activado entre 60 y 119
            setPreActivated(y >= smallThreshold);

            if (y < bigThreshold) {
                setActivated(false);
                setShow(true);
                setLastY(y);
                return;
            }

            // activado cuando supera 120
            setActivated(true);
            setShow(y < lastY);
            setLastY(y);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [lastY]);


    return (
        <nav
            className={`
        fixed top-6 left-1/2 -translate-x-1/2 rounded-full
        transition-all duration-300 backdrop-blur-sm
        h-8 flex items-center gap-5 text-sm px-4 z-50

        ${preActivated
                    ? 'bg-white/80 dark:bg-gray-600/80'
                    : 'bg-white/80 dark:bg-gray-900/80'
                }
        ${activated
                    ? (show
                        ? 'translate-y-0'
                        : 'translate-y-[calc(-100%-24px)]' /* se oculta por completo */
                    )
                    : ''
                }
    `}
        >
            <Link href="#experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">{t('experience')}</Link>
            <Link href="#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">{t('projects')}</Link>
            <Link
                href="#about"
                className="whitespace-nowrap text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
                {t('about')}
            </Link>
        </nav>
    );
}
