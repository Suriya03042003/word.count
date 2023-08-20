import { useState } from "react";

function List(){

const [list, setList] = useState([]);
const [count, setCount] = useState(1)

function additem(){
    const setitem = 'item' + count;
     setList((previousstate) => {return [...previousstate,setitem]})
     setCount((previousstate)=> previousstate+1)
}
return (
    <>
     <button onClick={additem}>Add Item</button>
     {list.map((elements,index)=> <h1 key={index}>{elements }</h1>)}
    </>
)
}

export default List;