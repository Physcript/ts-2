
import { useContext, useEffect, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import Navigation from '../components/Navigation';
import AuthContext from '../context/authenticate/context';
import useAuth from '../hooks/useAuth';
import { IUserProps } from '../interface/authenticate/auth';

export interface IHomePageProps {}
const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {

    const Navi = useNavigate()
    const authContext = useContext(AuthContext)
    const [ user,setUser ] = useState<IUserProps | null >(authContext.authState.USER)

    const { response,error,loading,sendData } = useAuth({
        method: 'GET',
        headers: {
            accept: '*/*'
        },
        withCredentials: true
    })

    const logoutHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        document.cookie = 'token=;'
        authContext.authDispatch({type:'LOGOUT'})
        Navi('/')
    }

    useEffect(() => {
        if(response) {
            authContext.authDispatch({type:'AUTHENTICATE',payload: response.data.data })
            setUser(response.data.data)
        }
        if(error) {
            authContext.authDispatch({type:'LOGOUT'})
            Navi('/')
        }
    },[response])

    return (
       <Container>
           <Navigation> </Navigation>
           <div style = {{ height: '90vh' }} className = 'd-flex justify-content-center align-items-center'>
               <Col>
                    <div className = 'd-flex flex-column'>
                        <label>{ user?.firstName } { user?.lastName }</label>
                        <button
                            className = "w-50"
                            onClick = { logoutHandler }
                        >
                        Logout</button>
                    </div>
               </Col>
               <Col>

                </Col>
           </div>
       </Container>
    )
}

export default HomePage
