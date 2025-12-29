import { useTranslations } from "next-intl"

export default function Footer() {
    const t = useTranslations("Footer")
    return (
        <footer className="h-10 py-10 flex items-center justify-center bg-white dark:bg-gray-900 dark:border-gray-700">
            <p className="text-sm text-gray-400">
                {t.rich("built", {
                    link: (children) => (
                        <a href="https://github.com/danrriv" className="font-bold hover:underline">{children}</a>
                    )
                })}
            </p>

        </footer>
    )
}