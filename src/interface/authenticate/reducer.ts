import { IUserProps } from './auth';

export interface IActionLogin {
    type: 'LOGIN',
    payload: IUserProps
    token: string
}

export interface IActionVerify {
    type: 'AUTHENTICATE',
    payload: IUserProps
}
export interface IActionLogout {
    type: 'LOGOUT'
}
export type TActionProps = IActionLogin | IActionLogout | IActionVerify
