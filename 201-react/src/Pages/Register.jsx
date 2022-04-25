import React from "react";
import GroupSelect from "../Components/GroupSelectButton/GroupSelect"
import PageHeader from "../Components/PageHeader/PageHeader"

function Register(){
    return(
        <div style={{marginTop: "100px"}}>
            <h1>Register</h1>
            <div>
                <form>
                    <input type="text" id="Username" name="Username" placeholder="Username"/>
                    <input type="text" id="Email" name="Email" placeholder="Email"/>
                    <input type="text" id="Password" name="Password" placeholder="Password"/>
                    <input type="text" id="ConfirmPass" name="ConfirmPass" placeholder="Confirm Password"/>
                    <button type="submit" name="Register">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default HomePage;