/* eslint-disable no-const-assign */
import React, { useEffect, useState } from "react";
import Menubar from "./Menubar";
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";
// import dateFormat from "dateformat";
// import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';
import '../CSS/Return-borrow.css'

// import "../src/CSS/Return-borrow.css"

//import { MDBDataTable } from 'mdbreact';
import { Table, Button, Tag } from "antd";
import axios from "axios";
function Popupeditborrowuser(props) {
    //let history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    //const [ctime, setCtime] = useState(new Date());
    const [rebortime, setrebortime] = useState();
    const date = startDate.getDate() + '/' + startDate.getMonth() + '/' + startDate.getFullYear()
    // function UpdateTime() {
    //     let time = new Date().toLocaleTimeString();
    //     setCtime(time);
    // }

    // useEffect(() => {
    //     //const interval = setInterval(UpdateTime, 1000)
    //     //return () => clearInterval(interval);
    // }, []);
    // const [date, setDate] = useState(new Date());
    // const [selectdate,setselectdate] = useState();
    if (!props.show) {
        return null
    }

    function validatedevice(id) {
        if (id === "cancel") {
            props.onClose(false)
        }
        else {

            const data = {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: props.name, lastname: props.lastname, rebordate: date, rebortime: rebortime, devicename: props.devicename, amount: props.amount })
            }
            fetch("/returnitem", data

            ).then(response => response.json())
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
                    <h4 className="modal-title" style={{ color: "white" }} >แก้ไขรายการ</h4>
                </div>
                <div className="modal-body">

                    <div>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>วันที่คืน</label>
                        <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div>
                        <label style={{ marginTop: "10px", color: "white", fontSize: "24px" }}>เวลาที่คืน</label> &nbsp;
                        <input type="time" id="appt" name="appt" min="09:00" max="18:00" onChange={(props) => setrebortime(props.target.value)} />
                    </div>




                    <div className="modal-footer" style={{ marginTop: "20px" }}>
                        <button className="btn btn-primary" id="save" data-dismiss="modal" onClick={() => validatedevice("save")} >Save</button>
                        <button className="btn btn-danger" id="cancel" onClick={() => validatedevice("cancel")} >Close</button>
                    </div>


                </div>

            </div>
        </div>
    );
}
function PopUpAdduserborrowdevices(props) {

    const [startDate, setStartDate] = useState(new Date());
    const [devicename, setdevicename] = useState();
    const [amountdevice, setamountdevice] = useState();
    const [name, setname] = useState();
    const [lastname, setlastname] = useState();
    const [rebortime, setrebortime] = useState();

    const [emptydevicename, setemptydevicename] = useState();
    const [emptyamount, setemptyamount] = useState();
    const [errormessage, seterrormessage] = useState();

    const [apidata, setapidata] = useState([]);

    const date = startDate.getDate() + '/' + startDate.getMonth() + '/' + startDate.getFullYear()
    const style_error = {
        message_error: {
            color: "red",

        }

    }
    useEffect(() => {
        const data = {
            method: "GET",
            headers: { 'Content-Type': 'application/json' },

        }

        fetch("/PopUpAdduserdevices", data

        ).then(response => response.json())

            .then(resp => {
                setapidata(resp);

            })
            .catch((err) => {
                console.error("error");
            })

    }, [])

    console.log(date);
    // console.log("fullname =  ", fullname);
    if (!props.show) {
        return null
    }



    function validatedevice(id) {

        if (id === "cancel") {
            props.onClose(false);
        } else {
            if (devicename == null) {
                seterrormessage(style_error.message_error);
                setemptydevicename("กรุณาใส่ชื่ออุปกรณ์");
            }
            if (amountdevice == null) {
                seterrormessage(style_error.message_error);
                setemptyamount("กรุณาใส่จำนวน")
            }
            else {

                const data = {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ devicename: devicename, amount: amountdevice, date: date, name: name, lastname: lastname, rebortime: rebortime })
                }
                fetch("/PopUpAdduserborrowdevices", data

                ).then(response => response.json())

                    .then(resp => {
                        console.log("success", resp);
                        console.log(resp.length);
                        // resp["key"] = uuidv4()

                        // user_borrow = resp;
                        // console.log(user_borrow);
                        props.datauser(resp)


                    })
                    .catch((err) => {
                        console.error("error");
                    })
                props.onClose(false);
            }
            window.location.reload(false);


        }

    }
    function adddevicename(props) {
        setdevicename(props.target.value)
    }
    function addamount(props) {
        setamountdevice(props.target.value)
    }
    function fullname(props) {
        // console.log(props.target.value)
        var fullname = props.target.value;
        fullname = fullname.split(' ');
        setname(fullname[0]);
        setlastname(fullname[1]);
        // console.log(fullname)
    }
    // function getdate(props)
    // {
    //     setdata(props)
    // }

    return (
        <div className="modal1" >
            <div className="modal-content" style={{ backgroundColor: "#2D4057" }}>
                <div className="modal-header" style={{ justifyContent: "center" }}>
                    <h4 className="modal-title" style={{ color: "white" }} >เพิ่มรายการยืมอุปกรณ์</h4>
                </div>
                <div className="modal-body">


                    <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>ชื่อ - นามสกุล</label>
                    <div>
                        <select defaultValue="select" style={{ padding: "10px" }} onChange={fullname} >
                            <option value="selecte" key={uuidv4()}>-select-</option>
                            {apidata.map(data => <option key={uuidv4()}>{data.name} {data.lastname}</option>)}
                        </select>
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>อุปกรณ์ที่ยืม</label>
                        <input type="text" className="form-control" onChange={adddevicename} id="devies" placeholder="xxx" />
                        <p style={errormessage}> {emptydevicename}</p>

                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>จำนวน</label>
                        <input type="text" className="form-control" onChange={addamount} style={{}} id="ืีamount" placeholder="xxx" />
                        <p style={errormessage}> {emptyamount}</p>

                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>วันที่ยืม</label>
                        <DatePicker className="form-control" selected={startDate} onChange={(date) => { setStartDate(date) }} />
                        {/* <DatePicker dateFormat="dd/mm/yyyy"  selected={startDate} onChange={(date) => setStartDate(date)} isClearable  /> */}
                    </div>

                    <div>
                        <label style={{ marginTop: "10px", color: "white", fontSize: "24px" }}>เวลาที่คืน</label> &nbsp;
                        <input type="time" id="appt" name="appt" min="09:00" max="18:00" onChange={(props) => setrebortime(props.target.value)} />
                    </div>


                    <div className="modal-footer" style={{ marginTop: "20px" }}>
                        <button className="btn btn-primary" id="save" data-dismiss="modal" onClick={() => validatedevice("save")} >Save</button>
                        <button className="btn btn-danger" id="cancel" onClick={() => validatedevice("cancel")} >Close</button>
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
        console.log("check data = ", props.id_user)
        if (id === "cancel") {
            props.onClose(false);
        }
        else {

            console.log("test", props.name, props.lastname, props.amount, props.devicename, props.status, props.datebor, props.datereturn, props.id_user);

            if (props.status === "กำลังยืม") {
                alert("ไม่สามารถลบได้เนื่องจากสถานะกำลังยืม ");
            } else {
                const data = {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: props.devicename, amount: props.amount, status: props.status, bordate: props.datebor, rebordate: props.datereturn, id_user: props.id_user })
                }
                fetch("/deleteborrow-return", data

                )
                    .catch((err) => {
                        console.error("error");
                    })
                props.onClose(false);
                window.location.reload(false);
            }

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
                        <label style={{ marginBottom: "5px", color: "white", fontSize: "24px" }}>คุณต้องการที่จะลบ รายการยืมของ '{props.name}' ออก ใช่ หรือ ไม่ ?</label>

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

function Borrow_Return() {
    const history = useHistory();

    const [show, setshow] = useState(false);
    const [deletepop, setdeletepop] = useState(false);
    const [popaddborrow, setpopaddborrow] = useState(false);
    const [data, setdata] = useState([]);
    const [name, setname] = useState("");
    const [status, setstatus] = useState();
    const [lastname, setlastname] = useState("");
    const [amount, setamount] = useState();
    const [devicename, setdevicename] = useState("");
    const [datebor, setdatebor] = useState();
    const [datereturn, setdatereturn] = useState();
    const [id_user, setid_user] = useState();
    const [infouser, setinfouser] = useState([]);
    const [selectstatus, setselectstatus] = useState();
    const [datafullname, setdatafullname] = useState();


    const token = localStorage.getItem("token");
    console.log("token", token);
    let login = true;
    if (token == null) {
        login = false;
        if (!login === true) {
            history.push("/");
        }

    }

    let modify = data.map(({ body, ...item }) => ({
        ...item,
        // id:body,
        key: uuidv4(),

    }));
    // const getdatafullname = (e) => {
    //     setdatafullname(e.target.value);
    // }

    //console.log("check data modify = ",modify);
    function get(record) {
        setshow(true);
        setname(record["name"]);
        setlastname(record["lastname"]);
        setdevicename(record["namedevice"]);
        setamount(record["amount"]);

    }

    function deleteitem(record) {
        setdeletepop(true);
        setname(record["name"]);
        setlastname(record["lastname"]);
        setstatus(record["status"]);
        setdevicename(record["namedevice"]);
        setamount(record["amount"]);
        setdatebor(record["bordate"])
        setdatereturn(record["rebordate"])
        setid_user(record["id_user"])
    }
    // function getdatafullname(props)
    // {
    //    setdatafullname(props.target.value)
    // }
    function searchuser() {
        // const newList = infouser.filter((item) => item.name === search);
        // setdata(newList);
        const listname = datafullname.split(' ');

        console.log("check name = ", listname);
        modify = data.filter((item) => item.name === listname[0] && item.lastname === listname[1]);
        console.log("modify = ", modify)
    }
    // const [alldata,setalldata] = useState([{amount:"20"}]);
    const columns =
        [
            {
                title: "Name",
                dataIndex: "name",
                align: "center",
                editable: true,

            }, {
                title: "Lastname",
                dataIndex: "lastname",
                align: "center",
                editable: true,
                width: "100px"
            }, {
                title: "อุปกรณ์",
                dataIndex: "namedevice",
                align: "center",
                editable: true
            }, {
                title: "จำนวน",
                dataIndex: "amount",
                align: "center",
                editable: true
            }, {
                title: "สถานะ",
                dataIndex: "status",
                align: "center",
                // color:"red",
                editable: true,

            }, {
                title: "วันที่ยืม",
                dataIndex: "bordate",
                align: "center",
                editable: true
            }, {
                title: "เวลาที่ยืม",
                dataIndex: "bortime",
                align: "center",
                editable: true
            }, {
                title: "วันที่คืน",
                dataIndex: "rebordate",
                align: "center",
                editable: true
            }, {
                title: "เวลาที่คืน",
                dataIndex: "rebortime",
                align: "center",
                editable: true
            }, {
                title: "การจัดการ",
                align: "center",
                editable: true,
                render: (_, record) =>

                    modify.length >= 1 ? (


                        <><Button type="button" className="btn btn-success" onClick={() => get(_)}>แก้ไข</Button><Button type="button" className="btn btn-danger" onClick={() => deleteitem(_)}>ลบ</Button></>

                    ) : null,
            }]



    useEffect(() => {




        const getUserBorrowReturn = async () => {
            const resp = await axios.get('/Page-borrow-return-user');
            console.log("check ", resp);
            setdata(resp.data)
        }
        // async function getUserBorrowReturn()
        // {
        //     const data = {
        //         method: "GET",
        //         headers: { 'Content-Type': 'application/json' },

        //     }

        //     await fetch("/Page-borrow-return-user", data

        //     ).then(response => response.json())

        //         .then(resp => {
        //             // setapidata(resp);
        //             console.log("success", resp);
        //             setdata(resp);

        //             console.log(resp.length);

        //         })
        //         .catch((err) => {
        //             console.error("error");
        //         })

        // }



        const listUser = async () => {
            const resp = await axios.get('/PopUpAdduserdevices');
            console.log("check ", resp);
            setinfouser(resp.data)
        }
        listUser();
        getUserBorrowReturn();

        // async function listuser()
        // {
        //     const user = {
        //         method: "GET",
        //         headers: { 'Content-Type': 'application/json' },

        //     }
        //     await fetch("/PopUpAdduserdevices",  user

        //     ).then(response => response.json())

        //         .then(resp => {
        //             // setapidata(resp);
        //             console.log("success1", resp);
        //             // setdata(resp);
        //             setinfouser(resp);
        //         })
        //         .catch((err) => {
        //             console.error("error");
        //         })

        // }
        // listuser()
    }, [])
    //console.log("data10 = ", data);

    function checkStatus(e) {
        console.log("check e", e.target.value);
        setselectstatus(e.target.value);
        // const listname = datafullname.split(' ');

        // console.log("check name = ", listname);
        //  modify = data.filter((item) => item.status === selectstatus);

    }
    function checkFullName(e) {
        console.log("check name = ", e.target.value);
        setdatafullname(e.target.value);
    }
    function Tableuserborrow(props) {
        const status = props.status === "กำลังยืม" ? "borrowitem" : "returnitem"


        function getmemberborrow(name, lastname, device_name, amountitem) {
            setshow(true);
            setname(name);
            setlastname(lastname);
            setdevicename(device_name);
            setamount(amountitem);

        }

        return (
            <tr>
                <td>{props.index}</td>
                <td id="fullname-" >{props.name} {props.lastname}</td>
                <td>{props.devicename}</td>
                <td>{props.amount}</td>
                <td className={status}  >{props.status}</td>
                <td>{props.date}</td>
                <td>{props.time}</td>
                <td>{props.rebordate}</td>
                <td>{props.rebortime}</td>
                <td><button type="button" className="btn btn-success" onClick={() => getmemberborrow(props.name, props.lastname, props.devicename, props.amount)} >แก้ไข</button></td>
                {/* <td><button type="button" className="btn btn-success" onClick={() => setshow(true)} ></button></td> */}
            </tr>
        );

    }
    return (
        <div>
            <Menubar />
            <div style={{ marginTop: "5%", width: "90%", marginLeft: "50px", }}>

                <div style={{ textAlign: "center" }}>
                    <h3>รายการยืม - คืน</h3>
                </div>
                <div>
                    <button type="button" className="btn btn-light" onClick={() => setpopaddborrow(true)} style={{ color: "black" }} >เพิ่ม</button>
                    <button type="button" className="btn btn-warning" onClick={() => searchuser()} style={{ color: "black" }} >ค้นหา</button>
                    <select className="select-status" onChange={checkStatus}>
                        <option >-select-</option>
                        <option value="return">คืนแล้ว</option>
                        <option value="borrow">กำลังยืม</option>
                    </select>
                    <select className="select-user" style={{ marginLeft: "5px", width: "140px" }} onChange={checkFullName} >

                        {infouser.map(data => <option key={data.name}>{data.name} {data.lastname}</option>)}
                    </select>


                </div>
                {/* <Popupeditborrowuser onClose = {()=> setshow(false)} show = {show} /> */}
                <Popupeditborrowuser onClose={() => setshow(false)} show={show} name={name} lastname={lastname} devicename={devicename} amount={amount} />
                < PopUpAdduserborrowdevices onClose={() => setpopaddborrow(false)} show={popaddborrow} />
                <Propupdelete onClose={() => setdeletepop(false)} show={deletepop} name={name} lastname={lastname} devicename={devicename} amount={amount} status={status} datebor={datebor} datereturn={datereturn} id_user={id_user} />


                <Table columns={columns} dataSource={modify} />




            </div>


        </div>
    );
}
export default Borrow_Return;
