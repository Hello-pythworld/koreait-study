import { useNavigate } from "react-router-dom";
import { loginMemberApi } from "../api/memberApi";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useLoginMemberMutation = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: loginMemberApi,
        onSuccess: (data) => {
            // setCurrentUser(data);
            alert("로그인 되었습니다.");
            navigate('/');
        },
        onError: (error) => {
            alert("로그인 요청 중 오류가 발생했습니다.")
        }
    })

}