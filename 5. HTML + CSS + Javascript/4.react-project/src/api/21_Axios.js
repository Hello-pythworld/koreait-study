import axiosInstance from "../config/AxiosConfig";

export const getUser = async () => {
    try {
        const response = await axiosInstance.put("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch (err) {
        console.error("통신 실패 : ", err);
    }
}