export interface Songs {
    songs: Song[]
}

export interface Song {
    id: number;
    title: string;
    minusUrl: string;
    lyricsUrl: string;
    iconUrl: string;
    externalUrls: ExternalUrl[];
}

export interface ExternalUrl {
    source: string;
    icon: string;
    url: string;
    color: string;
}
