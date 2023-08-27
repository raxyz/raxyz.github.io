export const APP_ROUTES = {
    main: '/',
    songs: '/songs',
    song: (id?: number) => (id ? `/songs/${id}` : '/songs/:songId')
}

export const SONGS_URL = "/data/songs.json";