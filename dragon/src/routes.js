import {DRAGON_ROUTE, LOGIN_ROUTE } from "./utils/consts"
import Login from "./components/login/Login"
import { MAIN_ROUTE} from "./utils/consts"
import Main from "./components/main/Main"
import Dragon from "./components/dragon/dragon"




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
    }
   
    
]

