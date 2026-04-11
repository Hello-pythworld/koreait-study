import { useMutation } from "@tanstack/react-query";
import api from "../api/instance";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

export const useLoginMutation = () => {
    const navigate = useNavigate();
    const setAuth = useAuthStore((state) => state.setAuth);

    return useMutation({
        mutationFn: async (loginData) => {
            const response = await api.post("/login", {
                loginId: loginData.loginId,
                password: loginData.password,
            });
            return response.data; 
        },

        onSuccess: (data) => {
            if (!data.token) {
                alert("로그인 응답에 토큰이 없습니다.");
                return;
            }

            setAuth(data);

            if (data.role === "ADMIN") {
                navigate("/dashboard", { replace: true });
                return;
            }

            if (data.role === "USER") {
                navigate("/dashboard", { replace: true });
                return;
            }

            navigate("/login", { replace: true });
        },

        onError: (error) => {
            console.error("로그인 에러:", error);
            alert("아이디 또는 비밀번호를 확인하세요.");
        },
    });
};