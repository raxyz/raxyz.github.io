import { Outlet } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from "./components/Sidebar";

function Layout() {
    return (
        <Container>
            <Row>
                <Col xs={3}>
                    List of songs (clickable)
                    {/* <Sidebar /> */}
                </Col>
                <Col>
                    <Outlet></Outlet>
                </Col>
            </Row>
            <footer>
                <a target='_blank' rel='noopener noreferrer' href="https://raxyz.github.io/minus.html">Old version</a>
            </footer>
        </Container>
    );
}

export default Layout;
