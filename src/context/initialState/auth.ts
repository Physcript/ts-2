import { IAuthState, IUserProps } from '../../interface/authenticate/auth';

export const InitailUserState: IAuthState = {
    USER: null,
    AUTH: false,
    TOKEN: document.cookie.split('=')[1] || null
}
