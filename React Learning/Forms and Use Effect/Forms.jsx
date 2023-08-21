import { useState } from "react";

function Forms(){
    const [name, setName] = useState('')
    console.log('Cuurent State',name);
    return (
        <>
        <label id="username">UserName : </label>
        <input type="text" id="username" onChange={(name)=> { setName(name.target.value)}}/>
        
        </>

    )
}

export default Forms;