import { getAccessToken } from "../auth/tokenProvider";
import useAuthStore from "../store/authStore";

export const setupInterceptors = (api) => {
    api.interceptors.request.use(
        (config) => {
            const token = getAccessToken();

            config.headers = config.headers ?? {};

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        },
        (error) => Promise.reject(error)
    );

    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                useAuthStore.getState().logout();
                window.location.href = "/login";
            }

            return Promise.reject(error);
        }
    );
};