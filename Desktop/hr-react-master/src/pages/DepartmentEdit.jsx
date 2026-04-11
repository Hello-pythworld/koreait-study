import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import withPageStyle from "../utils/withPageStyle.jsx";
import pageCss from "../styles/department-edit.css?inline";
import { useDepartmentList, useUpdateDepartment, useDeleteDepartment } from "../query/departmentQuery";

function DepartmentEdit() {
    const navigate = useNavigate();
    const { departmentId } = useParams(); // URL에서 ID 가져오기

    const { data: departments = [] } = useDepartmentList();
    const { mutate: update, isPending: isUpdating } = useUpdateDepartment();
    const { mutate: remove, isPending: isDeleting } = useDeleteDepartment();

    const [form, setForm] = useState({
        deptCode: "",
        deptName: "",
        managerId: "",
    });

    // 기존 데이터 채우기
    useEffect(() => {
        const dept = departments.find((d) => d.departmentId === Number(departmentId));
        if (dept) {
            setForm({
                deptCode: dept.deptCode ?? "",
                deptName: dept.deptName ?? "",
                managerId: "",
            });
        }
    }, [departments, departmentId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleUpdate = () => {
        update(
            {
                departmentId: Number(departmentId),
                dto: {
                    deptCode: form.deptCode,
                    deptName: form.deptName,
                    managerId: form.managerId ? Number(form.managerId) : null,
                },
            },
            {
                onSuccess: () => {
                    alert("수정되었습니다.");
                    navigate("/department-management");
                },
                onError: (err) => {
                    alert(err.response?.data?.message ?? "수정 실패");
                },
            }
        );
    };

    const handleDelete = () => {
        if (!window.confirm("정말 삭제하시겠습니까?")) return;
        remove(Number(departmentId), {
            onSuccess: () => {
                alert("삭제되었습니다.");
                navigate("/department-management");
            },
            onError: (err) => {
                alert(err.response?.data?.message ?? "삭제 실패");
            },
        });
    };

    const currentDept = departments.find((d) => d.departmentId === Number(departmentId));

    return (
        <>
            <Sidebar />
            <Header />
            <main>
                <header className="content-header">
                    <div className="breadcrumb">부서 관리 &gt; 상세 정보</div>
                    <h2 className="page-title">{currentDept?.deptName ?? "부서 상세"}</h2>
                </header>

                <section className="card">
                    <h3 className="section-title">기본 정보</h3>
                    <div className="form-grid">
                        <div className="form-group">
                            <label>부서 코드</label>
                            <input
                                name="deptCode"
                                type="text"
                                value={form.deptCode}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>부서 이름</label>
                            <input
                                name="deptName"
                                type="text"
                                value={form.deptName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>부서장 ID (선택)</label>
                            <input
                                name="managerId"
                                type="number"
                                value={form.managerId}
                                onChange={handleChange}
                                placeholder="직원 ID 입력"
                            />
                        </div>
                        <div className="form-group">
                            <label>부서장 이름</label>
                            <input
                                type="text"
                                readOnly
                                value={currentDept?.managerName ?? "미지정"}
                                style={{ backgroundColor: "#f3f4f5", borderColor: "transparent" }}
                            />
                        </div>
                    </div>
                </section>

                <footer className="actions-footer">
                    <button
                        className="btn btn-danger"
                        onClick={handleDelete}
                        disabled={isDeleting}
                    >
                        <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>
                            delete
                        </span>
                        {isDeleting ? "삭제 중..." : "부서 삭제"}
                    </button>
                    <div className="button-group">
                        <button
                            className="btn btn-secondary"
                            onClick={() => navigate("/department-management")}
                        >
                            취소
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={handleUpdate}
                            disabled={isUpdating}
                        >
                            <span className="material-symbols-outlined" style={{ fontSize: "1.25rem" }}>
                                save
                            </span>
                            {isUpdating ? "저장 중..." : "저장하기"}
                        </button>
                    </div>
                </footer>
            </main>
        </>
    );
}

export default withPageStyle(DepartmentEdit, "department-edit.css", pageCss);