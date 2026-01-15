"use client";
import { SpotifyTrack } from "@/lib/types/spotify";
import { useState } from "react";

interface SpotifyWidgetProps {
    topTracksLabel?: string;
    recentTracksLabel?: string;
    top: SpotifyTrack[];
    recent: SpotifyTrack[];
}

/**
 * Widget de Spotify que muestra las canciones más escuchadas y las recientes.
 */
export default function SpotifyWidget({ topTracksLabel, recentTracksLabel, top, recent }: SpotifyWidgetProps) {

    const [view, setView] = useState("top");
    const currentTracks = view === "top" ? top : recent;

    return (
        <div className="py-6 rounded-2xl backdrop-blur-sm space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="font-bold text-xs flex items-center gap-2 uppercase tracking-[0.15em]">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                    {view === "top" ? (topTracksLabel) : (recentTracksLabel)}
                </h3>
                {/* Flechas de Navegación */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setView(view === "top" ? "recent" : "top")}
                        className=" p-1 transition-colors"
                        aria-label="Change view"
                    >
                        <div className="flex items-center gap-2">
                            {/* Flecha Izquierda */}
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`h-3 w-3 transition-all duration-300 opacity-40 hover:text-teal-500 hover:opacity-100 hover:cursor-pointer`}
                            >
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>

                            {/* Flecha Derecha */}
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={`h-3 w-3 transition-all duration-300 opacity-40 hover:text-teal-500 hover:opacity-100 hover:cursor-pointer`}
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

            <div className="grid gap-2">
                {currentTracks.map((song) => (
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
    )
}