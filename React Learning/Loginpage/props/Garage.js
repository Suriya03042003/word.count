import React from "react";
class Garage extends React.Component{
    render(){

    // const {brand} = props;
    // const {color} = props;
    // const text = `hi im a ${color} ${brand} car`;
    const {fruits} = this.props;
    const {name,colour} = fruits ;
    return(
        <h1>hi {name} im {colour} in colour</h1>
    )
    }
}

export default Garage;