import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

/**
 * https://next-intl.dev/docs/routing/setup#i18n-request
 */
export default getRequestConfig(async ({ requestLocale }) => {
  // 1. Obtener el locale solicitado
  const requested = await requestLocale;

  // 2. Validar si existe, sino usar el default
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  /**
   * Para usar múltiples archivos de mensajes, los importamos y combinamos aquí.
   * Puedes agregar tantos como quieras, solo asegúrate de combinarlos en el objeto final.
   * Esto fue para mantener el código organizado, ya que un solo archivo grande puede ser difícil de manejar.
   */
  const commonMessages = (await import(`../../messages/${locale}/common.json`)).default;
  const experienceMessages = (await import(`../../messages/${locale}/experience.json`)).default;
  const aboutMessages = (await import(`../../messages/${locale}/about.json`)).default;
  const projectsMessages = (await import(`../../messages/${locale}/projects.json`)).default;
  // Puedes agregar cuantos quieras...

  return {
    locale,
    messages: {
      ...commonMessages,
      ...experienceMessages,
      ...aboutMessages,
      ...projectsMessages,  
    }
  };
});