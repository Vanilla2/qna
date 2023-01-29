import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Home from "../components/home/Home";
import Navbar from "../components/navbar/Navbar";
import ErrorPage from "../components/ErrorPage";
import Profile from "../components/profile/Profile";
import { getQuestions } from "./api";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import AddQuestion from "../components/addQuestion/AddQuestion";
import Question from "../components/question/QuestionPage";
import QuestionPage from "../components/question/QuestionPage";

const buildElement = (props: any) => (
    <>
        <Navbar/>
        <div className = "content">
            {props}
        </div>
    </>
)

const Protect = (props: any) => {
    const {user} = useContext(AuthContext);
    
    if (user === undefined) return <>wait</>

    return (!user ? <Navigate to = "/login"/> : props.element);
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Protect element = {buildElement(<Home/>)}/>,
        errorElement: <ErrorPage/>,
        loader: getQuestions,

    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <Signup/>
    },
    {
        path: "/profile/:id",
        element: buildElement(<Profile/>)
    },
    {
        path: "/add-question",
        element: <Protect element = {buildElement(<AddQuestion/>)}/>
    },
    {
        path: "/question/:id",
        element: <Protect element = {buildElement(<QuestionPage/>)}/>,
        loader: getQuestions,
    }
]);

export default router;