import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { Song } from '../../model/songs';

export const SongsPage = () => {
    const songs = useLoaderData() as Song[];

    return (
        <Container>
            <Row>
                <Col md={3} className='vh-100 sticky-top overflow-y-auto'>
                    <Sidebar songs={songs} />
                </Col>
                <Col>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}
