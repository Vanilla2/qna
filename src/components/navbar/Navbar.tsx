import React, {useContext, useState} from 'react'
import { Modal } from 'react-responsive-modal';
import "./Navbar.scss";
import { AuthContext } from '../../context/AuthContext';
import { Link, useHref } from 'react-router-dom';

export interface Props {
    [key: string]: any
}

const LoginModal = ({modal, setModal, login} : {modal: boolean, setModal: (x: any) => void, login: (x: string, y: string) => void}) => {
    const [data, setData] = useState({email: "", password: ""});
    const [loading, setLoading] = useState(false);

    const updateData = (key: string) => (x: any) => {
        setData({...data, [key]: x.target.value});
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        await login(data.email, data.password);
        setModal(false);
        setLoading(false);
        setData({email: "", password: ""});
    }

    return (
        <Modal closeIcon = {<i className = "fas fa-times"></i>}
        classNames = {{modal: "auth-modal"}} open={modal} onClose={() => setModal(false)} center>
            <div className = "login auth">
                <p className = "title">Login</p>
                <form onSubmit = {handleSubmit}>
                    <p>Email:</p>
                    <input className = "default" value = {data.email} onChange = {updateData("email")} type = "text"/>
                    <p>Password:</p>
                    <input className = "default" value = {data.password} onChange = {updateData("password")} type = "password"/>
                    <input disabled = {loading} className = "default" type = "submit" value = "Login"/>
                </form>
                {/* <p onClick = {forgot} className = "sub lk">Am uitat parola</p> */}
            </div>
        </Modal>
    )
}

const SignupModal = ({modal, setModal, signup} : {modal: boolean, setModal: (x: any) => void, signup: (x: string, y:string) => void}) => {
    const [data, setData] = useState({email: "", password: ""});
    const [loading, setLoading] = useState(false);
    
    const updateData = (key: string) => (x: any) => {
        setData({...data, [key]: x.target.value});
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);
        await signup(data.email, data.password);
        // setModal(false);
        setLoading(false);
        setData({email: "", password: ""});
    }

    return (
        <Modal closeIcon = {<i className = "fas fa-times"></i>}
        classNames = {{modal: "auth-modal"}} open={modal} onClose={() => setModal(false)} center>
            <div className = "login auth">
                <p className = "title">Sign Up</p>
                <form onSubmit = {handleSubmit}>
                    <p>Email:</p>
                    <input className = "default" value = {data.email} onChange = {updateData("email")} type = "text"/>
                    <p>Password:</p>
                    <input className = "default" value = {data.password} onChange = {updateData("password")} type = "password"/>
                    <input disabled = {loading} className = "default" type = "submit" value = "Create account"/>
                </form>
            </div>
        </Modal>
    )
}

const Navbar = (props: Props) => {
    const [modal, setModal] = useState <"login" | "signup" | false> (false);
    const {user, login, signup} = useContext(AuthContext);

    return (
        <>
            <div className = "navbar">
                <LoginModal modal = {modal === "login"} setModal = {setModal} login = {login}/>
                <SignupModal modal = {modal === "signup"} setModal = {setModal} signup = {signup}/>
                <div className = "content">
                    <Link to = "/" className = "logo">Home</Link>
                    <div>
                        <input type = "text" className = "search default"/>
                    </div>
                    {user ? 
                        <div className = "logged">
                            <Link to = {`/profile/${user.user_id}`}>
                                Profile
                            </Link>
                        </div> :
                        <div className = "notlogged">
                            <button onClick = {() => setModal("login")} className = "default">Log in</button>
                            <button onClick = {() => setModal("signup")} className = "default accent">Sign up</button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Navbar;