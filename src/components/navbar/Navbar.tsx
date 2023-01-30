import React, {useContext, useState} from 'react'
import { Modal } from 'react-responsive-modal';
import "./Navbar.scss";
import { AuthContext } from '../../context/AuthContext';
import { Link, useHref } from 'react-router-dom';

export interface Props {
    [key: string]: any
}

const Navbar = (props: Props) => {
    const [modal, setModal] = useState <"login" | "signup" | false> ("login");
    const {user, login, signup} = useContext(AuthContext);

    return (
        <>
            <div className = "navbar">
                <div className = "content">
                    <Link to = "/" className = "logo">Home</Link>
                    {/* <div>
                        <input type = "text" className = "search default"/>
                    </div> */}
                    {user ? 
                        <div className = "logged">
                            <Link to = {`/add-question`}>
                                Add Question
                            </Link>
                            <Link to = {`/profile/${user.id}`}>
                                Profile
                            </Link>
                            <Link to = {`/logout`}>
                                Logout
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