import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render () {
        const spamArray = []
        for (let i =0; i < 500; i++){
            spamArray.push(<Spam />)
        }
       return (
           <div id="ex-2">{spamArray}</div>
       )        
    }
}

export default Spamalot

