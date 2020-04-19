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





const allRoutes = [
    {
        items: {
            "id": 1,
            "featureName": "Home",
            "className": "fas fa-home",
            "path": "/home",
            "exact": true,
            "component": <Home />
        },
        nested: [
            {
                items: {
                    "featureName": "Target",
                    "path": "/target",
                    "exact": true,
                    "component": <Target />
                }


            },
            {
                items: {
                    "featureName": "Vission",
                    "path": "/vission",
                    "exact": true,
                    "component": <Vission />
                }
            }

        ]
    },



    {
        items: {
            "id": 2,
            "featureName": "Profile",
            "className": "fas fa-user",
            "path": "/profile",
            "exact": true,
            "component": <Profile />
        },
        nested: [
            {
                items: {
                    "featureName": "Target",
                    "path": "/target",
                    "exact": true,
                    "component": <Target />
                }

            },
            {
                items: {
                    "featureName": "Vission",
                    "path": "/vission",
                    "exact": true,
                    "component": <Vission />
                }
            },
            {
                items: {
                    "featureName": "Goal",
                    "path": "/goal",
                    "exact": true,
                    "component": <Goal />
                }
            },
            {
                items: {
                    "featureName": "Achievement",
                    "path": "/achievement",
                    "exact": true,
                    "component": <Achievement />
                }
            },

        ]
    },



    {
        items: {
            "id": 3,
            "featureName": "About",
            "className": "fas fa-address-card",
            "path": "/about",
            "exact": true,
            "component": <About />
        }
    },
    {
        items: {
            "id": 4,
            "featureName": "Portfolio",
            "className": "fas fa-project-diagram",
            "path": "/portfolio",
            "exact": true,
            "component": <Portfolio />
        },
        nested: [
            {
                items: {
                    "featureName": "Target",
                    "path": "/target",
                    "exact": true,
                    "component": <Target />
                }

            },
            {
                items: {
                    "featureName": "Vission",
                    "path": "/vission",
                    "exact": true,
                    "component": <Vission />
                }
            },
            {
                items: {
                    "featureName": "Goal",
                    "path": "/goal",
                    "exact": true,
                    "component": <Goal />
                }
            }


        ]
    },


    {
        items: {
            "id": 5,
            "featureName": "Blogs",
            "className": "fas fa-blog",
            "path": "/blogs",
            "exact": true,
            "component": <Blogs />
        },
        nested: [
            {
                items: {
                    "featureName": "Target",
                    "path": "/target",
                    "exact": true,
                    "component": <Target />
                }

            }

        ]
    },


    {
        items: {
            "id": 6,
            "featureName": "Contact",
            "className": "fas fa-address-book",
            "path": "/contact",
            "exact": true,
            "component": <Contact />
        },
        nested: [
            {
                items: {
                    "featureName": "Target",
                    "path": "/target",
                    "exact": true,
                    "component": <Target />
                }

            },
            {
                items: {
                    "featureName": "Vission",
                    "path": "/vission",
                    "exact": true,
                    "component": <Vission />
                }
            }


        ]
    },


    {
        items: {
            "id": 7,
            "featureName": "Map",
            "className": "fas fa-map-pin",
            "path": "/map",
            "exact": true,
            "component": <Map />
        },
        nested: [
            {
                items: {
                    "featureName": "Target",
                    "path": "/target",
                    "exact": true,
                    "component": <Target />
                }

            },
            {
                items: {
                    "featureName": "Vission",
                    "path": "/vission",
                    "exact": true,
                    "component": <Vission />
                }
            },
            {
                items: {
                    "featureName": "Goal",
                    "path": "/goal",
                    "exact": true,
                    "component": <Goal />
                }
            },

        ]
    },
];







export function getFlatRouteArray(routes) {
    let flattenRoutes = [];
    function recursiveFlat(objArr) {
        for (let i = 0; i < objArr.length; i++) {
            if (objArr[i] === undefined) continue;
            flattenRoutes.push(objArr[i].items);
            if ("nested" in objArr[i]) {
                recursiveFlat(objArr[i].nested);
            }
        }
        return;
    }
    recursiveFlat(routes);
    return flattenRoutes;
}



export function pruneRouteArray(featureArray) {
    let pruneRoutes = Object.assign([], allRoutes);
    function recursivePrune(objArr) {
        for (let i = 0; i < objArr.length; i++) {
            if ('nested' in objArr[i]) {
                recursivePrune(objArr[i].nested);
                if (objArr[i].nested.every(i => i === undefined)) {
                    objArr[i] = undefined;
                }
            }
            else {
                if (featureArray.indexOf(objArr[i].items.featureName) === -1) {
                    objArr[i] = undefined;
                }
            }
        }
        return;
    }
    recursivePrune(pruneRoutes);
    return pruneRoutes;
}

// console.log(getFlatRouteArray(allRoutes))
//console.dir(pruneRoutes, {depth: null});

// const pr = pruneRouteArray(['Target', 'Vission', 'Goal']);
// console.dir(pr, { depth: null });
// flatArr = getFlatRouteArray(pr);
// console.log(flatArr);




