import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import withPageStyle from "../utils/withPageStyle.jsx";
import pageCss from "../styles/vacation-request.css?inline";
import { useVacationRequest } from "../hooks/useVacationRequest";
import useAuthStore from "../store/authStore";

function VacationRequest() {
    const { user } = useAuthStore();

    const {
        vacationType,
        setVacationType,
        detailReason,
        setDetailReason,
        startDate,
        setStartDate,
        days,
        setDays,
        proxyEmployeeId,
        setProxyEmployeeId,
        remainingVacationDays,
        expectedRemainingDays,
        handleSubmit,
        handleCancel,
        isPending,
        minStartDate
    } = useVacationRequest();

    return (
        <>
            <Sidebar />
            <Header />

            <main className="main-container">
                <div className="page-header">
                    <div className="breadcrumb">
                        <span>인사관리</span>
                        <span
                            className="material-symbols-outlined"
                            style={{ fontSize: "16px" }}
                        >
                            chevron_right
                        </span>
                        <span>휴가 관리</span>
                    </div>
                    <h2 className="page-title">휴가 신청</h2>
                    <p className="page-desc">
                        휴가 신청서를 작성합니다. 정확한 정보를 입력해 주세요.
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="section-title">대상자 정보</div>

                    <div className="form-card employee-info-layout">
                        <div className="profile-upload">
                            <img
                                alt="Employee"
                                className="profile-img-large"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAt3E8zHwCOKjDMy6gasEIdPuaiDygljwLV2Rhg1kpbETWdk41H6NPD9O_zgeeHAvWPJYrvvmEysAw4nxAZK9j0ylq94uBvAoLjYMeV9ICjxWMefkzw439mVlay0WnxxVz26zPcpNbDtPma0WPtuOX3vaKSR9FdYzvXRYoSiApUQsEPc9fZGxOFVOFvmJO6W7uCq6nMF0A_ftXo6IiqF7lhCSgrSTwXDkMHv_oIeO8RX8Hr7EsgKySUH69HvIRERmSFo6NVzL0geOl"
                            />

                            <div className="input-group" style={{ width: "100%" }}>
                                <label className="label">사번</label>
                                <div
                                    className="input-container"
                                    style={{
                                        background: "white",
                                        border: "1px solid var(--border-color)",
                                    }}
                                >
                                    <input
                                        placeholder="사번 입력"
                                        type="text"
                                        value={user?.employeeNo || ""}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="fields-grid">
                            <div className="input-group">
                                <label className="label">이름</label>
                                <div className="input-container">
                                    <input
                                        placeholder="이름 입력"
                                        type="text"
                                        value={user?.name || ""}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label className="label">직책</label>
                                <div className="input-container">
                                    <input
                                        placeholder="직책 입력"
                                        type="text"
                                        value={user?.role || ""}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label className="label">부서</label>
                                <div className="input-container">
                                    <input
                                        placeholder="부서 입력"
                                        type="text"
                                        value={user?.deptName || ""}
                                        readOnly
                                    />
                                </div>
                            </div>

                            <div className="input-group">
                                <label className="label">입사일</label>
                                <div className="input-container">
                                    <input
                                        placeholder="입사일 입력"
                                        type="text"
                                        value={user?.hireDate || ""}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-grid">
                        <div className="request-details">
                            <div className="section-title">신청 및 사유</div>

                            <div className="form-card form-card-detail">
                                <div className="input-group" style={{ marginBottom: "20px" }}>
                                    <label className="label">
                                        대리 신청자 사번 (없을 경우 빈칸으로 제출하세요.)
                                    </label>
                                    <div className="input-container">
                                        <span className="material-symbols-outlined">badge</span>
                                        <input
                                            placeholder="대리인 사번 입력"
                                            type="text"
                                            value={proxyEmployeeId}
                                            onChange={(e) => setProxyEmployeeId(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="input-group" style={{ marginBottom: "20px" }}>
                                    <label className="label">사유 선택</label>
                                    <div className="input-container">
                                        <span className="material-symbols-outlined">category</span>
                                        <select
                                            id="reason-select"
                                            value={vacationType}
                                            onChange={(e) => setVacationType(e.target.value)}
                                        >
                                            <option value="교육">교육</option>
                                            <option value="병가">병가</option>
                                            <option value="경조사">경조사</option>
                                            <option value="기타">기타</option>
                                        </select>
                                    </div>
                                </div>

                                <div
                                    className={`input-group ${
                                        vacationType === "기타" ? "" : "hidden"
                                    }`}
                                    id="other-reason-group"
                                >
                                    <label className="label">
                                        기타 사유 (기타 선택 시 작성하세요.)
                                    </label>
                                    <div className="input-container">
                                        <span className="material-symbols-outlined">edit_note</span>
                                        <input
                                            placeholder="상세 사유를 입력하세요"
                                            type="text"
                                            value={detailReason}
                                            onChange={(e) => setDetailReason(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="schedule-settings">
                            <div className="section-title">일정 설정</div>

                            <div className="form-card">
                                <div className="input-group" style={{ marginBottom: "20px" }}>
                                    <label className="label">연차 사용일</label>
                                    <div className="input-container">
                                        <span className="material-symbols-outlined">
                                            calendar_today
                                        </span>
                                        <input
                                            type="date"
                                            value={startDate}
                                            min={minStartDate}
                                            onChange={(e) => setStartDate(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="input-group">
                                    <label className="label">사용 일수</label>
                                    <div className="input-container">
                                        <span className="material-symbols-outlined">timer</span>
                                        <select
                                            value={days}
                                            onChange={(e) => setDays(e.target.value)}
                                        >
                                            <option value="1">1일</option>
                                            <option value="2">2일</option>
                                            <option value="3">3일</option>
                                            <option value="4">4일</option>
                                            <option value="5">5일</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="summary-box">
                                    <div className="summary-row">
                                        <span className="label">잔여 연차</span>
                                        <span className="value">{remainingVacationDays}일</span>
                                    </div>
                                    <div className="progress-bar">
                                        <div className="progress-fill"></div>
                                    </div>
                                    <p className="hint">
                                        * 이번 신청 승인 시 {expectedRemainingDays}일이 남게 됩니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="actions">
                        <button
                            className="btn btn-secondary"
                            type="button"
                            onClick={handleCancel}
                        >
                            취소
                        </button>

                        <button
                            className="btn btn-primary"
                            type="submit"
                            disabled={isPending}
                        >
                            신청하기
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "18px" }}
                            >
                                send
                            </span>
                        </button>
                    </div>
                </form>
            </main>
        </>
    );
}

export default withPageStyle(VacationRequest, "vacation-request.css", pageCss);