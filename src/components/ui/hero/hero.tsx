"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"

export default function Hero() {
  /* Translation */
  const t = useTranslations('Hero')
  const n = useTranslations('NavSticky')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.4 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopIndex, setLoopIndex] = useState(0)
  const [isSm, setIsSm] = useState(false)

  const words = ["danrriv.", "Daniel Rodriguez."] // Palabras a escribir
  const typingSpeed = 100
  const deletingSpeed = 50
  const pauseBetween = 4000
  const speed = isDeleting ? deletingSpeed : typingSpeed

  const [isIdle, setIsIdle] = useState(false)

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 820px)")
    setIsSm(mql.matches)
    const handler = (e: MediaQueryListEvent) => setIsSm(e.matches)
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (isSm) {
      setText(words[0])
      return
    }

    const handleTyping = () => {
      const current = words[loopIndex]

      if (!isDeleting && text.length < current.length) {
        setText((prev) => current.slice(0, prev.length + 1))
        setIsIdle(false)
      } else if (isDeleting && text.length > 0) {
        setText((prev) => current.slice(0, prev.length - 1))
        setIsIdle(false)
      } else if (!isDeleting && text.length === current.length) {
        setIsIdle(true)
        setTimeout(() => setIsDeleting(true), pauseBetween)
      } else if (isDeleting && text.length === 0) {
        setIsDeleting(false)
        setIsIdle(false)
        setLoopIndex((i) => (i + 1) % words.length)
      }
    }

    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopIndex, words, typingSpeed, deletingSpeed, pauseBetween, isSm])

  return (
    <section className="flex-1 grid place-items-center pb-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      className="max-w-7xl px-6 sm:px-8 lg:px-14">
        <div className="grid sm:grid-cols-4 items-center">
          <div className="col-span-3">

            <h1 className="text-[clamp(2.5rem,5vw+1.5rem,4.5rem)] font-bold leading-tight mb-2 whitespace-nowrap">
              {t('greeting')}&nbsp;
              <span className="relative inline-block text-teal-500">
                {text}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="md:inline-block hidden w-1 h-10 sm:h-14 bg-teal-500 ml-1 align-middle"
                />
              </span>
            </h1>

            <motion.h2
              variants={itemVariants}
              className="text-base sm:text-2xl text-gray-400 mb-6 sm:mb-8"
            >
              {t.rich('role', {
                italic: (chunks) => <span className="italic text-xs text-teal-500/40">{chunks}</span>
              })}
            </motion.h2>

            {/* Párrafo de Intro */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-gray-300 leading-relaxed"
            >
              {t('intro')}
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-10">
              <a href={`#${n('display.projects')}`} className="px-6 py-3 border border-teal-500 text-teal-500 rounded hover:bg-teal-500/10 transition-colors font-mono text-sm">
                {t('cta')}
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
