import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";
import ErrorPage from "../components/ErrorPage";
import Profile from "../components/profile/Profile";
import { getQuestions } from "./api";

const buildElement = (props: any) => (
    <>
        <Navbar/>
        <div className = "content">
            {props}
        </div>
    </>
)


const router = createBrowserRouter([
    {
        path: "/",
        element: buildElement(<Home/>),
        errorElement: <ErrorPage/>,
        loader: getQuestions,
    },
    {
        path: "/profile/:id",
        element: buildElement(<Profile/>)
    }
]);

export default router;