import '../App.css';
import {useState} from 'react';
import Registration from './Registration';
import Auth from './Auth';

function NavBar() {
  
  const [registration, setRegistration] = useState(false);
  const [auth, setAuth] = useState(false);

console.log(registration);
console.log(auth);
  return (
    <div>
      <nav className="NavBar">
        <div>
          <button className="NavBar__button" onClick={() => {
            setAuth(false)
            setRegistration(!registration)
            }}>Registration</button>
          <button className="NavBar__button" onClick={() => {
            setAuth(!auth)
            setRegistration(false)
            }}>Authorization</button>
        </div>
      </nav>
      <Registration registration = {registration}
       setRegistration = {setRegistration}/>
      <Auth auth={auth}
      setAuth = {setAuth}/>
    </div>
  );
}

export default NavBar;
