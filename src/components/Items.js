import React from "react";

//import Menubar from "../../src/components/Menubar"
import Menubar from "./Menubar"
import { useHistory } from "react-router";
function Items() {
    let history = useHistory();
    const token = localStorage.getItem("token");
    console.log("token", token);
    let login = true;
    if (token == null) {
        login = false;
        if (!login === true) {
            history.push("/");
        }

    }
    return (
        <div>
            <Menubar />
            <div style={{ float: "left", border: "solid red 1px", marginLeft: "30px", display: "block", marginTop: "2%", width: "75%" }}>
                <div style={{ textAlign: "center" }}>
                    <h3> รายการอุปกรณ์ทั้งหมด</h3>
                </div>
                <div style={{ border: "solid red 1px" }}>
                    <h3>ค้นหารายการ</h3>

                    <input type="text" className="form-control" />
                </div>
                <div>
                    <button type="button" className="btn btn-primary" >ค้นหา</button>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <button type="button" className="btn btn-warning">เพิ่ม</button>
                </div>
                <table className="table table-bordered " >
                    <thead className="table-dark" style={{ textAlign: "center" }} >
                        <tr>
                            <td style={{ width: "70px" }}>ลำดับที่</td>
                            <td>อุปกรณ์</td>
                            <td>จำนวน</td>
                            <td>สถานะ</td>
                            <td>การจัดการ</td>
                        </tr>
                    </thead>
                    <tbody >
                        {/* <tr>
                        <td>

                        </td>
                    </tr> */}
                        <tr >
                            <td style={{ textAlign: "center" }} > 1</td>

                            <td style={{ textAlign: "center" }} >ไขควง</td>
                            <td style={{ textAlign: "center" }} >1</td>
                            <td ><ul>
                                <li>
                                    ถูกยืม: 1 จำนวน
                                </li>
                            </ul></td>
                            <td style={{ textAlign: "center" }} ><button type="button" className="btn btn-success">แก้ไข</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default Items;