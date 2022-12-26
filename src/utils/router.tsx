import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../components/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
]);

export default router;