import { useContext } from 'react';
import { Button } from 'react-bootstrap';

import AuthContext from '../context/authenticate/context';

export interface ILoginProps {}
const StartPage:React.FunctionComponent<ILoginProps> = (props) => {
    const authContext = useContext(AuthContext)
    const loginHandler = () => {
        const user = {
            firstName: 'asdasd',
            lastName: 'sdasd',
            email: 'asdsad@yahoo.com',
            verified: false
        }
        authContext.authDispatch({type: 'LOGIN', payload: user})
    }
    return (
        <div className = "d-flex justify-content-center">
            <div className='d-flex flex-column gap-1'>
                <label>Login</label>
                <input placeholder = "Email"/>
                <input placeholder = "Password" />
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
