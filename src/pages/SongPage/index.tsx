import { useState } from "react";
import { Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import AudioPlayer from "../../components/AudioPlayer";
import { LyricsSection } from "../../components/LyricsSection";
import { SongExternalLinks } from "../../components/SongExternalLinks";
import { SongReponse } from "../../services/fetchSongs";

export const SongPage = () => {
    const { song, lyrics } = useLoaderData() as SongReponse;

    const [trackPosition, setTrackPosition] = useState<number | undefined>(undefined);

    const handleLyricClick = (position: number) => {
        setTrackPosition(position);
    };

    return (
        <>
            <div className="sticky-top bg-body pb-2">
                <div className="d-flex align-items-center">
                    <h3 className="flex-grow-1">{song.title}</h3>
                    <SongExternalLinks externalUrls={song.externalUrls} />
                </div>
                <AudioPlayer url={song.minusUrl} onPositionChange={trackPosition} />
            </div>
            <Row>
                <LyricsSection lyrics={lyrics} onLyricClick={handleLyricClick} />
            </Row>
        </>
    )
}
