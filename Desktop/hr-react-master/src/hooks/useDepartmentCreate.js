import { useNavigate } from "react-router-dom"
import { useCreateDepartment } from "../query/departmentQuery";
import { useState } from "react";

export const useDepartmentCreate = () => {
    const navigate = useNavigate();
    const { mutate: create, isPending } = useCreateDepartment();

    const [form, setForm] = useState({
        deptCode: "",
        deptName: "",
        managerId: "",
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = () => {
        if (!form.deptCode.trim() || !form.deptName.trim()){
            alert("부서 코드와 부서명은 필수입니다.");
            return;
        }
        create(
            {
                deptCode: form.deptCode,
                deptName: form.deptName,
                managerId: form.managerId ? Number(form.managerId) : null,
            },
            {
                onSuccess: () => {
                    alert("부서가 생성되었습니다.");
                    navigate("/department-management");
                },
                onError: (err) => {
                    alert(err.response?.data?.message ?? "생성 실패");
                },
            }
        );
    };

    return { form, isPending, handleChange, handleSubmit};
};