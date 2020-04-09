import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { routes } from '../RouteName';
import Sidebar from './Sidebar';
import Nav from './Nav';
import Content from './Content';
export class RoutingSide extends Component {
    render() {
        return (
            <Router>
                <div >
                    <Nav />
                    <div className="d-flex" style={{ margin: "0", padding: "0", overflowX: "hidden" }}>
                        <Sidebar />
                        <Content />


                    </div>
                </div>
            </Router>
        )
    }
}

export default RoutingSide;
