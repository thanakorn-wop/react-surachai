import React, { useState, useEffect } from "react";

//import Menubar from "../components/Menubar"

import Menubar from "./Menubar"
import { v4 as uuidv4 } from 'uuid';
import Search from "antd/lib/transfer/search";
import { Redirect, useHistory } from 'react-router'
import "../CSS/member.css"
function PopupAddUser(props) {
    const [name, setname] = useState();
    const [lastname, setlastname] = useState();
    const [nickname, setnickname] = useState();
    const [phone, setphone] = useState();
    const [position, setposition] = useState();
    if (!props.show) {
        return null
    }
    function validatadduser(id) {
        if (id === "cancel") {
            props.onClose(false);
        }
        else {
            const data = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name, lastname: lastname, nickname: nickname, phone: phone, position: position })
            }
            fetch("/addmember", data

            )
                .catch((err) => {
                    console.error("error");
                })
            props.onClose(false);
            window.location.reload(false);

        }

    }
    return (
        <div className="modal1" >
            <div className="modal-content" style={{ backgroundColor: "#2D4057" }}>
                <div className="modal-header" style={{ justifyContent: "center" }}>
                    <h4 className="modal-title" style={{ color: "white" }} >เพิ่มรายชื่อสมาชิก</h4>
                </div>
                <div className="modal-body">



                    <div>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>ชื่อ</label>
                        <input type="text" className="form-control" id="name" placeholder="xxx" onChange={(props) => setname(props.target.value)} />

                    </div>
                    <div>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>นามสกุล</label>
                        <input type="text" className="form-control" id="lastname" placeholder="xxx" onChange={(props) => setlastname(props.target.value)} />

                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>ชื่อเล่น</label>
                        <input type="text" className="form-control" id="nickname" placeholder="xxx" onChange={(props) => setnickname(props.target.value)} />

                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>เบอร์โทรติดต่อ</label>
                        <input type="text" className="form-control" id="phone" placeholder="xx-xxxx-xxxx" onChange={(props) => setphone(props.target.value)} />

                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>ตำแหน่ง</label>
                        <input type="text" className="form-control" id="position" placeholder="xxx" onChange={(props) => setposition(props.target.value)} />

                    </div>


                    <div className="modal-footer" style={{ marginTop: "20px" }}>
                        <button className="btn btn-primary" id="save" data-dismiss="modal" onClick={() => validatadduser("save")} >Save</button>
                        <button className="btn btn-danger" id="cancel" onClick={() => validatadduser("cancel")} >Close</button>
                    </div>


                </div>

            </div>
        </div>

    );
}

function Editinfouser(props) {
    const [name, setname] = useState();
    const [lastname, setlastname] = useState();
    const [nickname, setnickname] = useState();
    const [phone, setphone] = useState();
    const [position, setposition] = useState();



    if (!props.show) {
        return null
    }
    function validatadduser(id) {
        if (id === "cancel") {
            props.onClose(false);
        }
        else {
            const data = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name, lastname: lastname, nickname: nickname, phone: phone, position: position, id_member: props.id })
            }
            fetch("/editinfouser", data

            )
                .catch((err) => {
                    console.error("error");
                })
            props.onClose(false);
            window.location.reload(false);

        }


    }
    return (
        <div className="modal1" >
            <div className="modal-content" style={{ backgroundColor: "#2D4057" }}>
                <div className="modal-header" style={{ justifyContent: "center" }}>
                    <h4 className="modal-title" style={{ color: "white" }} >เพิ่มรายชื่อสมาชิก</h4>
                </div>
                <div className="modal-body">



                    <div>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>ชื่อ</label>
                        <input type="text" className="form-control" id="name" placeholder="xxx" onChange={(props) => setname(props.target.value)} />

                    </div>
                    <div>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>นามสกุล</label>
                        <input type="text" className="form-control" id="lastname" placeholder="xxx" onChange={(props) => setlastname(props.target.value)} />

                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>ชื่อเล่น</label>
                        <input type="text" className="form-control" id="nickname" placeholder="xxx" onChange={(props) => setnickname(props.target.value)} />

                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>เบอร์โทรติดต่อ</label>
                        <input type="text" className="form-control" id="phone" placeholder="xx-xxxx-xxxx" onChange={(props) => setphone(props.target.value)} />

                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>ตำแหน่ง</label>
                        <input type="text" className="form-control" id="position" placeholder="xxx" onChange={(props) => setposition(props.target.value)} />

                    </div>


                    <div className="modal-footer" style={{ marginTop: "20px" }}>
                        <button className="btn btn-primary" id="save" data-dismiss="modal" onClick={() => validatadduser("save")} >Save</button>
                        <button className="btn btn-danger" id="cancel" onClick={() => validatadduser("cancel")} >Close</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
function Propupdelete(props) {
    if (!props.show) {
        return null
    }
    function validatadduser(id) {
        if (id === "cancel") {
            props.onClose(false);
        }
        else {
            const data = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: props.name, lastname: props.lastname })
            }
            fetch("/deletemember", data

            )
                .catch((err) => {
                    console.error("error");
                })
            props.onClose(false);
            window.location.reload(false);

        }


    }

    return (
        <div className="modal1" >
            <div className="modal-content" style={{ backgroundColor: "#2D4057" }}>
                <div className="modal-header" style={{ justifyContent: "center" }}>
                    <h4 className="modal-title" style={{ color: "white" }} >ลบายชื่อสมาชิก</h4>
                </div>
                <div className="modal-body">
                    <div>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>คุณต้องการที่จะลบสมาชิก '{props.name}' ออก ใช่ หรือ ไม่ ?</label>

                    </div>
                    <div className="modal-footer" style={{ marginTop: "20px" }}>
                        <button className="btn btn-primary" id="save" data-dismiss="modal" onClick={() => validatadduser("ok")} >YES</button>
                        <button className="btn btn-danger" id="cancel" onClick={() => validatadduser("cancel")} >NO</button>
                    </div>


                </div>

            </div>
        </div>

    );
}

function Member() {
    let history = useHistory();
    const [show, setshow] = useState(false);
    const [popdelete, setpopdelete] = useState();
    const [data, setdata] = useState([]);
    const [deletename, setdeletename] = useState();
    const [deletelastname, setdeletelastname] = useState();
    const [popeditinfo, setpopeditinfo] = useState();
    const [id, setid] = useState();
    const [search, setsearch] = useState();

    const token = localStorage.getItem("token");
    console.log("token", token);
    let login = true;
    if (token == null) {
        login = false;
        if (!login === true) {
            history.push("/");
        }

    }


    useEffect(() => {
        const data = {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },

        }

        fetch("/showmember", data

        ).then(response => response.json())

            .then(resp => {
                setdata(resp);
                console.log("success", resp);

                // var i = 0;
                // for (i = 0; i < resp.length; i++) {
                //     fullname.push(resp[i]["name"] + " " + resp[i]["lastname"]);
                //     // setdata(resp[i]["name"]+" "+resp[i]["lastname"]);
                //     // qq[i] = resp[i]["name"]+" "+resp[i]["lastname"];
                // }
                console.log(resp.length);

            })
            .catch((err) => {
                console.error("error");
            })

    }, [])
    function getuserdelete(name, lastname) {
        setpopdelete(true);
        setdeletename(name);
        setdeletelastname(lastname);

        // console.log(name + lastname);

    }
    function editinfouser(id) {
        setpopeditinfo(true);
        setid(id);
        // window.open("/Errorpage");


        //history.push("/Errorpage");
    }
    function findmember() {
        const newList = data.filter((item) => item.name === search);
        setdata(newList);

    }


    return (

        <div>
            <Menubar />
            <div style={{ float: "left", marginLeft: "30px", display: "block", marginTop: "2%", width: "90%" }}>
                <div style={{ textAlign: "center" }}>
                    <h3> รายชื่อสมาชิก</h3>
                </div>
                <div style={{}}>
                    <h3 className="texttest">ค้นหารายชื่อ</h3>
                    <input type="text" className="form-control" onChange={(props) => setsearch(props.target.value)} />
                </div>
                <div style={{ marginTop: "10px", }}>
                    <button type="button" className="btn btn-primary" onClick={() => findmember()} >ค้นหา</button>
                </div>


                <div style={{ marginTop: "20px" }}>
                    <div>
                        <button type="button" className="btn btn-dark" onClick={() => setshow(true)}>เพิ่ม</button>
                    </div>
                    <Editinfouser onClose={() => setpopeditinfo(false)} show={popeditinfo} id={id} />
                    <Propupdelete onClose={() => setpopdelete(false)} show={popdelete} name={deletename} lastname={deletelastname} />
                    <PopupAddUser onClose={() => setshow(false)} show={show} />
                    <table className="table table-bordered tabletest " style={{ textAlign: "center", }} >
                        <thead className="table-dark">
                            <tr>
                                <td>ลำดับ</td>
                                <td>ชื่อ - นามสกุล</td>
                                <td>ชื่อเล่น</td>
                                <td>เบอร์โทรติดต่อ</td>
                                <td>ตำแหน่ง</td>
                                <td>การจัดการ</td>
                            </tr>
                        </thead>
                        <tbody id="dataitem">

                            {data.map((data, index) =>
                                <tr key={uuidv4()}>
                                    <td>{index}</td>
                                    <td>{data.name} {data.lastname}</td>
                                    <td>{data.nickname}</td>
                                    <td>{data.phone}</td>
                                    <td>{data.position}</td>
                                    <td> <button type="button" className="btn btn-success" onClick={() => editinfouser(data.id_member)} >แก้ไข</button> <button type="button" className="btn btn-danger" onClick={() => getuserdelete(data.name, data.lastname)}>ลบ</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>


            </div>
        </div>
    )
}
export default Member;