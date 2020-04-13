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
        "featureName": "Target",
        "path": "/target",
        "exact": true,
        "component": <Target />
    },
    {
        "id": 2,
        "featureName": "Vission",
        "path": "/vission",
        "exact": true, "component": <Vission />
    },
    {
        "id": 3,
        "featureName": "Goal",
        "path": "/goal",
        "exact": true,
        "component": <Goal />
    },

    {
        "id": 4,
        "featureName": "Achievement",
        "path": "/achievement",
        "exact": true,
        "component": <Achievement />
    }
];

const featureArray = ["Target", "Vission", "Goal", "Achievement"];


export const nestedRoutes = [];


featureArray.map((val1, i) => {
    return RouteName.map((val2, index) => {
        if (RouteName[index].featureName === featureArray[i]) {
            return nestedRoutes.push(RouteName[index]);
        }
    })
})


