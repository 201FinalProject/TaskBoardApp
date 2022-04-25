import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import {render} from 'react-dom';
import "@fontsource/dm-sans";

const useStyles = {
    InnerBox: {
        textAlign: "center", 
        marginTop: "100px",
        fontFamily: "DM Sans",
        fontSize: "42px",
        fontWeight: "700",
        lineHeight: "62px",
        letterSpacing: "0em",
        textAlign: "center",
        color: "#000000"
    },

    InnerLogin: {
        marginTop: "100px",
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
        marginRight: "230px",
        fontFamily: "DM Sans",
        fontSize: "28px",
        fontWeight: "700",
        lineHeight: "62px",
        letterSpacing: "0em",
        color: "#000000"

    },

    Link: {
        textAlign: "center",
        fontFamily: "DM Sans",
        color: "#000000"

    }


}

function Login(){
    return(
        <div >
            <h1 style={useStyles.InnerBox}>Login</h1>
            <div>
                <h3 style={useStyles.InnerLogin}>Login</h3>
                <input style={useStyles.Boxes} type="email" placeholder="Email" /> <br></br>
                <input style={useStyles.Boxes} type="password" placeholder="Password" /> <br></br>
                <h3 style={useStyles.InnerGuestLogin}>Guest Login</h3>
                <input style={useStyles.Boxes} placeholder="Group Code" /> <br></br>
                <div style={useStyles.Link} >
                <Link to='/Register'><u>Create New Account</u></Link>
                </div>
            </div>
        </div> 
    )}

export default Login;