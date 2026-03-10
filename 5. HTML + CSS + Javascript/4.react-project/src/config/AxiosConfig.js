import axios from "axios";

const axiosInstance = axios.create({
    timeout: 10000, // 요청 최대시간(타임아웃)을 10초로 설정
    headers: {
        "Content-Type": "application/json" // 요청 형식을 JSON으로 설정
    }
})

export default axiosInstance;