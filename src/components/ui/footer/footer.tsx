import { useTranslations } from "next-intl"
import SwitchLang from "../switch-lang"

export default function Footer() {
    const t = useTranslations("Footer")
    return (
        <footer className="relative h-10 py-10 flex items-center justify-center bg-gray-900">
            {/* Contenedor del Switch: Se posiciona a la izquierda sin ocupar espacio real */}
            <div className="absolute left-4 sm:left-8 block sm:hidden">
                <SwitchLang />
            </div>

            {/* El párrafo se mantiene perfectamente centrado gracias al flex del footer */}
            <p className="text-sm text-gray-400">
                {t.rich("built", {
                    link: (children) => (
                        <a href="https://github.com/danrriv" className="font-bold hover:underline">
                            {children}
                        </a>
                    )
                })}
            </p>
        </footer>
    )
}