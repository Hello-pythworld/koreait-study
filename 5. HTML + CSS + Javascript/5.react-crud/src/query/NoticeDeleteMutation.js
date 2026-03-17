import { useMutation, useQueryClient } from "@tanstack/react-query"
import { noticeDeleteApi } from "../api/boardApi"

export const useNoticeDeleteMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (postId) => noticeDeleteApi(postId),
        onSuccess: () => {
            // 리스트 캐시 무효화
            queryClient.invalidateQueries({
                queryKey: ['noticeList']
            })
        }
    })
}

