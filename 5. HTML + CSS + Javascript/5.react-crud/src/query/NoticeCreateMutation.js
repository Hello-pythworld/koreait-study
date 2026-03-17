import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";
import { noticeCreateApi } from "../api/boardApi"

export const useNoticeCreateMutation = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: (formData) => { noticeCreateApi(formData) },
        onSuccess: () => {
            console.log("aaaaaaaaa")
            queryClient.invalidateQueries({
                queryKey: ['noticeList']
            });
            alert('게시글이 등록되었습니다.');
            navigate('/notice/list');
        }
    })
}