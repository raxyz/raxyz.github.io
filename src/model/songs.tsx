export interface Songs {
    songs: Song[]
}

export interface Song {
    id: number;
    title: string;
    minusUrl: string;
    originalUrl: string;
    textUrl: string;
    iconUrl: string;
    xminusUrl: string;
}