import Garage from './Garage'

function Car(){
    const isdooropen = false;
    const fruits = {name:"apple",colour:"red"}
    //const fruits = {};
    const showInfo = (fruits.name !== undefined && fruits.colour !== undefined);
   
    return(
           <div> 
            <h1>hello</h1>
             {showInfo ?<Garage fruits={fruits}/> : null }
             {isdooropen ? <h1>door is opened</h1> : <h1>door is closed</h1>}
            </div>
    )
}
    

export default Car;