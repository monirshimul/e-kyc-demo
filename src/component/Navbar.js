import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './RouteName';

const Navbar = () => {
    return (

        <div>
            <div>
                    {routes.map((route, index) => (
                        <div key={index}>
                            <ul>
                                <li key={index}>
                                    <Link to={route.path}>{route.featureName}</Link>
                                </li>
                            </ul>
                        </div>

                    ))
                    }
                </div>
                </div>

            

    )
}
export default Navbar;