import { Params } from "react-router-dom";
import { SONGS_URL } from "../configs/configs";
import { Song } from "../model/songs";

export const fetchSongs = async () => {
    const songs = await fetch(SONGS_URL);
    return songs;
}

export const fetchSong = async ({ params }: { params: Params<"songId"> }) => {
    const songId = Number(params.songId);
    const song = await fetch(SONGS_URL)
        .then(response => {
            if (!response.ok) {
                console.error(response);
                throw new Error(response.statusText)
            }
            return response.json() as Promise<Song[]>
        })
        .then(songs => {
            return songs.find(s => s.id === songId)
        });

    if (song) {
        const lyrics = await fetchLyrics(song.lyricsUrl);
        return { song, lyrics } as SongReponse;
    }

    return { song };
}

const fetchLyrics = async (url: string) => {
    if (!url) {
        return null;
    }

    const lyrics = await fetch(url)
        .then(response => {
            if (!response.ok) {
                console.error(response);
                throw new Error(response.statusText)
            }
            return response.text() as Promise<string>
        })
        .catch(() => "")

    return lyrics && convertToLyrics(lyrics);
}

export interface SongReponse {
    song: Song;
    lyrics: Lyrics;
}

export interface Lyrics {
    rows: LyricRow[];
}

export interface LyricRow {
    position: number;
    text: string;
}

export const convertToLyrics = (text: string) => {
    const rows = text.split('\n').map(line => {
        if (line.trim() === '') {
            return { text: null };
        }

        const parts = line.split(' ');
        const firstPart = parts.shift() || '';
        let position = null;
        let text: string | null = '';

        if (!isNaN(parseInt(firstPart, 10))) {
            position = parseInt(firstPart, 10);
            text = parts.join(' ');
        } else {
            text = firstPart + ' ' + parts.join(' ');
        }

        return { position, text };
    });

    return { rows };
}