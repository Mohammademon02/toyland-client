import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/errorPage/errorPage";
import AllToys from "../pages/AllToys/AllToys";
import AddToy from "../pages/AddToy/AddToy";
import ToyDetails from "../pages/Home/SingleToy/toyDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main> ,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
           {
            path: "/",
            element: <Home></Home>
           },
           {
            path: "addToy",
            element: <AddToy></AddToy>
           },
           {
            path: "allToys",
            element: <AllToys></AllToys>
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
            element: <ToyDetails></ToyDetails>,
            loader:({params}) => fetch(`http://localhost:5000/toy/${params.id}`)
           }
        ]
    },
]);

export default router;