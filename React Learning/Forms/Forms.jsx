
import { useState } from 'react';
import './Forms.css';

function Forms(){
    const [inputs,setInputs] = useState({phone:"+91 "}) 
    
      function handler(e){
      const name = e.target.name;
      const value = e.target.value;
      setInputs((previousState)=> { return {...previousState,[name]:value}})
    }
    

    function SubmitHandler(e){
      e.preventDefault();
      console.log(inputs);
    }


    return(
    <>
     <div className="center"> 
      <h1>Login</h1>
      <form method="post" onSubmit={SubmitHandler}>
        <div className="txt_field">
          <input type="text" name="name" required onChange={handler}></input>
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" name="password" required onChange={handler}></input>
          <span></span>
          <label>Password</label>
        </div>
        <div className="txt_field">
          <input type="email" name="email" required onChange={handler}></input>
          <span></span>
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input type="text" name="phone" required onChange={handler} value={inputs.phone}></input>
          <span></span>
          <label>Phone</label>
        </div>
        <input className="submit" type="submit" value="Submitform"></input>
      </form>
    </div>
    </>
    
    )

        
}

export default Forms;