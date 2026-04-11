import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import withPageStyle from "../utils/withPageStyle.jsx";
import pageCss from "../styles/vacation-request-list.css?inline";
import { useVacationRequestList } from "../hooks/useVacationRequestList";

function VacationRequestList() {

    const {
        filteredVacations,
        pendingCount,
        approvedCount,
        rejectedCount,
        filter,
        setFilter,
        handleApprove,
        handleReject,
    } = useVacationRequestList();

    const getStatusClass = (status) => {
        if (status === "PENDING") return "badge badge-pending";
        if (status === "APPROVED") return "badge badge-approved";
        if (status === "REJECTED") return "badge badge-rejected";
        return "badge";
    };

    const getStatusText = (status) => {
        if (status === "PENDING") return "대기";
        if (status === "APPROVED") return "승인";
        if (status === "REJECTED") return "반려";
        return status;
    };

    return (
        <>
            <Sidebar />
            <Header />

            <main>
                <div className="page-canvas">
                    <div className="page-header">
                        <div className="page-title">
                            <h2>연차 관리 이력</h2>
                            <p>팀원들의 휴가 신청 현황을 검토하고 승인하세요.</p>
                        </div>

                        <div className="btn-group">
                            <button
                                className="btn btn-primary"
                                onClick={() => (window.location.href = "/vacation-request")}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>
                                    add
                                </span>
                                대리 신청
                            </button>
                        </div>
                    </div>

                    {/* ✅ 통계 */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <p className="stat-label">대기</p>
                            <span className="stat-number trend-blue">{pendingCount}</span>
                        </div>

                        <div className="stat-card">
                            <p className="stat-label">승인</p>
                            <span className="stat-number">{approvedCount}</span>
                        </div>

                        <div className="stat-card">
                            <p className="stat-label">반려</p>
                            <span className="stat-number">{rejectedCount}</span>
                        </div>

                        <div className="stat-card">
                            <p className="stat-label">전체</p>
                            <span className="stat-number">{filteredVacations.length}</span>
                        </div>
                    </div>

                    <div className="table-container">
                        <div className="table-header">

                            {/* ✅ 필터 */}
                            <div className="tabs">
                                <button className={`tab ${filter === "ALL" ? "active" : ""}`} onClick={() => setFilter("ALL")}>
                                    전체
                                </button>
                                <button className={`tab ${filter === "교육" ? "active" : ""}`} onClick={() => setFilter("교육")}>
                                    교육
                                </button>
                                <button className={`tab ${filter === "병가" ? "active" : ""}`} onClick={() => setFilter("병가")}>
                                    병가
                                </button>
                                <button className={`tab ${filter === "경조사" ? "active" : ""}`} onClick={() => setFilter("경조사")}>
                                    경조사
                                </button>
                                <button className={`tab ${filter === "기타" ? "active" : ""}`} onClick={() => setFilter("기타")}>
                                    기타
                                </button>
                            </div>

                            <p className="total-count">총 {filteredVacations.length}건</p>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>신청자</th>
                                    <th>휴가 유형</th>
                                    <th>기간</th>
                                    <th>상태</th>
                                    <th style={{ textAlign: "right" }}>관리</th>
                                </tr>
                            </thead>

                            {/* ✅ 핵심: map */}
                            <tbody>
                                {filteredVacations.map((v) => (
                                    <tr key={v.id}>
                                        <td>{v.userName || "사용자"}</td>

                                        <td>{v.vacationType}</td>

                                        <td>
                                            {v.startDate} {v.endDate && `~ ${v.endDate}`}
                                        </td>

                                        <td>
                                            <span className={getStatusClass(v.status)}>
                                                {getStatusText(v.status)}
                                            </span>
                                        </td>

                                        <td>
                                            <div className="action-group">
                                                <button
                                                    className="btn-sm btn-approve"
                                                    onClick={() => handleApprove(v.id)}
                                                >
                                                    승인
                                                </button>

                                                <button
                                                    className="btn-sm btn-reject"
                                                    onClick={() => handleReject(v.id)}
                                                >
                                                    반려
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}

export default withPageStyle(VacationRequestList, "vacation-request-list.css", pageCss);