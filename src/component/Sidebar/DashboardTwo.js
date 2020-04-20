import React from 'react'

import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { routes } from '../RouteName';
import { nestedRoutes } from '../NestedRouteName';
import "./sidebarTwo.css";
import { pruneRouteArray, getFlatRouteArray } from '../flattenObjectTwo';
import profileImage from "./image/undraw_profile_pic_ic5t.svg"

function DashboardTwo() {
    console.log("In the DashboardTwo")

    const firstMenu = pruneRouteArray(['Target', 'Vission', 'Goal', 'Achievement']);
    //console.log("In the Menu", firstMenu)
    //console.dir(firstMenu, { depth: null });
    const allMenu = getFlatRouteArray(firstMenu);
    allMenu.map((v, i) => {
        console.log("All Menu========", v)
    })
    let { path, url } = useRouteMatch();
    console.log("Only Path", path)

    return (
        <Router>
            <div>
                <Nav />
                <div className="d-flex" style={{ margin: "0", padding: "0", overflowX: "hidden" }}>
                    <input type="checkbox" id="check" />
                    <label for="check">


                        <i className="fas fa-backspace" id="cancel"></i>
                        <i className="fas fa-arrow-right" id="showMenu"></i>
                    </label>
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


                            {firstMenu.map((route, index) => (
                                <div key={index}>
                                    {
                                        route !== undefined ? (
                                            <div>
                                                <li>
                                                    <Link id="linkOne" to={`${url}${route.items.path}`}><i className={route.items.className}></i><span id="menuOne">{route.items.featureName} <i className="fas fa-angle-right"></i></span> </Link>

                                                    <div id="sub-menu-one">
                                                        <ul>
                                                            {
                                                                route.nested.map((nest, ind) => (
                                                                    <div key={ind}>
                                                                        {
                                                                            nest !== undefined ? (
                                                                                <li>
                                                                                    <Link to={`${url}${nest.items.path}`}>{nest.items.featureName} <i className="fa fa-angle-right"></i></Link>
                                                                                </li>
                                                                            ) : ""
                                                                        }
                                                                    </div>
                                                                ))}
                                                        </ul>
                                                    </div>
                                                </li>

                                            </div>
                                        ) : ""
                                    }


                                </div>


                            ))}

                        </ul>

                    </div>






                    {/*Start Content Area */}



                    <div className="container my-5 " style={{ zIndex: "-1" }}  >
                        <div className="row d-flex justify-content-center" >
                            <div className="col-sm-12" style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)" }}>

                                <Switch>
                                    {allMenu.map((route, index) => (


                                        <Route
                                            key={index}
                                            path={`${path}${route.path}`}
                                            exact={route.exact}

                                        >
                                            {route.component}
                                        </Route>






                                    ))}
                                </Switch>



                            </div>
                        </div>

                    </div>








                </div>



            </div>
        </Router>

    )
}

export default DashboardTwo
