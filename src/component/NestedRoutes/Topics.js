import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { routes } from '../RouteName';

function Topics() {
    let { path, url } = useRouteMatch();
    console.log(path, url)

    return (
        <div>
            <h2>Topics</h2>
            {routes.map((r, i) => (
                <ul key={i}>
                    <li>
                        <Link to={`${url}${r.path}`}>{r.path}</Link>
                    </li>

                </ul>
            ))}


            <Switch>
                {routes.map((r, i) => (
                    <Route key={i} exact={r.exact} path={`${path}${r.path}`}>
                        {r.component}
                    </Route>
                ))}

            </Switch>
        </div>
    );
}

export default Topics
