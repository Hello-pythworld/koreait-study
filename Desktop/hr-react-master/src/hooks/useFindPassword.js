import { useState, useEffect, useRef } from "react";
import { useSendCode, useVerifyCode, useResetPassword } from "../query/findPasswordQuery";

const INITIAL_FORM = {
    email: "",
    code: "",
    newPassword: "",
    confirmPassword: "",
};

export const useFindPassword = () => {
    const [form, setForm] = useState(INITIAL_FORM);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isCodeSent, setIsCodeSent] = useState(false);
    const [isCodeVerified, setIsCodeVerified] = useState(false);
    const timerRef = useRef(null);

    const { mutate: sendCodeMutate, isPending: isSending } = useSendCode();
    const { mutate: verifyCodeMutate, isPending: isVerifying } = useVerifyCode();
    const { mutate: resetPasswordMutate, isPending: isResetting } = useResetPassword();

    // 타이머
    useEffect(() => {
        if (timeLeft <= 0) {
            clearInterval(timerRef.current);
            return;
        }
        timerRef.current = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timerRef.current);
    }, [timeLeft]);

    const formatTime = (seconds) => {
        const m = String(Math.floor(seconds / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");
        return `${m}:${s}`;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    // 인증번호 전송
    const handleSendCode = () => {
        sendCodeMutate({ email: form.email }, {
            onSuccess: () => {
                setIsCodeSent(true);
                setTimeLeft(180);
            },
        });
    };

    // 인증번호 확인
    const handleVerifyCode = () => {
        verifyCodeMutate({ email: form.email, code: form.code }, {
            onSuccess: () => {
                setIsCodeVerified(true);
                setTimeLeft(0);
            },
        });
    };

    // 비밀번호 변경
    const handleResetPassword = (e) => {
        e.preventDefault();
        if (form.newPassword !== form.confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        resetPasswordMutate({ email: form.email, newPassword: form.newPassword }, {
            onSuccess: () => {
                alert("비밀번호가 변경되었습니다.");
                setForm(INITIAL_FORM);
                setIsCodeSent(false);
                setIsCodeVerified(false);
            },
        });
    };

    return {
        form,
        timeLeft,
        isCodeSent,
        isCodeVerified,
        isSending,
        isVerifying,
        isResetting,
        formatTime,
        handleChange,
        handleSendCode,
        handleVerifyCode,
        handleResetPassword,
    };
};