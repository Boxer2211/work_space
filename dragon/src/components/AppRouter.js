import React, {useContext}  from "react";
import {Routes, Route, } from 'react-router-dom';
import { Context } from "../index";
import {privateRoutes, publicRoutes} from "../routes";
import {useAuthState} from "react-firebase-hooks/auth"
import Login from "./login/Login";
import Main from "./main/Main";


const AppRouter = (props) => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
       
    
   
    return (
        user ?
        (
        <Routes>
            {privateRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={Component} />
            )}
            
            <Route path="*" element={<Main />}/>
                
             
        </Routes>
        )
        :
        (
            <Routes>
               {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} />
               )}
               <Route path="*" element={<Login/>}/>  
               
            </Routes>
       )
    )
    }
            
        



export default AppRouter;