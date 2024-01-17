import { useEffect, useRef } from "react";
import { Badge, Button } from "react-bootstrap";
import { ArrowLeftSquareFill, ExclamationTriangleFill } from "react-bootstrap-icons";

function AudioPlayer(props: AudioPlayerInput) {
    const { url, onPositionChange } = props;
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audioPlayer = audioRef.current;
        if (audioPlayer) {
            audioPlayer.volume = 0.1;
        }
    }, [url]);

    useEffect(() => {
        if (audioRef.current && onPositionChange != null) {
            audioRef.current.currentTime = onPositionChange;
        }
    }, [url, onPositionChange]);

    if (!url) {
        return (
            <Badge bg="secondary">
                <ExclamationTriangleFill className="me-2" />
                Song not found. Try to use x-minus
            </Badge>
        )
    }

    const updatePosition = (seconds: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = seconds;
        }
    }

    return (
        <div className="d-flex d-width-100">
            <Button variant="light" onClick={() => updatePosition(0)}><ArrowLeftSquareFill /></Button>
            <audio controls src={url} typeof='audio/mp3' className="flex-grow-1" ref={audioRef} key={url} />
        </div>
    );
}

interface AudioPlayerInput {
    url: string;
    onPositionChange?: number;
}

export default AudioPlayer;