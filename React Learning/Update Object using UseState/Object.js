import { useState } from "react";

function Object(){



    const [scooter, setScooter] = 
    useState ({
               Model : 'Rolls Royce',
               Color : 'Maroon',
               Type : 'Phantom',
               Year : '2022'                                           
               })
            
    function updateColor(){
        setScooter((previousvalue)=>{
            return {...previousvalue, Color:'Golden Yellow'}

        })
    }               
    
    return(
        <>
        <h1>My Car</h1>
        <p>Model : {scooter.Model}</p>
        <p>Color: {scooter.Color}</p>
        <p>Type : {scooter.Type}</p>
        <p>Year : {scooter.Year}</p>
        {/* <button onClick={()=> setScooter({Color:'Golden Yellow'})}>Change Color</button> */}
        <button onClick={updateColor}>Change Color</button>
        
    </>
    )
}

export default Object;