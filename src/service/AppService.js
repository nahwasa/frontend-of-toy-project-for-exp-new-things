import {API_BASE_URL} from "../app-config";
import axios from "axios";

export const call = (api, method, request={}) =>
    axios({
        baseURL: API_BASE_URL,
        url: api,
        method: method,
        data: request
    }).catch((e) => {
        alert("로그인이 필요합니다.");
        if (e.response.status === 403) {
            window.location.href = "/login";
        }
    });

