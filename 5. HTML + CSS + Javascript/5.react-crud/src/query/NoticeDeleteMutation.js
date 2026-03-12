import { useMutation, useQueryClient } from "@tanstack/react-query";
import { noticeDetailApi } from "../api/boardApi";
import { useNavigate } from "react-router-dom";


export const useNoticeDeleteMutation = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    return useMutation({
        mutationFn:(postId) => noticeDeleteApi(postId),
        onsSuccess: () => {
            queryClient.invalidateQueries(['noticeList']);
            navigate('/notice/list');
        },
        onError: () => {
            alert('삭제 실패!');
        }   
    })
}
