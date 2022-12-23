import React from "react";
import {Routes, Route, } from 'react-router-dom';
import { publicRoutes } from "../routes";
import List from "./List";



const AppRouter = (props) => {

 
    return (
       
        <Routes>
            {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={Component} />
            )}
            
            <Route path="*" element={<List />}/>
                
             
        </Routes>
    )
    }
            
        



export default AppRouter;