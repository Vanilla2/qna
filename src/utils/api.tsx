import { questions } from "./dummyData";
import { User } from "./interfaces";
const url = "http://localhost:8080/api";

const parseJwt = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

const getAuthToken = () => {
    const token = localStorage.getItem("jwt");
    return token;
}

const setAuthToken = (token: string) => {
    localStorage.setItem("jwt", JSON.stringify(token))
}

const initUser = async () => {
    const token = getAuthToken();
    if (token) return parseJwt(token);
    return null;
}

const login = async (email: string, password: string) => {
    const res = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({email, password})
    });
    const data = await res.json();
    if (res.status !== 200) {
        throw data;
    }
    setAuthToken(data.result.token);
    return data;
}

const signup = async (email: string, password: string) => {
    const res = await fetch(`${url}/register`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({email, password})
    });
    const data = await res.json();
    if (res.status !== 200) {
        throw data;
    }
    await login(email, password);
    return data;
}

const getQuestions = async () => {
    return questions;
}

export {login, signup, initUser, getQuestions};
