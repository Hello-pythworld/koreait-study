import axios from "axios";
import { setupInterceptors } from "./interceptor";

const api = axios.create({
    baseURL: "https://d1m2mdh79i68qn.cloudfront.net/api",
    headers: {
        "Content-Type": "application/json",
    },
});

setupInterceptors(api);

export default api;