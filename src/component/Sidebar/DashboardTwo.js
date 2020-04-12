import React from 'react'

import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { routes } from '../RouteName';
import "./sidebarTwo.css";
import profileImage from "./image/undraw_profile_pic_ic5t.svg"

function DashboardTwo() {
    return (
        <Router>
            <div>
                <Nav />
                <div className="d-flex" style={{ margin: "0", padding: "0", overflowX: "hidden" }}>
                    <div id="sidebar">
                        <div id="profile_info">
                            <div id="profile_img">
                                <img src={profileImage} alt="profile_img" />
                            </div>
                            <div id="profile_data">
                                <p id="name">Abdur Rahim</p>
                                {/* <span><i class="fas fa-map-marker-alt"></i> Texas, USA</span> */}
                            </div>
                        </div>
                        {/* <h2>Sidebar</h2> */}
                        <ul>
                            <li><a href="#"><i class="fas fa-home"></i>Home <i class="fa fa-angle-right"></i></a>
                                <div id="sub-menu-one">
                                    <ul>
                                        <li><a href="#">Target</a></li>
                                        <li id="side-menu"><a href="#">Vission <i class="fa fa-angle-right"></i></a>
                                            <div id="sub-menu-two">
                                                <ul>
                                                    <li><a href="#">Istler</a></li>
                                                    <li><a href="#">Hikma</a></li>
                                                    <li><a href="#">My Bank</a></li>
                                                    <li><a href="#">Agent</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li><a href="#">Goal</a></li>
                                        <li><a href="#">Achievment</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#"><i class="fas fa-user"></i>Profile <i class="fa fa-angle-right"></i></a>
                                <div id="sub-menu-one">
                                    <ul>
                                        <li><a href="#">Goal</a></li>
                                        <li><a href="#">Vission</a></li>
                                        <li><a href="#">Target</a></li>
                                        <li><a href="#">Achievment</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#"><i class="fas fa-address-card"></i>About <i class="fa fa-angle-right"></i></a>
                                <div id="sub-menu-one">
                                    <ul>
                                        <li><a href="#">Achievment</a></li>
                                        <li><a href="#">Vission</a></li>
                                        <li><a href="#">Target</a></li>
                                        <li><a href="#">Goal</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#"><i class="fas fa-project-diagram"></i>portfolio <i class="fa fa-angle-right"></i></a>
                                <div id="sub-menu-one">
                                    <ul>
                                        <li><a href="#">Vission</a></li>
                                        <li><a href="#">Goal</a></li>
                                        <li><a href="#">Target</a></li>
                                        <li><a href="#">Achievment</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#"><i class="fas fa-blog"></i>Blogs <i class="fa fa-angle-right"></i></a>
                                <div id="sub-menu-one">
                                    <ul>
                                        <li><a href="#">Target</a></li>
                                        <li><a href="#">Vission</a></li>
                                        <li><a href="#">Goal</a></li>
                                        <li><a href="#">Achievment</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#"><i class="fas fa-address-book"></i>Contact <i class="fa fa-angle-right"></i></a>
                                <div id="sub-menu-one">
                                    <ul>
                                        <li><a href="#">Achievment</a></li>
                                        <li><a href="#">Vission</a></li>
                                        <li><a href="#">Target</a></li>
                                        <li><a href="#">Goal</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#"><i class="fas fa-map-pin"></i>Map <i class="fa fa-angle-right"></i></a>
                                <div id="sub-menu-one">
                                    <ul>
                                        <li><a href="#">Vission</a></li>
                                        <li><a href="#">Goal</a></li>
                                        <li><a href="#">Target</a></li>
                                        <li><a href="#">Achievment</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>

                    </div>

                </div>



            </div>
        </Router>

    )
}

export default DashboardTwo
