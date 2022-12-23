import {NEW_ROUTE } from "./utils/consts"
import { MAIN_ROUTE} from "./utils/consts"
import List from "./Components/List"
import NewContact from "./Components/NewContact"





export const publicRoutes = [
       {
        path: MAIN_ROUTE,
        Component: <List />
    },
    {
        path: NEW_ROUTE,
        Component: <NewContact /> 
    },
    // {
    //     path: NEW_ROUTE + '/:name',
    //     Component: < /> 
    // }
]



