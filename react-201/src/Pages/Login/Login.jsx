import React from "react";
import ReactDOM from 'react-dom';
import PageHeader from "../../Components/PageHeader/PageHeader";
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import {render} from 'react-dom';
import "@fontsource/dm-sans";
import background from "../../LongBackground.png"


const useStyles = {
    MainDivision: {
        width: "100%",
        backgroundImage: `url(${background}`,
        backgroundSize: "cover",
        height: "1024px"
    },

    InnerBox: {
        textAlign: "center", 
        marginBottom: "60px",
        marginTop: "100px",
        fontFamily: "DM Sans",
        fontSize: "42px",
        fontWeight: "700",
        lineHeight: "62px",
        letterSpacing: "0em",
        textAlign: "center",
        color: "#000000",
        textDecoration: "underline"

    },

    InnerLogin: {
        marginBottom: "-5px",
        marginRight: "320px",
        fontFamily: "DM Sans",
        fontSize: "28px",
        fontWeight: "700",
        lineHeight: "62px",
        letterSpacing: "0em",
        textAlign: "center",
        color: "#000000"

    },

    Boxes: {
        height: "61.359771728515625px",
        width: "383.42926025390625px",
        borderRadius: "4px",
        display: "block",
        background: "rgba(255, 207, 164, 0.01)",
        boxShadow: "inset 0px -1px 0px #000000, inset 1px 0px 0px #000000, inset -1px 0px 0px #000000, inset 0px 1px 0px #000000",
        margin: "auto",
        fontFamily: "DM Sans",
        background: "#FFCFA403"
    },

    InnerGuestLogin: {
        textAlign: "center", 
        marginTop: "0px",
        marginBottom: "-5px",
        marginRight: "235px",
        fontFamily: "DM Sans",
        fontSize: "28px",
        fontWeight: "700",
        lineHeight: "62px",
        letterSpacing: "0em",
        color: "#000000"

    },

    linkToRegister: {
        textAlign: "center",
        fontFamily: "DM Sans",
        color: "#000000",
        marginTop: "20px",
        marginBottom: "90px"
    },

    loginButton: {
        marginTop: "20px",
        width: "390px",
        height: "2.5em",
        caretColor: "transparent",
        textAlign: "center",
        boxSizing: "border-box",
        fontFamily: "DM Sans",
        fontSize: "1em",
        backgroundColor: "#87CEFA",
        display: "block",
        margin: "auto",
        cursor: "pointer"
    },

    guestLoginButton: {
        height: "2.5em",
        width: "390px",
        caretColor: "transparent",
        textAlign: "center",
        boxSizing: "border-box",
        fontSize: "1em",
        fontFamily: "DM Sans",
        marginBottom: "30px",
        backgroundColor: "#87CEFA",
        display: "block",
        margin: "auto",
        cursor: "pointer"
    },

    


}

function Login(){

    return(
        <div style={useStyles.MainDivision}>
            <PageHeader name="Login"></PageHeader>
            {/* {<h1 style={useStyles.InnerBox}>Login</h1>} */}
            <div>
                <h3 style={useStyles.InnerLogin}>Login</h3>
                <input style={useStyles.Boxes} type="email" placeholder="Email" /> <br></br>
                <input style={useStyles.Boxes} type="password" placeholder="Password" /> <br></br>
                <div class="container">
                    <div class="vertical-center">
                        <button style={useStyles.loginButton} type="submit" name="Register">Login</button>
                    </div>
                </div>
                <h3 style={useStyles.InnerGuestLogin}>Guest Login</h3>
                <input style={useStyles.Boxes} placeholder="Group Code" /> <br></br>
                <div style={useStyles.guestContainer}>
                    <div style={useStyles.guestVerticalCenter}>
                        <button style={useStyles.guestLoginButton} type="submit" name="Register">Guest Login</button>
                    </div>
                </div>
                <div style={useStyles.linkToRegister} >
                <Link to='/Register'><u>Create New Account</u></Link>
                </div>
            </div>
        </div> 
    )}

export default Login;
