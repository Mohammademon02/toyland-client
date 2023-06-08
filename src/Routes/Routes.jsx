import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/errorPage/errorPage";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import ToyDetails from "../pages/Home/SingleToy/toyDetails";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import PrivateRoutes from "./privateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "addToy",
                element: <PrivateRoutes><AddToy></AddToy></PrivateRoutes>
            },
            {
                path: "allToys",
                element: <AllToys></AllToys>,
                loader: () => fetch('https://toyland-server-mohammademon02.vercel.app/totalToys')
            }
            ,
            {
                path: "myToys",
                element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
            }
            ,
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: "details/:id",
                element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://toyland-server-mohammademon02.vercel.app/toy/${params.id}`)
            },
            {
                path: "myToys/:id",
                element: <PrivateRoutes><UpdateToy></UpdateToy></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://toyland-server-mohammademon02.vercel.app/toy/${params.id}`)
            }
        ]
    },
]);

export default router;