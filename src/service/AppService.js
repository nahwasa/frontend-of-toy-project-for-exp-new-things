import {API_BASE_URL} from "../app-config";
import axios from "axios";

export const call = (api, method, request={}) =>
    axios({
            baseURL: API_BASE_URL,
            url: api,
            method: method,
            body: request
        });
