import React from "react";
function Garage(props){

    // const {brand} = props;
    // const {color} = props;
    // const text = `hi im a ${color} ${brand} car`;
    const {fruits} = props;
    const {name,colour} = fruits;
    
    return(
        
       <h1>Hello, Im {name} and {colour}</h1>
    )
}

export default Garage;