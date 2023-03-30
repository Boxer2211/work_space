
import {Routes, Route} from 'react-router-dom';
import { publicRoutes } from '../routes';

import MainPage from './Mainpage/MainPage';

function AppRouter() {
  return (
    <Routes>
    {publicRoutes.map(({path, Component}) =>
     <Route key={path} path={path} element={Component} />
    )}
    <Route path="*" element={<MainPage />}/>  
    
 </Routes>
  );
}

export default AppRouter;
