import React from 'react';
import Home from './Home';
import HomeName from './HomeName';
import HomePc from './HomePc';
import Offices from './Offices';
import OfficePc from './OfficePc';
import Designation from './Designation';
import Ekyc from './Ekyc';
import Dashboard from './Sidebar/Dashboard';
import Login from './Login/login';
import DropDown from './DropDown/DropDown'
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
        "logo": {
            "src": logo1,
            "alt": "Smile",
            "height": "40px",
            "width": "40px"
        },
        "path": "/home",
        "nested": [{
            "featureName": "Create",
            "path": "/homepc",
            "exact": true,
            "component": <Designation />
        }, {
            "featureName": "Update",
            "path": "/homepc",
            "exact": true, "component": <Ekyc />
        }, {
            "featureName": "Delete",
            "path": "/homepc",
            "exact": true,
            "component": <DropDown />
        }],
        "exact": true,
        "component": <Home />
    },

    {
        "id": 2,
        "featureName": "HomePc",
        "logo": {
            "src": logo2,
            "alt": "Smile",
            "height": "40px",
            "width": "40px"
        },
        "path": "/homepc",
        "nested": [{
            "featureName": "Delete",
            "path": "/homepc",
            "exact": true,
            "component": <DropDown />
        }, {
            "featureName": "Update",
            "path": "/homepc",
            "exact": true,
            "component": <HomePc />
        }, {
            "featureName": "Create",
            "path": "/homepc",
            "exact": true,
            "component": <Designation />
        }],
        "exact": true,
        "component": <HomePc />
    },

    {
        "id": 3,
        "featureName": "HomeName",
        "logo": {
            "src": logo3,
            "alt": "Smile",
            "height": "40px",
            "width": "40px"
        },
        "path": "/homename",
        "nested": [{
            "featureName": "Update",
            "path": "/homepc",
            "exact": true,
            "component": <DropDown />
        }, {
            "featureName": "Create",
            "path": "/homepc",
            "exact": true,
            "component": <Home />
        }, {
            "featureName": "Delete",
            "path": "/homepc",
            "exact": true,
            "component": <HomeName />
        }],
        "exact": true,
        "component": <HomeName />
    },

    {
        "id": 4,
        "featureName": "Offices",
        "logo": {
            "src": logo4,
            "alt": "Smile",
            "height": "40px",
            "width": "40px"
        },
        "path": "/office",
        "nested": [{
            "featureName": "No Update",
            "path": "/homepc",
            "exact": true,
            "component": <DropDown />
        }, {
            "featureName": "No Create",
            "path": "/homepc",
            "exact": true,
            "component": <Offices />
        }, {
            "featureName": "No Delete",
            "path": "/homepc",
            "exact": true,
            "component": <OfficePc />
        }],
        "exact": true,
        "component": <Offices />
    },

    {
        "id": 5,
        "featureName": "OfficePc",
        "logo": {
            "src": logo5,
            "alt": "Smile",
            "height": "40px",
            "width": "40px"
        },
        "path": "/officepc",
        "nested": [{
            "featureName": "Will Mount",
            "path": "/homepc",
            "exact": true,
            "component": <DropDown />
        }, {
            "featureName": "Did Mount",
            "path": "/homepc",
            "exact": true,
            "component": <Ekyc />
        }, {
            "featureName": "Did Update",
            "path": "/homepc",
            "exact": true,
            "component": <Designation />
        }],
        "exact": true,
        "component": <OfficePc />
    },

    {
        "id": 6,
        "featureName": "Designation",
        "logo": {
            "src": logo6,
            "alt": "Smile",
            "height": "40px",
            "width": "40px"
        },
        "path": "/designation",
        "nested": [{
            "featureName": "Did UnMount",
            "path": "/homepc",
            "exact": true,
            "component": <Designation />
        }, {
            "featureName": "Will UnMount",
            "path": "/homepc",
            "exact": true,
            "component": <Ekyc />
        }, {
            "featureName": "Update",
            "path": "/homepc",
            "exact": true,
            "component": <DropDown />
        }],
        "exact": true,
        "component": <Designation />
    },

    {
        "id": 7,
        "featureName": "Ekyc",
        "logo": {
            "src": logo7,
            "alt": "Smile",
            "height": "40px",
            "width": "40px"
        },
        "path": "/Ekyc",
        "nested": [{
            "featureName": "Access Denied",
            "path": "/homepc",
            "exact": true,
            "component": <Designation />
        }, {
            "featureName": "WelCome",
            "path": "/homepc",
            "exact": true,
            "component": <Ekyc />
        }, {
            "featureName": "Hello World",
            "path": "/homepc",
            "exact": true,
            "component": <DropDown />
        }],
        "exact": true,
        "component": <Ekyc />
    },
    {
        "id": 8,
        "featureName": "DropDown",
        "logo": {
            "src": logo8,
            "alt": "Smile",
            "height": "40px",
            "width": "40px"
        },
        "path": "/DropDown",
        "nested": [{
            "featureName": "There",
            "path": "/homepc",
            "exact": true,
            "component": <DropDown />
        }, {
            "featureName": "Where",
            "path": "/homepc",
            "exact": true,
            "component": <Ekyc />
        }, {
            "featureName": "Other",
            "path": "/homepc",
            "exact": true,
            "component": <Designation />
        }],
        "exact": true,
        "component": <DropDown />
    }


];

const featureArray = ["Home", "HomePc", "HomeName", "Designation", "Offices", "Ekyc", "OfficePc", "DropDown"];


export const routes = [];


// for(let j = 0; j< featureArray.length; j++){
// for(let i =0; i<RouteName.length; i++ ){
//   if(RouteName[i].featureName === featureArray[j]){
//     routes.push(RouteName[i]);
//   }
// }
// }

featureArray.map((val1, i) => {
    return RouteName.map((val2, index) => {
        if (RouteName[index].featureName === featureArray[i]) {
            return routes.push(RouteName[index]);
        }
    })
})


