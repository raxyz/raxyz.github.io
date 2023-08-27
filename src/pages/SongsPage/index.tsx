import { useLoaderData } from 'react-router'
import { Song } from '../../model/songs';
import { Image, ListGroup } from 'react-bootstrap';
import { APP_ROUTES } from '../../configs/configs';
import { NavLink } from 'react-router-dom';
import { Youtube as YoutubeIcon, ArrowRightSquareFill, MusicNoteBeamed } from 'react-bootstrap-icons';

export const SongsPage = () => {
    const songs = useLoaderData() as Song[];

    return (
        <ListGroup as='ol'>
            {songs.map(s => (
                <ListGroup.Item as='li' className='d-flex justify-content-between align-items-start' key={s.id}>
                    <Image src={s.iconUrl} rounded width={64} />
                    <div className='ms-2 me-auto'>
                        <div className='fw-bold'>{s.title}</div>

                        {s.originalUrl ? <h3><a href={s.originalUrl} target='_blank' rel='noopener noreferrer'><YoutubeIcon/></a></h3>: ''}
                    </div>
                    {s.xminusUrl ? <h1><a href={s.xminusUrl} target='_blank' rel='noopener noreferrer'><MusicNoteBeamed/></a></h1>: ''}
                    {s.xminusUrl ? '' : <h1><NavLink to={APP_ROUTES.song(s.id)}><ArrowRightSquareFill/></NavLink></h1> }
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}
