<<<<<<< Updated upstream
=======
import React from "react";
import GroupSelect from "../../Components/GroupSelectButton/GroupSelect"
import PageHeader from "../../Components/PageHeader/PageHeader"
import './Register.css';


const useStyles ={


}
function Register(){
    return(
        <div id="Main" style={{marginTop: "100px"}}>
            <h1>Register</h1>
                <form>
                    <div class="inputsContainer">
                        <input class="test" id="Username" name="Username" placeholder="Username"/>
                        <input class="test" type="email" id="Email" name="Email" placeholder="Email"/>
                        <input class="test" type="password" id="Password" name="Password" placeholder="Password"/>
                        <input class="test" type="password" id="ConfirmPass" name="ConfirmPass" placeholder="Confirm Password"/>
                    </div>
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
>>>>>>> Stashed changes
