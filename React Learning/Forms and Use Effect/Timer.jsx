import { useEffect, useState } from "react";

function Timer(){
    
   const [count,setCount] =  useState(0)
   useEffect(()=>{
    setTimeout(()=>{
        setCount((old)=>{return old+1})
    },500)
   })
    
   // function updateCount(){
        //setCount((old)=> {return old + 1})
        // if(count >= 10)
        // {
        //     setCount(1)
        // }
    //}

   


    
    return (
        <>
        <h1>Hello I have refreshed {count} times</h1>
       {  <button>Click Here</button> }
        </>
    )
}

export default Timer;