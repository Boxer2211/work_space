import {BrowserRouter} from "react-router-dom"
//import Loader from "./components/loader/Loader";
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
//import {useAuthState} from "react-firebase-hooks/auth"

function App() {
  // const auth = 1
  // const [loading] = useAuthState(auth)

  // if(loading) {
  //   return (
  //     <BrowserRouter>
  //     <Navbar />
  //     <Loader />
  //     <AppRouter />
  //   </BrowserRouter> 
  //     )
  // }
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
