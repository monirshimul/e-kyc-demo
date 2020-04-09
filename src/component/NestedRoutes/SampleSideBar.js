import React from 'react';
import Topics from './Topics';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { routes } from '../RouteName';

function SampleSideBar() {
    return (
        <Router>
            <div>

                {routes.map((r, i) => (
                    <ul key={i}>
                        <li>
                            <Link className="btn btn-primary" to={r.path}>{r.featureName}</Link>
                        </li>
                    </ul>

                ))}


                <hr />

                <Switch>
                    {routes.map((r, i) => (
                        <Route
                            path={r.path}
                        >
                            <Topics />
                        </Route>

                    ))}

                </Switch>
            </div>
        </Router>
    )
}

export default SampleSideBar
