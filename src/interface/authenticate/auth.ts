import { TActionProps } from './reducer';

export interface IUserProps {
    firstName: string
    lastName: string
    email: string
    verified: boolean
}

export interface IAuthState {
    USER: IUserProps | null
    AUTH: boolean
    TOKEN: string | null
}


export interface IAuthContextProps {
    authState: IAuthState
    authDispatch: React.Dispatch<TActionProps>
}
