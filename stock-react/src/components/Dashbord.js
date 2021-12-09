import React from "react";
import Menubar from "./Menubar";
// import  "../CSS/Menubar.css"
function Dashbord() {
    return (
        <div>
            <Menubar/>
              {/* <div style={{ float: "left", border: "solid red 1px", marginLeft:"15px",display: "block",marginTop:"5%",width:"83%" }}>


                <div style={{ textAlign: "center" }}>
                    <h3>รายการยืม - คืน</h3>
                </div>
                <div>
                    <button type="button" className = "btn btn-warning">เพิ่ม</button>
                </div>
                <table className="table table-bordered " style={{ textAlign: "center" }}>
                    <thead className="table-dark"> 
                        <tr>
                            <td> ครั้งที่</td>
                            <td>ชื่อ - นามสกุล</td>
                            <td>อุปกรณ์</td>
                            <td>จำนวน</td>
                            <td>สถานะ</td>
                            <td>วันที่ยืม</td>
                            <td>เวลายืม</td>
                            <td>วันที่คืน</td>
                            <td>เวลาคืน</td>
                            <td>การจัดการ</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                        <td>

                        </td>
                    </tr> */}
                     {/* <tr>
                            <td> 1</td>
                            <td>ธนากร วรพงศ์ธนเดช</td>
                            <td>ไขควง</td>
                            <td>1</td>
                            <td style={{color:"red"}}>กำลังยืม</td>
                            <td>10/20/2564</td>
                            <td>10.30.44 AM</td>
                            <td>10/20/2564</td>
                            <td>10.30.44 AM</td>
                            <td><button type="button" className = "btn btn-success">แก้ไข</button></td>
                        </tr>
                    </tbody>
                </table> */} 
            {/* </div> */}
               
          
        </div>
    )
}
export default Dashbord;