import '../App.css';


function Auth({auth, setAuth}) {
  return (
    <div className={auth ? "Auth" :"Auth__none"}>
      <div className="Auth__container">
        <p className='close' onClick={() => setAuth(false) }>Х</p>
        <p>E-mail</p>
        <input type="text" placeholder='E-mail'/>

        <p>Password</p>
        <input type="password" />

        <button>Sign in</button>
        
      </div>
    </div>
  );
}

export default Auth;
