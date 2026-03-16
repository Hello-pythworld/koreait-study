import axios from "axios";

// 다음 API를 호출하는 함수를 작성하세요.
//  - 함수명 : getUsers
//  - async/await을 사용한 비동기 함수
//  - 매개변수 받지 않음
//  - axios.get(URL)과 같이 API를 호출한 후 응답 결과를 반환합니다.
//  - API URL : https://jsonplaceholder.typicode.com/users
const axiosInstance = axios.get({
        baseURL: 'https://jsonplaceholder.typicode.com/users'
    })
export const getUsers = async () => {
    const response = await axiosInstance.get('/users', {

    })

    
}