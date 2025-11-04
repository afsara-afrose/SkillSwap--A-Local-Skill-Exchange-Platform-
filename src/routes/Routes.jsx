import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import SignuP from "../Pages/SignuP.JSX";
import Home from "../Pages/Home";
import SkillDetails from "../Pages/SkillDetails";

 export const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
        {
            index:true,
            element:<Home></Home>,
        },
        {
            path:'/skillDetails',
            element:<SkillDetails></SkillDetails>,

        },
        {
            path:'/myProfile',
            element:<MyProfile></MyProfile>,
        },
        {
            path:'/Login',
            element:<Login></Login>,
        },
        {
            path:'/signup',
            element:<SignuP></SignuP>,
        },
    ]
  },
]);
