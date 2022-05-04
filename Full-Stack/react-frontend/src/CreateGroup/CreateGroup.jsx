import React, { Component } from 'react'
import './CreateGroup.css';

class CreateGroup extends Component {
    constructor(props) {
        super(props);

        this.generateCode = this.generateCode.bind(this);
        this.Enter = this.Enter.bind(this);
        
        this.state = { 
            random: 0 
        };
      }
    
    generateCode() {
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        const num = rand.nextInt(0x1000000);
        const formatted = String.format("%06x", num); 
        // -> Redirect to something
    }
    Enter() {
        if (Validate() == true) {
            // Redirect to homepage in new group
        }
        else {
            // If Code is not properly validated, throw error
        }
        // Call Validate to Validate User Generated Code
        
    }
    Validate() {
        // Validates if Code is Valid and Good
    }


    render() {
        return (
            <div id="Main" style={{marginTop: "100px"}}>
                <div id="FormContainer">
                    <form>
                        <button type="submit" onClick={this.generateCode} name="CreateGroup" id="CreateGroup">Create Group</button>
                        <div id="BottomRow">
                            <input type="text" id="JoinGroup" name="JoinGroup" placeholder="Join Group"/>
                            <button type="submit" onClick={this.Enter} name="Enter" id="Enter">Enter</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreateGroup;