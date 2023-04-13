import {BrowserRouter} from "react-router-dom"
//import Loader from "./components/loader/Loader";
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
//import {useAuthState} from "react-firebase-hooks/auth"

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
