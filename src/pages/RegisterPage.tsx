import { Col, Container, Row } from 'react-bootstrap';

import Navigation from '../components/Navigation';
import Register from '../components/Register';

export interface RegisterPage {}

const RegisterPage = () => {
    return (
        <Container>
            <Navigation />
            <Row style = {{ height: '100vh' }} className = "align-items-center ">
                <Col className = 'col-12 col-lg-6'>
                    <h1>Welcome</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <a href = "#">Learn more..</a>
                </Col>
                <Col className = "">
                    <Register />
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage
