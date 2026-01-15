import { defineRouting } from 'next-intl/routing';

/**
 * https://next-intl.dev/docs/routing/setup#i18n-routing
 * 
 */
export const routing = defineRouting({
    // Lista de los idiomas soportados
    locales: ['es', 'en'],

    // Idioma por defecto
    defaultLocale: 'es',
    /**
     * Configuración de las rutas de los idiomas (saldrá como prefijo cualquiera que no sea el default en la URL)
     *  https://next-intl.dev/docs/routing/configuration#locale-prefix-as-needed
     */
    localePrefix: 'as-needed',
    
    // Desactivar la detección automática del idioma del navegador
    localeDetection: false
});