import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import withPageStyle from "../utils/withPageStyle.jsx";
import pageCss from "../styles/dashboard.css?inline";
import { useVacationManagement } from "../hooks/useVacationManagement";


function VacationManagement() {

    const {
        isAdmin,
        history,
        historyLoading,
        historyError,
        pendingVacations,
        pendingLoading,
        pendingError,
        usedVacationDays,
        remainingVacationDays,
        handleApprove,
        handleReject,
        goToVacationRequest,
        goToVacationRequestList,
        pendingDays
    } = useVacationManagement();










    return (
        <>
            <Sidebar />
            <Header />

            <main>
                <div className="page-header">
                    <div className="page-title">
                        <nav className="breadcrumbs">
                            <span>운영 포털</span>
                            <span style={{ color: "var(--outline-variant)" }}>/</span>
                            <span className="active-crumb">휴가 관리</span>
                        </nav>
                        <h1>휴가 관리</h1>
                        <p>현재 사용자의 휴가 관리 메뉴입니다.</p>
                    </div>

                    <div className="btn-group">
                        <button
                            className="btn btn-primary"
                            onClick={goToVacationRequest}
                        >
                            <span
                                className="material-symbols-outlined"
                                style={{ fontSize: "16px" }}
                            >
                                add
                            </span>
                            휴가 신청
                        </button>
                    </div>
                </div>

                <div className="content-container">
                    <section className="summary-grid">
                        <div className="summary-card primary">
                            <span className="material-symbols-outlined bg-icon">
                                calendar_month
                            </span>
                            <p className="card-label">잔여 휴가</p>
                            <h2 className="card-value">{remainingVacationDays}</h2>
                            <div className="card-footer">
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: "14px" }}
                                >
                                    info
                                </span>
                                2026년 12월 31일까지 유효
                            </div>
                        </div>

                        <div className="summary-card neutral">
                            <span className="material-symbols-outlined bg-icon">
                                event_repeat
                            </span>
                            <p className="card-label">사용 휴가</p>
                            <h2 className="card-value">{usedVacationDays}</h2>
                            <div className="card-footer">
                                <span
                                    className="material-symbols-outlined"
                                    style={{ fontSize: "14px" }}
                                >
                                    history
                                </span>
                                승인 완료 기준
                            </div>
                        </div>

                        {isAdmin && (
                            <div className="summary-card tertiary">
                                <span className="material-symbols-outlined bg-icon">
                                    pending_actions
                                </span>
                                <p className="card-label">승인 대기 중</p>
                                <h2 className="card-value">{pendingVacations.length}</h2>
                                <div className="card-footer">
                                    <span
                                        className="material-symbols-outlined"
                                        style={{ fontSize: "14px" }}
                                    >
                                        timer
                                    </span>
                                    관리자 검토 대기 중
                                </div>
                            </div>
                        )}
                    </section>

                    <div className="main-layout">
                        <section>
                            <div className="section-header">
                                <h3 className="section-title">나의 휴가 이력</h3>
                            </div>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>휴가 종류</th>
                                            <th>기간</th>
                                            <th>일수</th>
                                            <th style={{ textAlign: "right" }}>상태</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {historyLoading && (
                                            <tr>
                                                <td colSpan="4" style={{ textAlign: "center" }}>
                                                    휴가 이력을 불러오는 중입니다.
                                                </td>
                                            </tr>
                                        )}

                                        {historyError && (
                                            <tr>
                                                <td colSpan="4" style={{ textAlign: "center" }}>
                                                    휴가 이력을 불러오지 못했습니다.
                                                </td>
                                            </tr>
                                        )}

                                        {!historyLoading && !historyError && history.length === 0 && (
                                            <tr>
                                                <td colSpan="4" style={{ textAlign: "center" }}>
                                                    휴가 이력이 없습니다.
                                                </td>
                                            </tr>
                                        )}

                                        {!historyLoading &&
                                            !historyError &&
                                            history.length > 0 &&
                                            history.map((item) => (
                                                <tr key={item.vacationId}>
                                                    <td>{item.vacationType}</td>
                                                    <td>{item.startDate} ~ {item.endDate}</td>
                                                    <td>{item.days}일</td>
                                                    <td style={{ textAlign: "right" }}>{item.status}</td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>

                                <div className="table-footer">
                                    <p className="footer-info">
                                        총 {history.length}개의 휴가 이력
                                    </p>
                                </div>
                            </div>
                        </section>

                        {isAdmin && (
                            <section>
                                <div
                                    className="section-header"
                                    style={{ justifyContent: "flex-start", gap: "8px" }}
                                >
                                    <span
                                        className="material-symbols-outlined"
                                        style={{ color: "var(--primary)" }}
                                    >
                                        verified_user
                                    </span>
                                    <h3 className="section-title">승인 대기열</h3>
                                </div>

                                <div className="queue-list">
                                    {pendingLoading && (
                                        <p style={{ padding: "16px" }}>승인 대기 목록을 불러오는 중입니다.</p>
                                    )}

                                    {pendingError && (
                                        <p style={{ padding: "16px" }}>승인 대기 목록을 불러오지 못했습니다.</p>
                                    )}

                                    {!pendingLoading && !pendingError && pendingVacations.length === 0 && (
                                        <p style={{ padding: "16px" }}>현재 승인 대기 중인 휴가 요청이 없습니다.</p>
                                    )}

                                    {!pendingLoading &&
                                        !pendingError &&
                                        pendingVacations.length > 0 &&
                                        pendingVacations.slice(0, 2).map((item) => (
                                            <div className="queue-item" key={item.vacationId}>
                                                <div className="team-member">
                                                    <div>
                                                        <p className="member-name">{item.memberName ?? "-"}</p>
                                                        <p className="member-role">{item.status ?? "-"}</p>
                                                    </div>
                                                </div>

                                                <div className="request-details">
                                                    <div>
                                                        <p className="detail-label">종류</p>
                                                        <p className="detail-value">{item.vacationType}</p>
                                                    </div>
                                                    <div style={{ textAlign: "right" }}>
                                                        <p className="detail-label">기간</p>
                                                        <p className="detail-value">{item.days}일</p>
                                                    </div>
                                                </div>

                                                <div className="action-grid">
                                                    <button
                                                        className="btn-reject"
                                                        type="button"
                                                        onClick={() => handleReject(item.vacationId)}
                                                    >
                                                        반려
                                                    </button>
                                                    <button
                                                        className="btn-approve"
                                                        type="button"
                                                        onClick={() => handleApprove(item.vacationId)}
                                                    >
                                                        승인
                                                    </button>
                                                </div>
                                            </div>
                                        ))}

                                    <button
                                        className="view-all-btn"
                                        type="button"
                                        onClick={goToVacationRequestList}
                                    >
                                        모든 요청 보기
                                    </button>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}

export default withPageStyle(VacationManagement, "dashboard.css", pageCss);