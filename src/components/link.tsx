import Link from 'next/link';

/**
 * 
 * 
 */
export default function CustomLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith('http');

  return (
<Link
  href={href}
  className="text-teal-500 relative inline-block leading-tight 
             after:content-[''] after:absolute after:left-0
             after:bottom-0 after:h-px after:w-0 after:bg-teal-500
             after:transition-all after:duration-300
             hover:after:w-full"
  target={isExternal ? '_blank' : '_self'}
  rel={isExternal ? 'noopener noreferrer' : undefined}
>
  {children}
</Link>
  );
}