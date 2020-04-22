import React from 'react'

import Nav from './Nav';
import { BrowserRouter as Router, Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { routes } from '../RouteName';
import { nestedRoutes } from '../NestedRouteName';
import "./sidebarTwo.css";
import { pruneRouteArray, getFlatRouteArray } from '../flattenObjectTwo';
import profileImage from "./image/undraw_profile_pic_ic5t.svg"

function DashboardTwo() {
    // console.log("In the DashboardTwo")

    const firstMenu = pruneRouteArray([1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 3, 3.1, 3.2, 3.3, 4, 4.1, 5, 5.1, 5.11, 5.12, 5.13, 5.2, 5.21, 5.22, 5.3, 5.4, 6, 6.1, 6.2, 6.3]);
    // console.log("In the Menu", firstMenu)
    //console.dir(firstMenu, { depth: null });
    const allMenu = getFlatRouteArray(firstMenu);


    firstMenu.map((v, i) => {
        if (v === undefined) {

        } else {
            console.log("Key ", v.items.key)
            console.log("First Nested", v.nested)
            v.nested.map((x, n) => {
                if (x === undefined) {

                } else {
                    console.log("Key ", x.items.key)
                    console.log("Second Nested", x.nested)
                    if (x.nested) {
                        x.nested.map((z, m) => {
                            console.log("Key ", z.items.key)
                            console.log("Third Nested", z.items)
                        })
                    }

                }
            })
        }




    })
    let { path, url } = useRouteMatch();
    // console.log("Only Path", path)

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
                                                    <Link id="linkOne" to={`${url}${route.items.path}`}><i className={route.items.className}></i><span id="menuOne">{route.items.featureName} {route.nested ? <i className="fas fa-angle-right" style={{ marginTop: "3px" }}></i> : ""}</span> </Link>

                                                    <div id="sub-menu-one">
                                                        <ul>
                                                            {
                                                                route.nested.map((nest, ind) => (
                                                                    <div key={ind}>
                                                                        {
                                                                            nest !== undefined ? (
                                                                                <li id="side-menu">
                                                                                    <Link to={`${url}${nest.items.path}`}>{nest.items.featureName} {nest.nested ? <i className="fas fa-angle-right" style={{ marginTop: "3px" }}></i> : ""}</Link>

                                                                                    <div id="sub-menu-two">
                                                                                        <ul>
                                                                                            {
                                                                                                nest.nested ? (
                                                                                                    nest.nested.map((deepNest, index) => (
                                                                                                        <div key={index}>
                                                                                                            {
                                                                                                                deepNest !== undefined ? (
                                                                                                                    <li>
                                                                                                                        <Link to={`${url}${deepNest.items.path}`}>{deepNest.items.featureName} {deepNest.nested ? <i className="fas fa-angle-right" style={{ marginTop: "3px" }}></i> : ""}</Link>
                                                                                                                    </li>

                                                                                                                ) : ""
                                                                                                            }
                                                                                                        </div>
                                                                                                    ))
                                                                                                ) : ""

                                                                                            }
                                                                                        </ul>

                                                                                    </div>
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
