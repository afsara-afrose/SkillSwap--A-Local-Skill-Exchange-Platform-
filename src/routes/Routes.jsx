import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import MyProfile from "../Pages/MyProfile";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import SkillDetails from "../Pages/SkillDetails";
import AuthLayout from "../Layout/AuthLayout";
import SignUp from "../Pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import ViewDetails from "../Pages/ViewDetails";
import BookSession from "../Pages/BookSession";



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
            path:'/skillDetail/:skillId',
            element:<PrivateRoutes>
              <SkillDetails></SkillDetails>
            </PrivateRoutes>,

        },
        {
          path:'/viewDetails/:skillId',
          element:<PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>,
        },
        {
          path:'/book-session/:skillId',
          element:<BookSession></BookSession>
        },
        {
            path:'/myProfile',
            element:<MyProfile></MyProfile>,
        },
    ] 
  },

  {
    path:"/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/login',
        element:<Login></Login>,
      },
      {
        path:'/auth/signup',
        element:<SignUp></SignUp>,
      },
      {
        path:'/auth/logout',
        element:<Login></Login>,
      },
    ]
  },

]);
