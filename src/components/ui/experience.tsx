import { useTranslations } from "next-intl";

//types
interface Role {
  position: string;
  period: string;
  responsibilities: string[];
}

interface ExperienceItem {
  company: string;
  website: string;
  roles: Role[];
}

export default function Experience() {
    const t = useTranslations('Experience');
    const experiences = t.raw('experiences') as ExperienceItem[];

    return (
        <section id="experience" className="py-20">
            <div className="mx-auto max-w-7xl px-1 sm:px-4">

                {/* Título */}
                <div className="flex items-center gap-3 mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                        <span className="flex items-center justify-center text-base w-8 h-8">■</span>
                        {t('title')}
                    </h2>
                    <div className="flex-1">
                        <hr className="border-gray-800 w-full" />
                    </div>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, idx) => (
                        <div key={idx}>

                            {/* Empresa */}
                            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-6">
                                <a
                                    href={exp.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    {exp.company}
                                </a>
                            </h3>

                            {/* Roles */}
                            <div className="relative sm:pl-6 space-y-5 sm:space-y-10">


                                {exp.roles.map((role, ridx) => (
                                    <div key={ridx} className="relative">


                                        <div className="rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">

                                            {/* Header del rol */}
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                                                <h4 className="text-lg font-semibold">
                                                    {role.position}
                                                </h4>
                                                <span className="text-sm text-muted-foreground">
                                                    {role.period}
                                                </span>
                                            </div>

                                            {/* Responsabilidades */}
                                            <ul className="space-y-3">
                                                {role.responsibilities.map((a, aidx) => (
                                                    <li
                                                        key={aidx}
                                                        className="text-sm text-foreground/70 flex gap-3"
                                                    >
                                                        <span className="text-primary">•</span>
                                                        <span>{a}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
