import { useState } from "react";
function State(){
    //const colour = "red"
    const [colour, setColour] = useState('red');


    return (
        <>
        <h1>Hello Im {colour} colour</h1>
        <button onClick={() => {setColour('blue')}}>Change Colour</button>
        </>
    )
}

export default State;