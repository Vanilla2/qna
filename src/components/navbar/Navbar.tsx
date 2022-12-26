import React from 'react'
import "./Navbar.scss";

export interface Props {
    [key: string]: any
}

const Navbar = (props: Props) => {
    const auth = false;

    return (
        <div className = "navbar">
            <div className = "content">
                <p className = "logo">LOGO</p>
                <div>
                    <input type = "text" className = "search default"/>
                </div>
                {auth ? 
                    <div className = "logged">
                        
                    </div> :
                    <div className = "notlogged">
                        <button className = "default">Log in</button>
                        <button className = "default accent">Sign up</button>
                    </div>
                }
            </div>
        </div>
    );
}

export default Navbar;