import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { routes } from './RouteName';
import Navbar from './Navbar';


 class Routing1 extends Component {
    state = {
        routeList: routes
    }

    render() {
        console.log(this.state.routeList);
        const { routeList } = this.state;
        return (
            <Router>
                <div>
                    {/* Under comment div is converted to Navbar component as a separate component */}
                    {/* <div>
                        {routeList.map((route, index) => (
                            <div key={index}>
                                <ul>
                                    <li key={index}>
                                        <Link to={route.path}>{route.featureName}</Link>
                                    </li>
                                </ul>
                            </div>

                        ))
                        }
                    </div> */}
                   
                    <Navbar/>
                    
                      

                    <Switch>
                        {routeList.map((route, index) => (
                            // Render more <Route>s with the same paths as
                            // above, but different components this time.
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={route.component}
                            />
                        ))}
                    </Switch>





                </div>
            </Router>


        )
    }
}

export default Routing1;
