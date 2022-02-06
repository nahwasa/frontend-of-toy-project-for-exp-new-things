import {API_BASE_URL} from "../config/app-config";
import axios from "axios";

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";

const getCallHeaders = () => {
    let headers = {
        "Content-Type": "application/json"
    };

    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (accessToken && accessToken != null) {
        headers.Authorization = `Bearer ${accessToken}`;
    }

    return headers;
}

export const call = (api, method, request={}) =>
    axios({
        baseURL: API_BASE_URL,
        url: api,
        method: method,
        data: request,
        headers: getCallHeaders()
    }).catch((e) => {
        console.log("error : " + e);
        if (e.response.status === 403) {
            window.location.href = "/login";
        }
    });

export const signup = (userDTO) => {
    (async () => {
        let response = await call("/auth/signup", "POST", userDTO);
        console.log("signup response : " + response);

        if (response) {
            window.location.href = "/login";
        }
    })();
}

export const signin = (userDTO) => {
    (async () => {
        let response = await call("/auth/signin", "POST", userDTO);
        console.log("response : ", response);

        if (response?.data?.token) {
            localStorage.setItem(ACCESS_TOKEN_KEY, response.data.token);
            window.location.href = "/";
        } else {
            alert("이메일 혹은 패스워드를 확인하세요.");
        }
    })();
}

export const logout = () => {
    localStorage.setItem(ACCESS_TOKEN_KEY, null);
    window.location.href = "/login";
}