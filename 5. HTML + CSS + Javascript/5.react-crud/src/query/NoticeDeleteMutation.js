import { useMutation, useQueryClient } from "@tanstack/react-query";
import { noticeDetailApi } from "../api/boardApi";
import { useNavigate } from "react-router-dom";


export const useNoticeDeleteMutation = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (postId) => noticeDeleteApi(postId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['noticeList']
            })
        }
    })
}
