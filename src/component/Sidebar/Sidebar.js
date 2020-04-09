import React from 'react';
import { Link, BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';
import { routes } from '../RouteName';
import "../css/Sidebar.css";

const Sidebar = ({ path, url }) => {

    console.log("sidebar url....", url)
    console.log("sidebar path....", path)
    routes.map(r => console.log(`${url}${r.path}`))
    return (

        <div className=" border-right" id="sidebar-wrapper" style={{ margin: "0", padding: "0", background: "#099e96", color: "#fff" }}>

            {routes.map((route, index) => (

                // <div className="list-group list-group-flush" key={index} >
                //     {/* <button className="btn btn-info" onClick={() => history.push("/Basic")}>Use</button> */}
                //     <Link to={`${url}${route.path}`} className="list-group-item list-group-item-action " style={{ background: "#099e96", color: "#fff" }}>{route.featureName}</Link>
                // </div>

                <div key={index} className="card col-sm-2 my-5" style={{ margin: "0", padding: "0" }}>
                    <div id="btnGroupDrop1" type="" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {route.featureName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </div>

            ))}

            {/* <div className="card col-sm-2 my-5" style={{ margin: "0", padding: "0" }}>
                <div className="" id="btnGroupDrop1" type="" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    User&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1" >
                    <Link class="dropdown-item" to="#">Create User By Admin</Link>
                    <Link class="dropdown-item" to="#">Update User</Link>
                    <div className="dropdown-divider"></div>
                    <Link class="dropdown-item" to="#">Update User</Link>
                    <Link class="dropdown-item" to="#">Create User By Admin</Link>
                    <div className="dropdown-divider"></div>
                    <Link class="dropdown-item" to="#">Create User By Admin</Link>
                    <Link class="dropdown-item" to="#">Update User</Link>
                </div>
            </div> */}

        </div>







    )
}

export default Sidebar;