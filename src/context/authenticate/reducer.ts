import { IAuthState } from '../../interface/authenticate/auth';
import { TActionProps } from '../../interface/authenticate/reducer';
import { InitailUserState } from '../initialState/auth';

const reducer = (state: IAuthState ,action: TActionProps): IAuthState => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                USER: action.payload,
                AUTH: true,
                TOKEN: action.token
            }
        case 'AUTHENTICATE': {
            return {
                ...state,
                USER: action.payload,
                AUTH: true
            }
        }
        case 'LOGOUT':
            return {
                ...state,
                USER: null,
                AUTH: false,
                TOKEN: null
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer
