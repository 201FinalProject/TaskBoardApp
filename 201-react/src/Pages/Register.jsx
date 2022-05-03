import React from "react";
import GroupSelect from "../Components/GroupSelectButton/GroupSelect"
import PageHeader from "../Components/PageHeader/PageHeader"
import './Register.css';


const useStyles ={


}
function Register(){
    return(
        <div id="Main" style={{marginTop: "100px"}}>
            <h1>Register</h1>
                <form>
                    <input id="Username" name="Username" placeholder="Username"/>
                    <input type="email" id="Email" name="Email" placeholder="Email"/>
                    <input type="password" id="Password" name="Password" placeholder="Password"/>
                    <input type="password" id="ConfirmPass" name="ConfirmPass" placeholder="Confirm Password"/>
                    <div class="container">
                        <div class="vertical-center">
                            <button type="submit" name="Register">Create Account</button>
                            </div>
                    </div>
                </form>
        </div>
    )
}

export default Register;