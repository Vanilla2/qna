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
    if (!token) return null;
    return JSON.parse(token);
}

const setAuthToken = (token: string) => {
    localStorage.setItem("jwt", JSON.stringify(token))
}

const initUser = async () => {
    const token = getAuthToken();
    if (token) {
        const res = await fetch(`${url}/user`, {
            method: "GET",
            headers: {
                'auth-token': token
            },
        });
        // console.log(res.status);
        if (res.status !== 200) {
            return null;
        }
        else {
            return (await res.json()).result;
        }
    }
    return null;
}

const login = async (email: string, password: string) => {
    const res = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify({email, password})
    });
    const data = await res.json();
    console.log(data);
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
    const token = getAuthToken();
    const res = await fetch(`${url}/questions`, {
        method: "GET",
        headers: {
            'auth-token': token
        },
    });
    const data = (await res.json()).result;
    return data;
}

const updownvote = async (question_id: string, type: string) => {
    const token = getAuthToken();
    const res = await fetch(`${url}/questions/votes`, {
        method: "PUT",
        headers: {
            'auth-token': token
        },
        body: JSON.stringify({
            question_id,
            type
        }),
    });
    return 
}

const addQuestion = async (title: string, contents: string) => {
    const token = getAuthToken();
    const res = await fetch(`${url}/questions`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json",
            'auth-token': token,
        },
        body: JSON.stringify({title, contents})
    });
    const data = await res.json();
    if (res.status !== 200) {
        throw data;
    }
    return data;
}

const addAnswer = async (question_id: string, contents: string) => {
    const token = getAuthToken();
    const res = await fetch(`${url}/questions/addAnswer`, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json",
            'auth-token': token,
        },
        body: JSON.stringify({question_id, contents})
    });
    const data = await res.json();
    if (res.status !== 200) {
        throw data;
    }
    return data;
}

const addReply = async (question_id: string, answer_id: string, contents: string) => {
    const token = getAuthToken();
    const res = await fetch(`${url}/questions/addReply`, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json",
            'auth-token': token,
        },
        body: JSON.stringify({question_id, answer_id, contents})
    });
    const data = await res.json();
    if (res.status !== 200) {
        throw data;
    }
    return data;
}

const setFavoriteAnswer = async (question_id: string, answer_id: string) => {
    const token = getAuthToken();
    const res = await fetch(`${url}/questions/favoriteAnswer`, {
        method: "PUT",
        headers: {
            'Content-Type': "application/json",
            'auth-token': token,
        },
        body: JSON.stringify({question_id, answer_id})
    });
    const data = await res.json();
    if (res.status !== 200) {
        throw data;
    }
    return data;
}

export {login, signup, initUser, getQuestions, updownvote, addQuestion, addAnswer, addReply, setFavoriteAnswer};
