import { User } from "./interfaces";
const url = "http://localhost:8080/api";

let dummyRequest = new Promise((resolve, reject) =>  {
// the function is executed automatically when the promise is constructed

// after 1 second signal that the job is done with the result "done"
setTimeout(() => resolve("done"), 1000);
});

const getAuthToken = () => {
    const token = localStorage.getItem("jwt");
    return token;
}

const setAuthToken = (token: string) => {
    localStorage.setItem("jwt", JSON.stringify(token))
}

const initUser = async () => { // send the token to the server when loading the page
    return await dummyRequest;
}

const login = async (username: string, password: string) => {
    const res = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({username, password})
    });
    const data = await res.json();
    if (res.status !== 200) {
        throw data;
    }
    console.log(data);
    setAuthToken(data.result.token);
    return data;
}

const signup = async (username: string, password: string) => {
    return await dummyRequest;
}

export {login, signup, initUser};
