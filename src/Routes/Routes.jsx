import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/errorPage/errorPage";


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
            path: "/login",
            element: <Login></Login>
           },
           {
            path: "/register",
            element: <Register></Register>
           },
           {
            path: "blog",
            element: <Blog></Blog>
           },
        ]
    },
]);

export default router;