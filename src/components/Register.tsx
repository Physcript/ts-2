import axios from 'axios';
import { useState } from 'react';
import { Button, FormLabel } from 'react-bootstrap';

import { IRegisterUserProps } from '../interface/form/user';

export interface IRegisterProps {}
const Register:React.FunctionComponent<IRegisterProps> = (props) => {

    const [ loading,setLoading ] = useState(false)
    const [ success,setSuccess ] = useState('')
    const [ error,setError ] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

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

    const regiterHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        setLoading(true)

        axios.request({
            url:'http://localhost:1337/api/register',
            method: 'POST',
            data: {
                firstName: iReg.firstName,
                lastName: iReg.lastName,
                email: iReg.email,
                password: iReg.password,
                confirmPassword: iReg.confirmPassword
            }
        }).then((res) => {
            setLoading(false)
            setIReg({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

            setError({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
            setSuccess('Account Created ✔️')
        }).catch((err) => {
            setLoading(false)
            setSuccess('')
            setError(err.response.data.error)

        })
    }

    return (
        <form>
            { loading ? (
                <div className = " d-flex flex-column gap-2  align-items-center ">
                    <div className = "spinner-border d-flex align-items-center">
                        <span className = "sr-only"></span>
                    </div>
                </div>
            ) : (
                <div>
                    <div className = "w-50 d-flex flex-column gap-2 m-auto">

                    <label className = "text-success">{ success }</label>

                        <label className = "text-danger">{ error?.firstName }</label>
                    <label className = "text-danger">{ error?.lastName }</label>
                    <label className = "text-danger">{ error?.email }</label>
                    <label className = "text-danger">{ error?.password }</label>
                    <label className = "text-danger">{ error?.confirmPassword }</label>

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
                    <Button className = "btn btn-primary btn-sm w-50"
                        onClick = { regiterHandler }
                    >Register</Button>
            </div>
                </div>
            ) }
        </form>
    )
}

export default Register
