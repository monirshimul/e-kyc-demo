import React from 'react'

import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { routes } from '../RouteName';
import "./sidebarTwo.css";
import profileImage from "./image/undraw_profile_pic_ic5t.svg"

function DashboardTwo() {
    console.log("In the DashboardTwo")

    let { path, url } = useRouteMatch();

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

                            </div>
                        </div>

                        <ul>

                            {routes.map((route, index) => (
                                <li key={index}>

                                    <Link to={`${url}${route.path}`}><i className={route.className}></i>{route.featureName} <i className="fa fa-angle-right"></i></Link>
                                    <div id="sub-menu-one">
                                        <ul>

                                            {route.nested.map((nest, ind) => (
                                                <li key={ind}>
                                                    <Link to={`${url}${nest.path}`}>{nest.featureName} <i className="fa fa-angle-right"></i></Link>

                                                </li>

                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}

                        </ul>

                    </div>






                    {/*Start Content Area */}


                    <Switch>
                        <div className="container my-5">
                            <div className="row d-flex justify-content-center">
                                <div className=" col-sm-12" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>
                                    {routes.map((route, index) => (
                                        <div>

                                            <Route
                                                key={index}
                                                path={`${path}${route.path}`}
                                                exact={route.exact}

                                            >
                                                {route.component}
                                            </Route>


                                            {
                                                route.nested.map((nest, ind) => (
                                                    <Route
                                                        key={ind}
                                                        path={`${path}${nest.path}`}
                                                        exact={nest.exact}

                                                    >
                                                        {nest.component}
                                                    </Route>

                                                ))
                                            }
                                        </div>


                                    ))}

                                </div>
                            </div>

                        </div>




                    </Switch>

                </div>



            </div>
        </Router>

    )
}

export default DashboardTwo
