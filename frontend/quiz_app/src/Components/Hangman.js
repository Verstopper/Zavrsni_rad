import React from "react";

class Hangman extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hellomess: "HEJ OVO JE PROBA",
        }
    };


    componentWillMount() {
        const add = " ZA REACT"
        this.state.hellomess += add;
        console.log(this.state.hellomess)
    }

    render(){
        return (
            <div>
                <h1 className="text-dark">{this.state.hellomess}</h1>
            </div>
            ) 
    }
}


export default Hangman;