import { useState } from 'react';
import { Button, FormLabel } from 'react-bootstrap';

import { IRegisterUserProps } from '../interface/form/user';

export interface IRegisterProps {}
const Register:React.FunctionComponent<IRegisterProps> = (props) => {

    const [ iReg,setIReg ] = useState<IRegisterUserProps>({

        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''

    })


    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name,value } = e.target
        setIReg( (val) => ({
            ...val,
            [name]: value
        }) )
    }

    return (
        <form>
            <div className = "w-50 d-flex flex-column gap-2 m-auto"   >
                <FormLabel>Register</FormLabel>
                <div className = "d-flex gap-2">
                    <input className = "form-control form-control-sm"
                        name = 'firstName'
                        value = { iReg.firstName }
                        placeholder = "Firstname"
                        onChange = { onChange }
                    />
                    <input className = "form-control form-control-sm"
                        name = 'lastName'
                        value = { iReg.lastName }
                        placeholder = "Lastname"
                        onChange = { onChange }
                    />
                </div>
                    <input className = "form-control form-control-sm"
                        name = 'email'
                        value = { iReg.email }
                        placeholder = "Email"
                        onChange = { onChange }
                    />
                    <input className = "form-control form-control-sm"
                        name = 'password'
                        value = { iReg.password }
                        placeholder = "Password"
                        onChange = { onChange }
                    />
                    <input className = "form-control form-control-sm"
                        name = 'confirmPassword'
                        value = { iReg.confirmPassword }
                        placeholder = "ConfirmPassword"
                        onChange = { onChange }
                    />
                    <Button className = "btn btn-primary btn-sm w-50">Register</Button>
            </div>
        </form>
    )
}

export default Register
