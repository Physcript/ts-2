import { IUserProps } from './auth';

export interface IActionLogin {
    type: 'LOGIN',
    payload: IUserProps
}
export interface IActionLogout {
    type: 'LOGOUT'
}
export type TActionProps = IActionLogin | IActionLogout
