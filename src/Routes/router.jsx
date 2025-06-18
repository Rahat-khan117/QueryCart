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
import UpdateQ from "../Pages/UpdateQ";
import QueryDetails from "../Pages/QueryDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../recentQuery.json"),
      },
      {
        path: "/queries",
        element: <Queries></Queries>,
        loader: () => fetch("https://11-server-side.vercel.app/createQuery"),
      },
      {
        path: "/recForMe",
        element: <RecForMe></RecForMe>,
      },
      {
        path: "/myQueries",
        element: <MyQueries></MyQueries>,
        loader: () => fetch("https://11-server-side.vercel.app/createQuery"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myRec",
        element: <MyRec></MyRec>,
        loader: () => fetch("https://11-server-side.vercel.app/createRec"),
      },
      {
        path: "/addQueries",
        element: <AddQueries></AddQueries>,
      },
      {
        path: "/updateQ/:id",
        element: <UpdateQ></UpdateQ>,
        loader: () => fetch("https://11-server-side.vercel.app/createQuery"),
      },
      {
        path: "/queryDetails/:id",
        element: <QueryDetails />,
        loader: async () => {
          const [queryRes, recRes] = await Promise.all([
            fetch("https://11-server-side.vercel.app/createQuery"),
            fetch("https://11-server-side.vercel.app/createRec"),
          ]);

          const queries = await queryRes.json();
          const recData = await recRes.json();

          return { queries, recData };
        },
      },
    ],
  },
]);
