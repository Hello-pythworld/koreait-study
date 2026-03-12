import axios from "axios";
import axiosInstance from "./AxiosInstance"

// 공지사항 목록 조회
export const noticeListApi = async (page = 1) => {
    const response = await axiosInstance.get("/api/board/notice", {
        params: {
            page: page,
        },
        withCredentials: true
    })
    return response.data;
}

// 공지사항 상세보기 조회
export const noticeDetailApi = async (postId) => {
    try {
        const response = await axiosInstance.get(`/api/board/notice/${postId}`, {
            withCredentials: true
        })

        return response.data;
    } catch (err) {

        // 서버가 응답을 했는데 상태코드가 4xx, 5xx일 경우
        if (err.response) {
            console.error('응답 데이터 : ', err.response.data);
            throw err;
        } else if (err.request) {
            // 요청은 보냈는데 서버가 응답을 하지 않았을 때,
            console.error('서버에 연결할 수 없습니다!')
            throw err;
        } else {
            // 요청 중 에러가 발생했을 경우
            console.error('요청 중 에러 발생 : ', err.message);
            throw err;
        }
    }

}
        
export const noticeDeleteApi = async (postId) => {
    const response = await axiosInstance.delete(`/api/board/${postId}`);
    return response.data;
}