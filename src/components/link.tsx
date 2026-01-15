import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
};

/**
 * Componenente de enlace personalizado que maneja enlaces internos y externos.
 * Aplica estilos específicos y abre enlaces externos en una nueva pestaña.
 */
export default function CustomLink({ href, children }: Props) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  const className =
    "text-teal-500 relative inline-block leading-tight " +
    "after:content-[''] after:absolute after:left-0 " +
    "after:bottom-0 after:h-px after:w-0 after:bg-teal-500 " +
    "after:transition-all after:duration-300 hover:after:w-full";

  if (isExternal) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
