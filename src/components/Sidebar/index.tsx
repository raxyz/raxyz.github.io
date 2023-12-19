import { Image, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../configs/configs";
import { Song } from "../../model/songs";

interface SidebarProps {
    songs: Song[]
}

function Sidebar(props: SidebarProps) {
    const { songs } = props;
    return (
        <ListGroup as='ol'>
            {songs.map(s => (
                <ListGroup.Item as='li' key={s.id}>
                    {s.iconUrl && <Image src={s.iconUrl} rounded width={24} className='me-2' />}
                    <Link to={APP_ROUTES.song(s.id)}>{s.title}</Link>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default Sidebar;
