import { useState } from "react";

function Scooter(){

        const[color , setColor] = useState('red');
        const[Brand, setBrand] = useState('Honda');
    return <>
    <h1>My Scooter</h1>
    <p>Color : {color}</p>
    <p>Brand : {Brand}</p>
    <p>Model : Activa 6G</p>
    <p>Year : 2023</p>
    <button onClick={()=> setColor('Green')}>Change Color</button><br></br>
    <button onClick={()=> setBrand('Audi')}>Change Brand</button>
    </>
}

export default Scooter;