export default function Hero() {
    return (
        <section className="flex-1 grid place-items-center">
            <div className="max-w-7xl px-6 sm:px-8 lg:px-14">
                <div className="grid sm:grid-cols-4 items-center">
                    <div className="col-span-3">
                        <h1 className="text-[clamp(2.5rem,5vw+1rem,4.5rem)] font-bold leading-tight mb-1 whitespace-nowrap">
                            Hi, I'm danrriv.
                        </h1>
                        <h2 className="text-base sm:text-xl text-gray-400 text-muted-foreground mb-6 sm:mb-8">Full-Stack Web Developer <span className="text-xs italic">(for now)</span></h2>
                        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                            I’m a full-stack developer who enjoys building clean, fast, and scalable web apps. I like turning ideas into simple, reliable solutions and improving a little with every project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
