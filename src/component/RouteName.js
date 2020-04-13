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





import logo1 from './Sidebar/image/undraw_performance_overview_p9bm.svg'
import logo2 from './Sidebar/image/undraw_pcsocial_16rw.svg'
import logo3 from './Sidebar/image/undraw_media_player_ylg8.svg'
import logo4 from './Sidebar/image/undraw_code_thinking_1jeh.svg'
import logo5 from './Sidebar/image/undraw_logo_design_bjnx.svg'
import logo6 from './Sidebar/image/undraw_online_test_gba7.svg'
import logo7 from './Sidebar/image/undraw_progressive_app_m9ms.svg'
import logo8 from './Sidebar/image/undraw_web_search_eetr.svg'


// export const login = [
//     {
//         "path": "/",
//         "component": <Login />
//     }
// ]

// export const homeRoute = [

//     {
//         "path": "/dashboard",
//         "component": <Dashboard />
//     }
// ]


{/* <img src={Logo} alt="Smiley face" height="50px" width="120px" /> */ }
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


