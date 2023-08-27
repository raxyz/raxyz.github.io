import { useParams, useLoaderData, NavLink } from "react-router-dom";
import { Song } from "../../model/songs";
import { Alert, Col, Image, Row } from "react-bootstrap";
import { APP_ROUTES } from "../../configs/configs";
import { useEffect, useState } from "react";

export const SongPage = () => {
    const songId: number = Number(useParams().songId);
    const songs = useLoaderData() as Song[];
    
    const [lyrics, setLyrics] = useState<String>();
    const getLyrics = async (url: string) => {
        if (!url) {
            return null;
        }
        const response = await fetch(url);
        setLyrics(await response.text());
    }

    const song = songs.find(s => s.id === songId);
    
    useEffect(() => {
        getLyrics(song ? song.textUrl: "")
    }, []);

    if (!song) {
        return (
            <Alert key='warning' variant='warning'>
                Song is not found.{' '}
                <NavLink to={APP_ROUTES.songs} className={'alert-link'}>Return to the list</NavLink>
            </Alert>
        );
    }

    return (
        <>
            <Row className="navbar fixed-top" style={{backgroundColor: 'white'}}>
                <Col sm={3} className='d-flex align-items-start '>
                    <Image src={song.iconUrl} rounded width={64} />
                    <div className='ms-2 me-auto'>
                        <h4>{song.title}</h4>
                    </div>
                </Col>
                <Col>
                    <audio preload='none' controls src={song.minusUrl} typeof='audio/mp3'/>
                </Col>
            </Row>
            <Row style={{marginTop: 80}}>
                <Col style={{whiteSpace: 'pre-line'}}>
                    {lyrics}
                </Col>
            </Row>
        </>
    )
}