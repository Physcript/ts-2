import { Button, Col, Container, Row } from 'react-bootstrap';

import Login from '../components/Login';

export interface IStartPageProps {}
const StartPage:React.FunctionComponent<IStartPageProps> = (props) => {
    return (
        <Container>
            <Row style = {{ height: '100vh' }} className = "align-items-center">
                <Col className = "">
                        <h1>Welcome</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <a href = "#">Learn more..</a>
                </Col>
                <Col>
                        <Login />
                </Col>
            </Row>
        </Container>
    )
}

export default StartPage
