import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import withPageStyle from "../utils/withPageStyle.jsx";
import pageCss from "../styles/employee-edit.css?inline";
import { getMemberById, updateMember } from "../api/memberApi"; // 경로 맞게 수정

function EmployeeEdit() {
    const { memberId } = useParams();

    const [formData, setFormData] = useState({
        employeeId: "",
        name: "",
        email: "",
        password: "",
        department: "",
        position: "",
        hireDate: "",
        leaveDate: "",
        role: "EMPLOYEE",
        status: true,
    });

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    // 직원 정보 불러오기
    useEffect(() => {
        if (!memberId) return;

        const fetchMember = async () => {
            try {
                const data = await getMemberById(memberId);
                setFormData({
                    employeeId: data.employeeId || "",
                    name: data.name || "",
                    email: data.email || "",
                    password: "",           // 보안상 빈값으로
                    department: data.department || "",
                    position: data.position || "",
                    hireDate: data.hireDate || "",
                    leaveDate: data.leaveDate || "",
                    role: data.role || "EMPLOYEE",
                    status: data.status ?? true,
                });
            } catch (err) {
                setError("직원 정보를 불러오는데 실패했습니다.");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchMember();
    }, [memberId]);

    // 공통 변경 핸들러
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    // 역할 버튼 클릭 핸들러
    const handleRoleClick = (role) => {
        setFormData((prev) => ({ ...prev, role }));
    };

    // 저장 핸들러
    const handleSave = async () => {
        setSaving(true);
        setError(null);

        try {
            await updateMember(memberId, formData);
            alert("수정 내용이 저장되었습니다.");
            window.location.href = "/employee-management";
        } catch (err) {
            setError("저장에 실패했습니다. 다시 시도해주세요.");
            console.error(err);
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <p style={{ padding: "2rem" }}>불러오는 중...</p>;

    return (
        <>
            <Sidebar />
            <Header />

            <main className="content">
                <div className="container">
                    <div className="page-header">
                        <div>
                            <nav className="breadcrumb">
                                직원 관리 / <span className="active">상세 정보</span>
                            </nav>
                            <h2 className="page-title">직원 상세 정보</h2>
                        </div>

                        <div className="action-buttons">
                            {error && <p style={{ color: "red", fontSize: "13px" }}>{error}</p>}
                            <button
                                className="btn-outline"
                                type="button"
                                onClick={() => window.location.href = "/employee-management"}
                            >
                                취소
                            </button>
                            <button
                                className="btn-primary"
                                type="button"
                                onClick={handleSave}
                                disabled={saving}
                            >
                                {saving ? "저장 중..." : "수정 내용 저장"}
                            </button>
                        </div>
                    </div>

                    <div className="dashboard-grid">
                        <div className="column">
                            <section className="section-card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <span className="material-symbols-outlined">badge</span>
                                        기본 정보
                                    </h3>
                                </div>

                                <div className="card-body">
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="label-text">사번</label>
                                            <input
                                                className="input-field"
                                                disabled
                                                type="text"
                                                value={formData.employeeId}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="label-text">이름</label>
                                            <input
                                                className="input-field"
                                                name="name"
                                                type="text"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="label-text">이메일</label>
                                        <input
                                            className="input-field"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="label-text">비밀번호</label>
                                        <div className="password-container">
                                            <input
                                                className="input-field"
                                                name="password"
                                                type={showPassword ? "text" : "password"}
                                                value={formData.password}
                                                onChange={handleChange}
                                                placeholder="변경 시에만 입력하세요"
                                            />
                                            <button
                                                className="password-toggle"
                                                type="button"
                                                onClick={() => setShowPassword((prev) => !prev)}
                                            >
                                                <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                                                    {showPassword ? "visibility_off" : "visibility"}
                                                </span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="label-text">부서</label>
                                            <select
                                                className="input-field"
                                                name="department"
                                                value={formData.department}
                                                onChange={handleChange}
                                            >
                                                <option value="인사팀">인사팀</option>
                                                <option value="제품 기획팀">제품 기획팀</option>
                                                <option value="개발 1본부">개발 1본부</option>
                                                <option value="마케팅부">마케팅부</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="label-text">직책</label>
                                            <select
                                                className="input-field"
                                                name="position"
                                                value={formData.position}
                                                onChange={handleChange}
                                            >
                                                <option value="사원">사원</option>
                                                <option value="대리">대리</option>
                                                <option value="과장">과장</option>
                                                <option value="차장">차장</option>
                                                <option value="부장">부장</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="label-text">입사일</label>
                                            <input
                                                className="input-field"
                                                name="hireDate"
                                                type="date"
                                                value={formData.hireDate}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="label-text">퇴사일</label>
                                            <input
                                                className="input-field"
                                                name="leaveDate"
                                                type="date"
                                                value={formData.leaveDate}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="section-card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <span className="material-symbols-outlined">security</span>
                                        권한 및 상태
                                    </h3>
                                </div>

                                <div className="card-body">
                                    <div className="form-group">
                                        <label className="label-text">시스템 역할</label>
                                        <p style={{ fontSize: "12px", color: "#5F6368", marginBottom: "12px" }}>
                                            사용자의 접근 권한 범위를 결정합니다.
                                        </p>
                                        <div className="roles-container">
                                            {[
                                                { value: "EMPLOYEE", label: "직원" },
                                                { value: "MANAGER", label: "매니저" },
                                                { value: "ADMIN", label: "관리자" },
                                            ].map(({ value, label }) => (
                                                <button
                                                    key={value}
                                                    className={`role-btn ${formData.role === value ? "active" : ""}`}
                                                    type="button"
                                                    onClick={() => handleRoleClick(value)}
                                                >
                                                    {label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="status-toggle-row">
                                        <div>
                                            <h4 style={{ fontSize: "14px", fontWeight: 700 }}>계정 활성화 상태</h4>
                                            <p style={{ fontSize: "12px", color: "#5F6368" }}>
                                                비활성화 시 시스템 접근이 차단됩니다.
                                            </p>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <label className="toggle-switch">
                                                <input
                                                    type="checkbox"
                                                    name="status"
                                                    checked={formData.status}
                                                    onChange={handleChange}
                                                />
                                                <span className="slider"></span>
                                            </label>
                                            <span className="status-label">
                                                {formData.status ? "Active" : "Inactive"}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* 오른쪽 컬럼 (근태/휴가 - 읽기 전용, 변경 없음) */}
                        <div className="column">
                           {/* ... 기존 근태/휴가 섹션 그대로 유지 ... */}
                        </div>
                    </div>

                    <footer className="page-footer">
                        <span>마지막 업데이트: 2024년 5월 24일 14:30 (관리자: 이현우)</span>
                        <span>Nexus Pro HR v2.4.0</span>
                    </footer>
                </div>
            </main>
        </>
    );
}

export default withPageStyle(EmployeeEdit, "employee-edit.css", pageCss);