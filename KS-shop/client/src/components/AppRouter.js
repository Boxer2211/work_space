
import {Routes, Route} from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../routes';

import MainPage from './Mainpage/MainPage';

function AppRouter() {
  
  const user = false

  return (

    user ? 
    (
      <Routes>
        {privateRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={Component} />
        )}
        <Route path="*" element={<MainPage />}/>  
        
      </Routes>
    )
    :
    (
      <Routes>
        {publicRoutes.map(({path, Component}) =>
        <Route key={path} path={path} element={Component} />
        )}
        <Route path="*" element={<MainPage />}/>  
        
      </Routes>
    )
  );
}

export default AppRouter;
