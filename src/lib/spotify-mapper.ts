import { SpotifyTrack } from "./types/spotify";

/**
 * Funciones para mapear datos de la API de Spotify
 * Hay ligeras diferencias entre ambos endpoints, por eso dos funciones
 * No nos interesa toda la data, solo lo esencial para el widget
 */

export function mapToTopTracks(items: any[]): SpotifyTrack[] {
  // Validamos que items sea un array para evitar errores de ejecución
  if (!Array.isArray(items)) return [];

  return items.map((it, idx) => {
    // Buscamos la imagen ideal (300px), si no, la siguiente disponible
    const image = it.album.images.find((img: any) => img.height === 300) || it.album.images[0];

    return {
      rank: idx + 1,
      name: it.name,
      artist: it.artists.map((a: any) => a.name).join(', '),
      albumImage: image?.url ?? '',
      url: it.external_urls?.spotify ?? '#'
    };
  });
}

export function mapToRecentTracks(items: any[]): SpotifyTrack[] {
  if (!Array.isArray(items)) return [];

  return items.map((it, idx) => {
    const image = it.track.album.images.find((img: any) => img.height === 300) || it.track.album.images[0];

    return {
      rank: idx + 1,
      name: it.track.name,
      artist: it.track.artists.map((a: any) => a.name).join(', '),
      albumImage: image?.url ?? '',
      url: it.track.external_urls?.spotify ?? '#'
    };
  });
}