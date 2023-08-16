import React from "react";

class Car extends React.Component{
           constructor() {
                super()
                this.state = {color:"Red" };
            }

    render() { 
        return <>
            <h1>Hello Im {this.state.color} colour</h1>
            <button onClick={()=> {this.setState({color:"Blue"})}}>Change Colour</button>
            </>
    }
}

export default Car;