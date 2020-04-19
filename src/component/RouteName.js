import React from 'react';
import Home from './Sidebar/NestedComponentDemo/Home';
import Profile from './Sidebar/NestedComponentDemo/Profile';
import About from './Sidebar/NestedComponentDemo/About';
import Portfolio from './Sidebar/NestedComponentDemo/Portfolio';
import Blogs from './Sidebar/NestedComponentDemo/Blogs';
import Contact from './Sidebar/NestedComponentDemo/Contact';
import Map from './Sidebar/NestedComponentDemo/Map';


import Target from './Sidebar/NestedComponentDemo/Target';
import Vission from './Sidebar/NestedComponentDemo/Vission';
import Goal from './Sidebar/NestedComponentDemo/Goal';
import Achievement from './Sidebar/NestedComponentDemo/Achievement';

export const RouteName = [
    {
        "id": 1,
        "featureName": "Home",
        "className": "fas fa-home",
        "path": "/home",
        "nested": [{
            "featureName": "Target",
            "path": "/target",
            "exact": true,
            "component": <Target />
        }, {
            "featureName": "Vission",
            "path": "/vission",
            "exact": true, "component": <Vission />
        }, {
            "featureName": "Goal",
            "path": "/goal",
            "exact": true,
            "component": <Goal />
        },
        {
            "featureName": "Achievement",
            "path": "/achievement",
            "exact": true,
            "component": <Achievement />
        }
        ],
        "exact": true,
        "component": <Home />
    },

    {
        "id": 2,
        "featureName": "Profile",
        "className": "fas fa-user",
        "path": "/profile",
        "nested": [{
            "featureName": "Target",
            "path": "/target",
            "exact": true,
            "component": <Target />

        }, {
            "featureName": "Vission",
            "path": "/vission",
            "exact": true, "component": <Vission />
        }, {
            "featureName": "Goal",
            "path": "/goal",
            "exact": true,
            "component": <Goal />
        },
        {
            "featureName": "Achievement",
            "path": "/achievement",
            "exact": true,
            "component": <Achievement />
        }
        ],
        "exact": true,
        "component": <Profile />
    },

    {
        "id": 3,
        "featureName": "About",
        "className": "fas fa-address-card",
        "path": "/about",
        "nested": [{
            "featureName": "Target",
            "path": "/target",
            "exact": true,
            "component": <Target />
        }, {
            "featureName": "Vission",
            "path": "/vission",
            "exact": true, "component": <Vission />
        }, {
            "featureName": "Goal",
            "path": "/goal",
            "exact": true,
            "component": <Goal />
        },
        {
            "featureName": "Achievement",
            "path": "/achievement",
            "exact": true,
            "component": <Achievement />
        }
        ],
        "exact": true,
        "component": <About />
    },

    {
        "id": 4,
        "featureName": "Portfolio",
        "className": "fas fa-project-diagram",
        "path": "/portfolio",
        "nested": [{
            "featureName": "Target",
            "path": "/target",
            "exact": true,
            "component": <Target />
        }, {
            "featureName": "Vission",
            "path": "/vission",
            "exact": true, "component": <Vission />
        }, {
            "featureName": "Goal",
            "path": "/goal",
            "exact": true,
            "component": <Goal />
        },
        {
            "featureName": "Achievement",
            "path": "/achievement",
            "exact": true,
            "component": <Achievement />
        }
        ],
        "exact": true,
        "component": <Portfolio />
    },

    {
        "id": 5,
        "featureName": "Blogs",
        "className": "fas fa-blog",
        "path": "/blogs",
        "nested": [{
            "featureName": "Target",
            "path": "/target",
            "exact": true,
            "component": <Target />
        }, {
            "featureName": "Vission",
            "path": "/vission",
            "exact": true, "component": <Vission />
        }, {
            "featureName": "Goal",
            "path": "/goal",
            "exact": true,
            "component": <Goal />
        },
        {
            "featureName": "Achievement",
            "path": "/achievement",
            "exact": true,
            "component": <Achievement />
        }
        ],
        "exact": true,
        "component": <Blogs />
    },

    {
        "id": 6,
        "featureName": "Contact",
        "className": "fas fa-address-book",
        "path": "/contact",
        "nested": [{
            "featureName": "Target",
            "path": "/target",
            "exact": true,
            "component": <Target />
        }, {
            "featureName": "Vission",
            "path": "/vission",
            "exact": true, "component": <Vission />
        }, {
            "featureName": "Goal",
            "path": "/goal",
            "exact": true,
            "component": <Goal />
        },
        {
            "featureName": "Achievement",
            "path": "/achievement",
            "exact": true,
            "component": <Achievement />
        }
        ],
        "exact": true,
        "component": <Contact />
    },

    {
        "id": 7,
        "featureName": "Map",
        "className": "fas fa-map-pin",
        "path": "/map",
        "nested": [{
            "featureName": "Target",
            "path": "/target",
            "exact": true,
            "component": <Target />
        }, {
            "featureName": "Vission",
            "path": "/vission",
            "exact": true, "component": <Vission />
        }, {
            "featureName": "Goal",
            "path": "/goal",
            "exact": true,
            "component": <Goal />
        },
        {
            "featureName": "Achievement",
            "path": "/achievement",
            "exact": true,
            "component": <Achievement />
        }
        ],
        "exact": true,
        "component": <Map />
    }



];

const featureArray = ["Home", "Profile", "About", "Portfolio", "Blogs", "Contact", "Map"];


export const routes = [];


featureArray.map((val1, i) => {
    return RouteName.map((val2, index) => {
        if (RouteName[index].featureName === featureArray[i]) {
            return routes.push(RouteName[index]);
        }
    })
})


