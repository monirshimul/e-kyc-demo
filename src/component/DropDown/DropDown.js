import React from 'react'
import { Link } from 'react-router-dom'


function DropDown() {
    return (
        <div className="container">
            {/* <div class="form-group col-sm-2">
                <select class="custom-select">
                    <option selected="">Dashboard</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div> */}

            <div className="card col-sm-2 my-5" style={{ margin: "0", padding: "0" }}>
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
            </div>
            <div className="card col-sm-3 my-5" style={{ margin: "0", padding: "0" }}>
                <div id="btnGroupDrop1" type="" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Other&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            </div>
            <div className="card col-sm-4 my-5" style={{ margin: "0", padding: "0" }}>
                <div id="btnGroupDrop1" type="" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Admin&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
            </div>









            {/* <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle text-white" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    User</Link>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="#">Action</Link>
                    <Link className="dropdown-item" to="#">Another action</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">Something else here</Link>
                    <Link className="dropdown-item" to="#">Another action</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">Something else here</Link>
                    <Link className="dropdown-item" to="#">Another action</Link>
                </div>
            </li> */}
        </div>
    )
}

export default DropDown
