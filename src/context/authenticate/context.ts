

import { createContext } from 'react';

import { IAuthContextProps } from '../../interface/authenticate/auth';
import { InitailUserState } from '../initialState/auth';

const AuthContext = createContext<IAuthContextProps>({
    authState: InitailUserState,
    authDispatch: () => {}
})

export const AuthContextProvider = AuthContext.Provider
export const AuthContextConsumer = AuthContext.Consumer
export default AuthContext
