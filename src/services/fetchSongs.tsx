import { SONGS_URL } from "../configs/configs"

export const fetchSongs = () => {
    return fetch(SONGS_URL);
}
