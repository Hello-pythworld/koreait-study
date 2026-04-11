import { useState } from "react";
import { useLoginMutation } from "../query/loginQuery"; 

export const useLoginForm = () => {
    const [formData, setFormData] = useState({ loginId: "", password: "" });
    const { mutate: login, isLoading } = useLoginMutation();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = (e) => {
        e.preventDefault();
        login(formData);
    };

    return { formData, handleChange, handleLogin, isLoading };
};