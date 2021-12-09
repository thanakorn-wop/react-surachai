import React, { useState } from "react";
import key from "../images/Logos/key.png";
//import padlock from "../../images/Logos/padlock.png";
import padlock from "../images/Logos/padlock.png";
import "../CSS/Login.css"

import { Redirect, useHistory } from "react-router";

function Login() {
    let history = useHistory();

    const [id, setid] = useState();
    const [pass, setpass] = useState();
    const [login, setlogin] = useState(false);
    function setiduser(props) {
        setid(props.target.value);
    }
    function setpassworduser(props) {
        setpass(props.target.value);
    }
    const validatelogin = () => {
        console.log(id, pass);
        if (id == null && pass == null) {
            alert("Your username or password is Empty");
        }
        else {
            setlogin(true);
            localStorage.setItem("token", "qwasdsafafklsadqweasdkvmzxc")
            const data = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: id, password: pass })
            }
            fetch("/login", data

            ).then(response => response.json())

                .then(resp => {
                    console.log("success", resp);
                    console.log(resp.length);
                    if (resp.length === 0) {
                        alert("Your id don't register ");
                        // console.log("aaa");
                    }
                    else {
                        // console.log("else")

                        history.push("/dashbord");

                    }

                })
                .catch((err) => {
                    console.error("error");
                })
        }
        // console.log("check = ",username);
        // console.log("check = ",password);
    }

    // console.log(id,pass);

    return (

        <div style={{ display: "block", border: "solid black 5px", margin: "auto", textAlign: "center", marginTop: "5%", borderRadius: "25px" }} className="boxlogin">
            <div style={{ paddingTop: "20px" }}>
                <h3 >บริษัทสุรชัย จำกัด</h3>
            </div>
            <div style={{ marginLeft: "10%", marginTop: "5%", border: "solid black 1px" }}>
                <table className="table-login" style={{ textAlign: "center", border: "solid red 1px" }}>

                    <tbody >
                        <tr>
                            <td>
                            </td>
                            <td style={{ textAlign: "left" }}>
                                Username
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "right", width: "15%", }}>
                                <img src={padlock} alt="logo" width="20px" />

                            </td>
                            <td style={{ textAlign: "left" }}>
                                <input type="text" id="ID" className="form-control" style={{ width: "100%", border: "solid gray 1px" }} onChange={setiduser} />
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td style={{ textAlign: "left" }}>
                                Passwords
                            </td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "right", width: "15%", }}>
                                <img src={key} alt="padlog" width="20px" /> &nbsp;

                            </td>
                            <td style={{ textAlign: "left" }}>
                                <input type="password" id="password" className="form-control" style={{ width: "100%", border: "solid gray 1px" }} onChange={setpassworduser} />
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
            <div style={{ marginTop: "20px" }}>
                <button type="button" className="btn btn-primary" style={{ width: "50%" }} onClick={validatelogin}>Login</button>
            </div>



        </div>


    )
}
export default Login;