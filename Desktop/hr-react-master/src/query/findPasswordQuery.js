import { useMutation } from "@tanstack/react-query";
import { sendCode, verifyCode, resetPassword } from "../api/findPasswordApi";

export const useSendCode = () => {
    return useMutation({ mutationFn: sendCode });
};

export const useVerifyCode = () => {
    return useMutation({ mutationFn: verifyCode });
};

export const useResetPassword = () => {
    return useMutation({ mutationFn: resetPassword });
};