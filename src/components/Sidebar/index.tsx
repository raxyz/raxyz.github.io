import { Alert, AlertLink, Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../configs/configs";
import { Song } from "../../model/songs";

interface SidebarProps {
    songs: Song[]
}

function Sidebar(props: SidebarProps) {
    const { songs } = props;
    return (
        <>
            <ListGroup as='ol'>
                {songs.map(s => (
                    <ListGroup.Item as='li' key={s.id}>
                        {s.iconUrl && <Image src={s.iconUrl} rounded width={24} className='me-2' />}
                        <Link to={APP_ROUTES.song(s.id)}>{s.title}</Link>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <Alert variant="dark">
                <a href="https://drive.google.com/drive/folders/192w7KsXFNSCDtt81MJ6yd5cGD7XmBJ1X?usp=drive_link" target="_blank">All minuses</a>
            </Alert>
        </>
    );
}

export default Sidebar;
