import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dy236wmbzq4as.cloudfront.net',
    timeout: 10000,
    header: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance;