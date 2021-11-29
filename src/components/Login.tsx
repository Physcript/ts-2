import axios from 'axios';
import { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../context/authenticate/context';

export interface ILoginProps {}
const StartPage:React.FunctionComponent<ILoginProps> = (props) => {
    const Navi = useNavigate()
    const authContext = useContext(AuthContext)
    const [ loginError,setLoginError ] = useState('')
    const [ loginData,setLoginData ] = useState({
        email: '',
        password: '',
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name,value } = e.target
        setLoginData( (val) => ({
            ...val,
            [name]:value
        }))
    }

    const loginHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        axios.request({
            url: "http://localhost:1337/api/login",
            method: 'POST',
            data: {
                email: loginData.email,
                password: loginData.password
            }
        })
        .then((res) => {
            setLoginError('')
            document.cookie = `token=${res.data.data.token} `
            authContext.authDispatch({ type: 'LOGIN', payload: res.data.data.user, token: res.data.data.token })
            Navi('/home')
        })
        .catch((error) => {
            setLoginError(error.response.data.error)
            setLoginData((val) => ({
                ...val,
                password: ''
            }))
        })
    }
    return (
        <div className = "d-flex justify-content-center">
            <div className='d-flex flex-column gap-1'>
                <label className = "text-danger">{ loginError }</label>
                <label>Login</label>
                <input placeholder = "Email"
                    name = "email"
                    value = { loginData.email }
                    onChange = { onChange }
                />
                <input placeholder = "Password"
                    type = 'password'
                    name = 'password'
                    value = { loginData.password }
                    onChange = { onChange }
                />
                <Button
                    className = "btn-sm" style = {{ width: '50%' }}
                    onClick = { loginHandler }
                >Login</Button>
                <a href = "#">Forgot Password</a>
                <a href = "#">Register new account</a>
            </div>
        </div>
    )
}

export default StartPage
