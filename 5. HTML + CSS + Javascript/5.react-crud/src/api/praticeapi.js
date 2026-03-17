import axiosInstance from "./AxiosInstance"

export const deleteCommentApi = async ( postId, commentId ) => {
    const response = await axiosInstance.delete(`/api/post/${postId}/comment/${commentId}`);
    return response.data;
}