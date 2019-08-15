import React, { Component } from 'react';
import LCC from 'lightning-container';
import './App.css';
// This Line Imports our Component That We Created in our other file.
import TerminalScreen from './TerminalScreen.js'
class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            message: ""
        }
    }
    
    componentDidMount(){
        LCC.addMessageHandler(this.messageRecievedHandler.bind(this));
    }
    
    messageRecievedHandler(msg){
        const { name, value } = msg;
        console.log("Messaged received.");
        console.log(`Message name: ${name}`);
        console.log(`Message value: ${value}`);
        
        // Add Any Logic that should be handled here.
        this.setState({
            message: value
        });
    }
    
    // The Render Functiion is what defines the markup of our component.
    render(){
        return (
            <div>
                <TerminalScreen text={this.state.message} />
            </div>
        );
    }
}
export default App;
