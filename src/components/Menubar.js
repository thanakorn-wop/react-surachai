import React, { useState } from "react";
import { NavLink, Link, Redirect } from "react-router-dom";

import "../CSS/Menubar.css"

function Menubar() {

    function logout() {
        localStorage.removeItem("token");
    }
    function test() {
        console.log("test");
    }
    return (


        <nav className="container-fluid" >
            <ul className="Navbar" >
                <div className="Menunav" onClick={test}>
                    <div className="line1"></div>
                    <div className="line1"></div>
                    <div className="line1"></div>
                </div>
                <NavLink activeClassName="active" to="/Errorpage"><li className="link">รายการอุปกรณ์</li></NavLink>
                <NavLink activeClassName="active" to="/Borrow"><li className="link">รายการยืม-คืน</li></NavLink>
                <NavLink activeClassName="active" to="/Member"><li className="link">รายชื่อสมาชิก</li></NavLink>
                <NavLink activeClassName="active" to="/" onClick={() => logout()}><li className="link">ออกจากระบบ</li></NavLink>

            </ul>

        </nav>


    )
}
export default Menubar;