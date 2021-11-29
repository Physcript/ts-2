
import Login from '../components/Login';
import { IRoutes } from '../interface/routes';
import HomePage from '../pages/HomePage';
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
    },
    {
        path: '/home',
        element: HomePage
    }
]

const routes: IRoutes[] = [ ...authRoute, ...mainRoute ]

export default routes
