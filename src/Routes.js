import React from "react";
import News from './Components/News/index'
import Profile from './Components/Profile/index'
import Home from './Components/Home/index'
const routes = [
    {
        path: "/profile",
        component: Profile
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/news",
        component: News
    }
];
export default routes;
