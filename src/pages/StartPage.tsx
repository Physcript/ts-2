import axios from 'axios';
import { useContext, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Login from '../components/Login';
import Navigation from '../components/Navigation';
import AuthContext from '../context/authenticate/context';

export interface IStartPageProps {}
const StartPage:React.FunctionComponent<IStartPageProps> = (props) => {

    const authContext = useContext(AuthContext)
    const Navi = useNavigate()
    const [ loading,setLoading ] = useState(false)

    const verifyToken = () => {
        axios.get('http://localhost:1337/api/verify',
            {withCredentials: true}
        ).then((res) => {
            setLoading(true)
            authContext.authDispatch({type:'AUTHENTICATE',payload: res.data.data})
            Navi('/home')
        })
        .catch((err) => {
            document.cookie = 'token=;'
            setLoading(true)
        })
    }

    return (
        <Container>
            { !loading ? (
                <div className = "d-flex align-items-center"  style = {{ height: "100vh", width: '100%' }}>
                    <div className = "spinner-border m-auto">
                        <span className = "sr-only"></span>
                        { verifyToken() }
                    </div>
                </div>
            ) : (
                <div>
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
                </div>
            )}

        </Container>
    )
}

export default StartPage
