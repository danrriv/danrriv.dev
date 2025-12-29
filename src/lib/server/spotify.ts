// Variables en memoria (caché del lado del servidor)
let cachedToken: string | null = null;
let tokenExpiry = 0;

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=3`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=3`;

const getAccessToken = async () => {
    const now = Date.now();

    // 1. Verificar si tenemos un token válido en caché (con margen de 1 minuto)
    if (cachedToken && now < (tokenExpiry - 60000)) {
        return { access_token: cachedToken };
    }

    // 2. Si no hay token o expiró, pedir uno nuevo (como hiciste en Postman)
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            // Basic Auth: Postman lo hace automático, aquí lo hacemos manual
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
    // data.expires_in suele ser 3600 (1 hora)
    tokenExpiry = now + (data.expires_in * 1000);

    return { access_token: cachedToken };
};

async function callSpotify(url: string) {
    const { access_token } = await getAccessToken();
    if (!access_token) return null;
    const res = await fetch(url, {
        headers: { Authorization: `Bearer ${access_token}` },
    });
    if (!res.ok) return null;          // o lanza error si prefieres
    if (res.status === 204) return null; // nada en reproducción
    return res.json();
}

// Función para exportar y usar en tus API Routes
export const getNowPlaying = async () => {
    return callSpotify(NOW_PLAYING_ENDPOINT);
};

// Te recomiendo esta también por si no estás escuchando nada en vivo
export const getRecentlyPlayed = async () => {
    return callSpotify(RECENTLY_PLAYED_ENDPOINT);
};

export const getTopTracks = async () => {
    return callSpotify(TOP_TRACKS_ENDPOINT);
};