
import MainPage from "./components/Mainpage/MainPage"
import ContactPage from "./pages/contacts/contactPage"
import { ADMIN_ROUTE, BASKET_ROUTE, CONTACTS_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component:  <MainPage />
    },
    {
        path: SHOP_ROUTE,
        Component:  1
    },
    {
        path: CONTACTS_ROUTE,
        Component: <ContactPage />
    }
]

export const privateRoutes = [
    {
        path: ADMIN_ROUTE ,
        Component: 1
    },
    {
        path: BASKET_ROUTE ,
        Component: 1
    }
    
]