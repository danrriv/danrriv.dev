"use client"

import { useTranslations } from "next-intl"
import { useState, useEffect } from "react"

export default function TypingHero() {
  /* Translation */
  const t = useTranslations('Hero')

  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopIndex, setLoopIndex] = useState(0)
  const [isSm, setIsSm] = useState(false)

  const words = ["danrriv.", "Daniel Rodriguez."]
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
      <div className="max-w-7xl px-6 sm:px-8 lg:px-14">
        <div className="grid sm:grid-cols-4 items-center">
          <div className="col-span-3">

            <h1 className="text-[clamp(2.5rem,5vw+1.5rem,4.5rem)] font-bold leading-tight mb-2 whitespace-nowrap">
              Hi, I'm&nbsp;
              <span className="relative inline-block">
                {text}
              </span>
            </h1>

            <h2 className="text-base sm:text-2xl text-gray-400 text-muted-foreground mb-6 sm:mb-8">
              {t.rich('role', {
                italic: (chunks) => <span className="italic text-xs">{chunks}</span>
              })}
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              {t('intro')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
