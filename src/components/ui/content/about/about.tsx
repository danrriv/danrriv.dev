import { getTopTracks, getRecentlyPlayed } from "@/lib/server/spotify";
import { mapToTopTracks, mapToRecentTracks } from "@/lib/spotify-mapper";
import { getTranslations } from "next-intl/server";
import AboutContent from "./about-content";
import SpotifyWidget from "./spotify-widget";

export default async function About() {
    const top = await getTopTracks();
    const topTracks = mapToTopTracks(top?.items ?? []);
    const recent = await getRecentlyPlayed();
    const recentTracks = mapToRecentTracks(recent?.items ?? []);

    const t = await getTranslations('About');
    const n = await getTranslations('NavSticky');

    const techs = ["Angular", "Spring Boot", "PostgreSQL", "Astro", "Nextjs", "Tailwind CSS", "Jenkins", "Nginx"];

    return (
        <section id={n('display.about')} className="py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <AboutContent 
                    techList={techs}
                    techLabel={t('tech')}
                    title={<>{<span className="text-teal-500 text-lg font-mono">03.</span>} {t('title')}</>}
                    spotifyWidget={
                        <SpotifyWidget 
                            topTracksLabel={t('topLabel')} 
                            recentTracksLabel={t('recentLabel')} 
                            top={topTracks} 
                            recent={recentTracks} 
                        />
                    }
                >
                    <p>{t.rich('content', { bold: (chunks) => <span className="text-teal-500">{chunks}</span> })}</p>
                    <p>{t.rich('content2', { bold: (chunks) => <span className="text-teal-500">{chunks}</span> })}</p>
                    <p>{t.rich('content3', { bold: (chunks) => <span className="text-teal-500">{chunks}</span> })}</p>
                    <p>{t.rich('content4', { bold: (chunks) => <span className="text-teal-500">{chunks}</span> })}</p>
                </AboutContent>
            </div>
        </section>
    )
}