// Guardar token en memoria (caché simple del lado del servidor)
let cachedToken: string | null = null;
let tokenExpiry = 0;

/* Variables de entorno */
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

/* Endpoints de Spotify */
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=3`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=3`;



const getAccessToken = async () => {
    const now = Date.now();

    // 1. Verificar si tenemos un token válido en caché
    if (cachedToken && now < (tokenExpiry - 60000)) {
        return { access_token: cachedToken };
    }

    // 2. Si no hay token o expiró, pedir uno nuevo
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            /* IMPORTANTE: https://developer.spotify.com/documentation/web-api/tutorials/refreshing-tokens 
            Sino colocas Basic Authentication con el client id y secret, no te dará token, revisar la documentación, ejemplo de nodeJS.
            */
            Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            ...(refresh_token ? { refresh_token: refresh_token } : {}),
        }),
    });

    const data = await response.json();

    // 3. Guardar en caché antes de retornar
    cachedToken = data.access_token;
    // data.expires_in suele ser 3600
    tokenExpiry = now + (data.expires_in * 1000);

    return { access_token: cachedToken };
};

// Función genérica para llamar a la API de Spotify
async function callSpotify(url: string) {
    const { access_token } = await getAccessToken();
    if (!access_token) return null;
    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${access_token}` },
    });
    if (!res.ok) return null; // o lanzas un error, yo lo dejé en null para hacerlo simple
    if (res.status === 204) return null;
    return res.json();
}

/* Funciones específicas para cada endpoint */

/* https://developer.spotify.com/documentation/web-api/reference/get-recently-played */
export const getRecentlyPlayed = async () => {
    return callSpotify(RECENTLY_PLAYED_ENDPOINT);
};


/* https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks */
export const getTopTracks = async () => {
    return callSpotify(TOP_TRACKS_ENDPOINT);
};

/* No lo usé al final, pero puedes usarlo si gustas, obtiene lo que escuchas en el momento, puede ser null sino escuchas nada en ese momento */
/* https://developer.spotify.com/documentation/web-api/reference/get-the-users-currently-playing-track */
export const getNowPlaying = async () => {
    return callSpotify(NOW_PLAYING_ENDPOINT);
};

