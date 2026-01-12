'use client';
import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

/**
 * 
 * Solo soporta EN/ES, alterna entre ambos
 */
export default function SwitchLang() {
    const locale = useLocale();
    const pathname = usePathname();
    return (
        <Link
            href={pathname}
            locale={locale === 'es' ? 'en' : 'es'}
            className="text-[10px] font-bold tracking-widest text-gray-400 hover:text-teal-500 transition-colors uppercase"
        >
            {locale === 'es' ? 'EN' : 'ES'}
        </Link>
    );
}