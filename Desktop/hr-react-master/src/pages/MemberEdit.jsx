import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import withPageStyle from "../utils/withPageStyle.jsx";
import pageCss from "../styles/member-edit.css?inline";
import { useAuthStore } from "../store/authStore"; // 경로는 프로젝트에 맞게 조정

function MemberEdit() {
    const { user } = useAuthStore();

    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleSave = async () => {
        setErrorMsg("");
        setSuccessMsg("");

        if (!password && !passwordConfirm) {
            setErrorMsg("변경할 비밀번호를 입력해주세요.");
            return;
        }
        if (password !== passwordConfirm) {
            setErrorMsg("비밀번호가 일치하지 않습니다.");
            return;
        }
        if (password.length < 8) {
            setErrorMsg("비밀번호는 최소 8자 이상이어야 합니다.");
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch("/api/members/password", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ password }),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                throw new Error(data.message || "비밀번호 변경에 실패했습니다.");
            }

            setSuccessMsg("비밀번호가 성공적으로 변경되었습니다.");
            setPassword("");
            setPasswordConfirm("");
        } catch (err) {
            setErrorMsg(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Sidebar />
            <Header />

            <main className="main-container">
                <section className="content-area">
                    <div className="page-header">
                        <h1 className="page-title">내 정보 수정</h1>
                        <p className="page-subtitle">개인 정보 및 계정 설정을 관리하세요.</p>
                    </div>

                    <div className="settings-card">
                        <div className="profile-upload-section">
                            <div className="profile-image-container">
                                <img
                                    alt="Profile Preview"
                                    src={user?.profileImage || "https://lh3.googleusercontent.com/aida-public/AB6AXuD..."}
                                />
                            </div>
                            <div className="upload-controls">
                                <h3>프로필 사진</h3>
                                <p>JPG 또는 PNG 형식의 이미지를 업로드하세요. (최대 2MB)</p>
                                <div className="btn-group">
                                    <button className="btn-primary btn-sm" type="button">
                                        이미지 업로드
                                    </button>
                                    <button className="btn-outline" type="button">
                                        제거
                                    </button>
                                </div>
                            </div>
                        </div>

                        <form className="form-grid" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label className="label">사번</label>
                                <input className="input-field" disabled type="text" value={user?.employeeId ?? ""} readOnly />
                            </div>
                            <div className="form-group">
                                <label className="label">이름</label>
                                <input className="input-field" disabled type="text" value={user?.name ?? ""} readOnly />
                            </div>
                            <div className="form-group">
                                <label className="label">이메일</label>
                                <input className="input-field" disabled type="email" value={user?.email ?? ""} readOnly />
                            </div>
                            <div className="form-group">
                                <label className="label">입사일</label>
                                <input className="input-field" disabled type="date" value={user?.joinDate ?? ""} readOnly />
                            </div>
                            <div className="form-group">
                                <label className="label">부서</label>
                                <input className="input-field" disabled type="text" value={user?.department ?? ""} readOnly />
                            </div>
                            <div className="form-group">
                                <label className="label">직책</label>
                                <input className="input-field" disabled type="text" value={user?.position ?? ""} readOnly />
                            </div>

                            {/* 비밀번호 — 편집 가능한 유일한 필드 */}
                            <div className="form-group">
                                <label className="label">비밀번호</label>
                                <input
                                    className="input-field"
                                    placeholder="••••••••"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label className="label">비밀번호 확인</label>
                                <input
                                    className="input-field"
                                    placeholder="••••••••"
                                    type="password"
                                    value={passwordConfirm}
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                />
                            </div>
                        </form>

                        {/* 피드백 메시지 */}
                        {errorMsg && <p className="feedback-error">{errorMsg}</p>}
                        {successMsg && <p className="feedback-success">{successMsg}</p>}

                        <div className="action-footer">
                            <button
                                className="btn-secondary"
                                type="button"
                                onClick={() => (window.location.href = "/dashboard")}
                            >
                                취소
                            </button>
                            <button
                                className="btn-primary"
                                type="button"
                                onClick={handleSave}
                                disabled={isLoading}
                            >
                                {isLoading ? "저장 중..." : "저장하기"}
                            </button>
                        </div>
                    </div>

                    <div className="security-notice">
                        <span className="material-symbols-outlined security-notice-icon">info</span>
                        <div className="security-notice-content">
                            <h4>보안 안내</h4>
                            <p>
                                사번과 일부 인사 정보는 관리자의 승인이 있어야 변경 가능합니다.
                                개인정보 보호를 위해 비밀번호는 3개월마다 변경하는 것을 권장합니다.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default withPageStyle(MemberEdit, "member-edit.css", pageCss);