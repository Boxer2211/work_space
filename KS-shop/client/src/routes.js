
import MainPage from "./components/Mainpage/MainPage"
import Card from "./pages/card/card"
import Condition from "./pages/condition/condition"
import ContactPage from "./pages/contacts/contactPage"
import Delivery from "./pages/delivery/delivery"
import Shop from "./pages/shop/shop"
import {CARD_ROUTE, CONDITION_ROUTE, CONTACTS_ROUTE, DELIVERY_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component:  <MainPage />
    },
    {
        path: SHOP_ROUTE +'/:name',
        Component:  <Shop />
    },
    {
        path: DELIVERY_ROUTE,
        Component:  <Delivery />
    },
    {
        path: CONDITION_ROUTE,
        Component:  <Condition />
    },
    {
        path: CARD_ROUTE + '/:id',
        Component:  <Card/>
    },
    {
        path: CONTACTS_ROUTE,
        Component: <ContactPage />
    }
]

export const privateRoutes = [
    {
        path: MAIN_ROUTE,
        Component:  <MainPage />
    },
    {
        path: SHOP_ROUTE,
        Component:  <Shop />
    },
    {
        path: DELIVERY_ROUTE,
        Component:  <Delivery />
    },
    {
        path: CONDITION_ROUTE,
        Component:  <Condition />
    },
    {
        path: CARD_ROUTE + '/:id',
        Component:  <Card/>
    },
    {
        path: CONTACTS_ROUTE,
        Component: <ContactPage />
    }
    
]