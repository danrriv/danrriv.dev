export interface TopTrack {
  rank: number;                // 1, 2, 3 …
  name: string;                // nombre de la canción
  artist: string;              // nombre del artista (único o join)
  albumImage: string;
  url: string;                 // url de la canción en Spotify
}