
import { getTopTracks } from "@/lib/server/spotify";
import { mapToTopTracks } from "@/lib/spotify-mapper";
import { getTranslations } from "next-intl/server";


export default async function About() {
    const raw = await getTopTracks();          // ← fetch en el servidor
    const tracks = mapToTopTracks(raw?.items ?? []);
    const t = await getTranslations('About');

    return (
        <section id="about" className="py-20 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-12 text-foreground">{t('title')}</h2>
                {/* CAMBIO: md:grid-cols-12 para control total */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                    {/* Bloque de Texto (OCUPA 7 de 12 = ~60%) */}
                    <div className="space-y-6 md:col-span-7">
                        <p className="text-base text-foreground/90 leading-relaxed">
                            {t('content')}
                        </p>
                        <p className="text-base text-foreground/90 leading-relaxed">
                            {t('content2')}
                        </p>
                        <p className="text-base text-foreground/90 leading-relaxed">
                            {t('content3')}
                        </p>
                        <p className="text-base text-foreground/90 leading-relaxed">
                            {t('content4')}
                        </p>
                    </div>
                    <div className="space-y-12 md:col-span-5">
                        {/* Bloque de Tecnologías */}
                        <div className="px-2 space-y-4">
                            <h3 className="text-sm tracking-wider">
                                Algunas de las tecnologías que uso:
                            </h3>

                            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                                {[
                                    "Angular", "Spring Boot", "PostgreSQL", "Astro",
                                    "Nextjs", "Tailwind CSS", "Jenkins", "Nginx"
                                ].map((tech) => (
                                    <div
                                        key={tech}
                                        className="group flex items-center gap-2 transition-all duration-200"
                                    >
                                        <span className="text-teal-500/60 font-mono text-sm group-hover:text-teal-400 transition-all">
                                            &raquo;
                                        </span>

                                        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                                            {tech}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Bloque de Música */}
                        <div className="py-6 rounded-2xl backdrop-blur-sm space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="font-bold text-xs flex items-center gap-2 uppercase tracking-[0.15em]">
                                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                                    Canciones que he estado escuchando
                                </h3>
                                <span className="text-[10px] text-muted-foreground/60 font-mono">Spotify</span>
                            </div>

                            <div className="grid gap-2">
                                {tracks.map((song) => (
                                    <a  
                                        key={song.rank}
                                        href={song.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-4 p-2 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/10"
                                    >
                                        {/* Album Cover con Overlay */}
                                        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg shadow-lg border border-white/5">
                                            <img
                                                src={song.albumImage || "/placeholder.svg"}
                                                alt={song.name}
                                                className="h-full w-full object-cover"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                                {/* Icono de Play Simple */}
                                                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-10 border-l-white border-b-[6px] border-b-transparent ml-1" />
                                            </div>
                                        </div>

                                        {/* Info de la canción */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-semibold truncate text-foreground/90 group-hover:text-teal-400 transition-colors">
                                                {song.name}
                                            </p>
                                            <p className="text-xs text-foreground/70 truncate font-medium">
                                                {song.artist}
                                            </p>
                                        </div>

                                        {/* Mini Ecualizador Visual (Solo se ve en hover) */}
                                        <div className="flex items-end gap-x-0.5 h-3 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-0.5 bg-teal-500/60 animate-[music_0.8s_ease-in-out_infinite] h-full" />
                                            <div className="w-0.5 bg-teal-500/60 animate-[music_1.1s_ease-in-out_infinite] h-2" />
                                            <div className="w-0.5 bg-teal-500/60 animate-[music_0.9s_ease-in-out_infinite] h-3" />
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
