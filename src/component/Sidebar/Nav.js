import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './image/bankAsia-removebg.png'
import './nav.css'
import '../E-KYC/Simplified/utils/Common.css'


const Nav = () => {
    return (

        <div className="col-sm-12" style={{ margin: "0", zIndex: "1", position: "sticky", top: "0", padding: "0", background: "#099e96", boxShadow: "0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
            <nav id="menu-bar" className="navbar navbar-expand-lg navbar-light border-bottom " style={{ background: "#099e96" }}>
                <img src={Logo} alt="Smiley face" height="50px" width="185px" />

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav m-auto mt-2 mt-lg-0 d-flex justify-content-between" style={{ width: '800px' }}>
                        <li className="nav-item ">
                            <Link className="nav-link text-white" to="#"><i class="fa fa-home"></i> Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="#"><i class="fa fa-user"></i> About</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-clone"></i> Services</Link>
                            <div id="sub-menu-1">
                                <ul>
                                    <li><a href="#">Goal</a></li>
                                    <li><a href="#">Vission</a></li>
                                    <li><a href="#">Target</a></li>
                                    <li><a href="#">Achievment</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-users"></i> Clients</Link>
                            <div id="sub-menu-1">
                                <ul>
                                    <li><a href="#">Goal</a></li>
                                    <li><a href="#">Vission</a></li>
                                    <li><a href="#">Target</a></li>
                                    <li><a href="#">Achievment</a></li>
                                </ul>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-phone"></i> Contact</Link>
                            <div id="sub-menu-1">
                                <ul>
                                    <li><a href="#">Goal</a></li>
                                    <li><a href="#">Vission</a></li>
                                    <li><a href="#">Target</a></li>
                                    <li><a href="#">Achievment</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-edit"></i> Business</Link>
                            <div id="sub-menu-1">
                                <ul>
                                    <li><a href="#">Goal</a></li>
                                    <li><a href="#">Vission</a></li>
                                    <li><a href="#">Target</a></li>
                                    <li><a href="#">Achievment</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>


        </div>

    )
}

export default Nav;
