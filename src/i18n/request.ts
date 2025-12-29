import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. Obtener el locale solicitado (Next.js 15 requiere await)
  const requested = await requestLocale;

  // 2. Validar si existe, sino usar el default
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  // AQUÍ ESTÁ EL TRUCO: Importamos las partes por separado
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