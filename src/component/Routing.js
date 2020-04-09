import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { routes } from '../RouteName';
import Home from './Home';
import HomeName from './HomeName';
import HomePc from './HomePc';
import Offices from './Offices';
import OfficePc from './OfficePc';
import Designation from 'Designation';
import { arr1 } from './Routingfile';



export default function NestingExample() {
  const roles = arr1[0].role;
  const roleFeatures = arr1[0].features;
  // console.log(roles);
  const routes = [];
  console.log(roleFeatures);

  for (let i = 0; i < roleFeatures.length; i++) {
    if (roleFeatures === 'Home' || 'HomePc') {
      const obj = {
        name: roleFeatures[i],
        path: '/' + roleFeatures[i].toLocaleLowerCase(),
        exact: true,
        component: roleFeatures[i].toLocaleLowerCase(),

        main: () => <Home />
      }
      routes.push(obj);
    }
  }


  console.log(routes);

  return (

    <Router>
      <div>
        <div>
          {routes.map((route, index) => (
            <div key={index}>
              <ul>
                <li key={index}>
                  <Link to={route.path}>{route.name}</Link>
                </li>
              </ul>
            </div>

          ))
          }
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>

  );
}

