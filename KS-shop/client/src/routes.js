import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, THING_ROUTE } from "./utils/consts"

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component:  
    },
    {
        path: SHOP_ROUTE,
        Component:  
    },
    {
        path: THING_ROUTE + '/:id',
        Component:  
    }

]

export const privateRoutes = [
    {
        path: ADMIN_ROUTE ,
        Component: 
    },
    {
        path: BASKET_ROUTE ,
        Component: 
    }
    
]