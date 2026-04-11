import axios from "axios";

const BASE_URL = "/api/find-password";

export const sendCode = async (data) => {
    const res = await axios.post(`${BASE_URL}/send-code`, data);
    return res.data;
};

export const verifyCode = async (data) => {
    const res = await axios.post(`${BASE_URL}/verify-code`, data);
    return res.data;
};

export const resetPassword = async (data) => {
    const res = await axios.post(`${BASE_URL}/reset-password`, data);
    return res.data;
};