"use client"

export default function About() {
    const facts = [
        { label: "Años de Experiencia", value: "5+" },
        { label: "Lenguaje Favorito", value: "Java" },
        { label: "Framework Favorito", value: "Angular + Spring" },
        { label: "Obsesión Actual", value: "Clean Code" },
    ]

    return (
        <section id="about" className="py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Sobre Mí</h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Párrafo conversacional */}
                    <div className="space-y-6">
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Hi! I'm Daniel, a software developer currently working in "Digital Transformation", where I build internal tools and provide technical support for users at Andean.
                        </p>

                        <p className="text-lg text-foreground/90 leading-relaxed">
                            I entered the tech world almost by accident, my initial plan was to study psychology, but I ended up surprising myself by genuinely enjoying the process of building applications from scratch, solving problems, and turning ideas into something real… even staying up late because of a bug.
                        </p>

                        <p className="text-lg text-foreground/90 leading-relaxed">
                            I'm especially interested in growing as a backend developer. I’m motivated by learning new things and taking on challenges that push my knowledge further. Every time I research something, I realize there’s an entire universe of topics to explore. It can be overwhelming, sure, but I think that’s the beauty of this career: it changes, evolves, and forces you to grow with it. It also teaches you patience… because, wow, you really need it.
                        </p>
                        <p className="text-lg text-foreground/90 leading-relaxed">
                            Outside of work, I’m a calm person — I think a lot, laugh easily, and enjoy those curious coincidences life likes to throw my way.
                        </p>
                    </div>

                    {/* Quick Facts */}
                    <div className="grid grid-cols-2 gap-4">
                        {facts.map((fact, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-300"
                            >
                                <p className="text-sm text-muted-foreground mb-2">{fact.label}</p>
                                <p className="text-2xl font-bold text-primary">{fact.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
