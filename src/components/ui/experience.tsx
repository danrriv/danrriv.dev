export default function Experience() {
    const experiences = [
        {
            company: "Andean",
            website: "https://andean.travel",
            roles: [
                {
                    position: "Digital Transformation Assistant",
                    period: "May 2025 - Present",
                    achievements: [
                        "Developing and maintaining internal platforms using Angular and Spring Boot",
                        "Leading improvements in code quality, documentation, and architecture",
                        "Collaborating with cross-functional teams to automate internal workflows",
                    ],
                },
                {
                    position: "IT Intern",
                    period: "Nov 2024 - May 2025",
                    achievements: [
                        "Implemented new internal tools that improved operational efficiency",
                        "Optimized PostgreSQL queries and structures for better performance",
                        "Supported the development of backend modules and REST APIs",
                    ],
                },
            ],
        },
        {
            company: "Hard Discount (Mass)",
            website: "https://www.tiendasmass.com.pe",
            roles: [
                {
                    position: "Retail Cashier - Inventory",
                    period: "Sep 2023 - Jul 2024",
                    achievements: [
                        "Handled cashier operations with accuracy and customer service",
                        "Assisted with inventory reception, stock organization, and product labeling",
                        "Maintained store order and supported day-to-day operational tasks",
                    ],
                },
            ],
        },
    ];

    return (
        <section id="experience" className="py-20">
            <div className="mx-auto max-w-7xl px-1 sm:px-4">

                {/* Título */}
                <div className="flex items-center gap-3 mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3">
                        <span className="flex items-center justify-center text-base w-8 h-8">■</span>
                        Experience
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

                                            {/* Logros */}
                                            <ul className="space-y-2">
                                                {role.achievements.map((a, aidx) => (
                                                    <li
                                                        key={aidx}
                                                        className="text-sm text-foreground/70 flex gap-3"
                                                    >
                                                        <span className="text-primary mt-1">•</span>
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
