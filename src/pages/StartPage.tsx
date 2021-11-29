import { Button, Col, Container, Row } from 'react-bootstrap';

import Login from '../components/Login';
import Navigation from '../components/Navigation';

export interface IStartPageProps {}
const StartPage:React.FunctionComponent<IStartPageProps> = (props) => {
    return (
        <Container>
            <Navigation />
            <div className = "d-flex align-items-center"  style = {{ height: "90vh" }}>
                <Row className = "flex-column flex-lg-row">
                    <Col className = "">
                        <h1>Welcome</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href = "#">Learn more..</a>
                    </Col>
                    <Col className = "">
                        <Login />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default StartPage
