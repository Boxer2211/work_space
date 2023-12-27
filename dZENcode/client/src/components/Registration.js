import '../App.css';


function Registration({registration, setRegistration}) {
  
 
  return (
    <div className={registration ? "Registration" : "Registration__none"}>
      <div className="Registration__container">
        <p className='close' onClick={() => setRegistration(false) }>Х</p>
        <p>Name</p>
        <input type="text" placeholder='Name'/>
        <p>E-mail</p>
        <input type="text" placeholder='E-mail'/>
        <p>Home page (not necessary)</p>
        <input type="text" placeholder='Home page'/>
        <p>Password</p>
        <input type="password" />
        <p>Repeat password</p>
        <input type="password" />
        <button>Registration</button>
        
      </div>
    </div>
  );
}

export default Registration;
