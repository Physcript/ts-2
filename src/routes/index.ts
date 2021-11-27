
import Login from '../components/Login';
import { IRoutes } from '../interface/routes';
import RegisterPage from '../pages/RegisterPage';
import StartPage from '../pages/StartPage';

const authRoute: IRoutes[]= [
    {
        path: '/login',
        element: Login
    },
    {
        path: '/register',
        element: RegisterPage
    }
]

const mainRoute: IRoutes[] = [
    {
        path: '/',
        element: StartPage
    }
]

const routes: IRoutes[] = [ ...authRoute, ...mainRoute ]

export default routes
