import {DRAGON_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE } from "./utils/consts"
import Login from "./components/login/Login"
import { MAIN_ROUTE} from "./utils/consts"
import Main from "./components/main/Main"
import Dragon from "./components/dragon/dragon"
import Profile from "./components/profile/Profile"




export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Login /> 
    }
]

export const privateRoutes = [
    {
        path: MAIN_ROUTE,
        Component: <Main /> 
    },
    {
        path: DRAGON_ROUTE + '/:name',
        Component: <Dragon />  
    },
    {
        path: PROFILE_ROUTE,
        Component: <Profile />  
    }
    
]

