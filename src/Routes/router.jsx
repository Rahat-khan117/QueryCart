import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOut/MainLayout";
import Home from "../Pages/Home";
import Queries from "../Pages/Queries";
import RecForMe from "../Pages/RecForMe";
import MyQueries from "../Pages/MyQueries";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import MyRec from "../Pages/MyRec";
import Error from "../Pages/Error";
import AddQueries from "../Pages/AddQueries";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: ()=> fetch('../recentQuery.json')
            
        },
        {
           path:'/queries',
           element:<Queries></Queries>,
           
        },
        {
            path:'/recForMe',
            element:<RecForMe></RecForMe>
        },
        {
            path:'/myQueries',
            element:<MyQueries></MyQueries>,
            
    
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/myRec',
            element:<MyRec></MyRec>,
            
        },
        {
            path:'/addQueries',
            element:<AddQueries></AddQueries>
        }
      ]
    }
])