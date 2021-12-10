import React, { useState } from "react";
import key from "../images/Logos/key.png";
//import padlock from "../../images/Logos/padlock.png";
import padlock from "../images/Logos/padlock.png";
import "../CSS/Login.css"
import axios from "axios";
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
    const validatelogin = async () => {
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
                body: { username: id, password: pass }
            }


            await fetch('/login', data
            )
                .then(resp => {
                    console.log("success", resp);
                    //  console.log(resp.length);
                    // if (resp.status !== 200) {
                    //     history.push("/dashbord");
                    //     // console.log("aaa");
                    // }
                    // else {
                    //     // console.log("else")


                    //     alert("Your id don't register ");
                    // }

                })
                .catch((err) => {
                    console.error(err);
                })
            // axios.post("/login", data

            // ).then(response => response.json())

            //     .then(resp => {
            //         console.log("success", resp);
            //         //  console.log(resp.length);
            //         if (resp.length === 0) {
            //             alert("Your id don't register ");
            //             // console.log("aaa");
            //         }
            //         else {
            //             // console.log("else")

            //             history.push("/dashbord");

            //         }

            //     })
            //     .catch((err) => {
            //         console.error("error");
            //     })
        }
        // console.log("check = ",username);
        // console.log("check = ",password);
    }

    async function postData(url = '', data = {}) {
        // Default options are marked with *
        setlogin(true);
        localStorage.setItem("token", "qwasdsafafklsadqweasdkvmzxc")


        const response = await axios.post(url, data).then(resp => {
            console.log("success", resp);
            //  console.log(resp.length);
            if (resp.data.length === 0) {

                // console.log("aaa");
                alert("Your id don't register ");
            }
            else {
                // console.log("else")

                history.push("/dashbord");

            }

        })
            .catch((err) => {
                console.error(err);
            })
        // parses JSON response into native JavaScript objects
    }

    // postData("http://localhost:8080", { username: id, password: pass }).then(data => (console.log(data)));


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
                <button type="button" className="btn btn-primary" style={{ width: "50%" }} onClick={() => postData("/login", { username: id, password: pass }).then(data => console.log(data))}>Login</button>
            </div>



        </div>


    )
}
export default Login;