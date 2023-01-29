import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import * as api from "../utils/api";
import { User } from "../utils/interfaces";

interface Data  {
    user: User | null | undefined,
    login: (username: string, password: string) => Promise<void>,
    signup: (username: string, password: string) => Promise<void>,
}

export const AuthContext = React.createContext <Data> ({
    user: null,
    login: () => new Promise (() => {}),
    signup: () => new Promise (() => {}),
});

export const AuthProvider = ({ children, ...props }: {children: any}) => {
    const [user, setUser] = useState <User | null | undefined> (undefined);
    const alert = useAlert();
    console.log(user);

    const init = async () => {
        try {   
            let data = await api.initUser();
            setUser(data);
        }
        catch(e) {
            setUser(null);
        }
    }

    useEffect(() => {
        init();
    }, []);

    const login =  async (username: string, password: string) => {
        try {
            await api.login(username, password);
            alert.success("You logged in successfully");
            init();
        }
        catch (e: any) {
            if (typeof e.errorMessage !== "string") {
                alert.error("Eroare!");
            }
            else alert.error(e.errorMessage);
        }
    }

    const signup = async (username: string, password: string) => {
        try {
            await api.signup(username, password);
            alert.success("Your account was created successfully");
            init();
        }
        catch(e: any) {
            if (typeof e.errorMessage !== "string") {
                alert.error("Eroare!");
            }
            else alert.error(e.errorMessage);
        }
    }

    // const logout = async () => {
    //     try {
    //         let {message} = await api.logout();
    //         alert.success(message);
    //         setUser(null);
    //     }
    //     catch(e:any) {
    //         if (typeof e.message !== "string") {
    //             alert.error("Eroare!");
    //         }
    //         else alert.error(e.message);
    //     }
    // }

    return (
        <AuthContext.Provider
            value={{ 
                user,
                login,
                signup
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};