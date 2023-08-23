
import { useState } from 'react';
import './Forms.css';

function Forms(){
    const [inputs,setInputs] = useState({})
    function updateForm(e){
        e.preventDefault();
        console.log(inputs)
    }
    return(
    <>
     <div className="center"> 
      <h1>Login</h1>
      <form method="post">
        <div className="txt_field">
          <input type="text" required onChange={(e)=> {setInputs((pre)=> {return {...pre, name: e.target.value}})}}></input>
          <span></span>
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input type="password" required onChange={(e)=> {setInputs((pre)=> {return {...pre, password: e.target.value}})}}></input>
          <span></span>
          <label>Password</label>
        </div>
        <div className="txt_field">
          <input type="email" required onChange={(e)=> {setInputs((pre)=> {return {...pre, email: e.target.value}})}}></input>
          <span></span>
          <label>Email</label>
        </div>
        <button onClick={updateForm}>Submit Form</button>
      </form>
    </div>
    </>
    
    )

        
}

export default Forms;