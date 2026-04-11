import { useState } from "react";
import { useCreateContact } from "../query/itContactQuery";

export const useItContact = () => {
    const { mutate: submit, isPending } = useCreateContact();

    const INITIAL_FORM = {
        name: "",
        dept: "",
        contact: "",
        email: "",
        subject: "",
        message: "",
    };

    const [form, setForm] = useState(INITIAL_FORM);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(form, {
            onSuccess: () => {
                setForm(INITIAL_FORM);
            },
        });
    };

    return { form, isPending, handleChange, handleSubmit, isSuccess: submit.isSuccess, isError: submit.isError, error: submit.error };
};