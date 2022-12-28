import {EDIT_ROUTE, NEW_ROUTE } from "./utils/consts"
import { MAIN_ROUTE} from "./utils/consts"
import List from "./Components/List"
import NewContact from "./Components/NewContact"
import Edit from "./Components/Edit"





export const publicRoutes = [
       {
        path: MAIN_ROUTE,
        Component: <List />
    },
    {
        path: NEW_ROUTE,
        Component: <NewContact /> 
    },
    {
        path: EDIT_ROUTE,
        Component: <Edit /> 
    },
    // {
    //     path: NEW_ROUTE + '/:name',
    //     Component: < /> 
    // }
]



