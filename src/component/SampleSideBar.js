import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { routes } from './RouteName';

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function SampleSideBar() {
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
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function Topics() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
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

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}
