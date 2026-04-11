import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import withPageStyle from "../utils/withPageStyle.jsx";
import pageCss from "../styles/dashboard.css?inline";
import { useDashboard } from "../hooks/useDashboard.js";
import { useAuthStore } from "../store/authStore"; // 추가
import AttendanceCard from "../components/dashboard/AttendanceCard";
import StatsCard from "../components/dashboard/StatsCard";
import HistoryTable from "../components/dashboard/HistoryTable";

function Dashboard() {
    const { user } = useAuthStore();           // 추가
    const memberId = user?.memberId;           // 하드코딩 제거

    const { dashboard, isLoading, vacationPercent } = useDashboard(memberId);

    if (isLoading) return <div>로딩 중...</div>;

    return (
        <>
            <Sidebar />
            <Header />
            <div className="main-dashboard">
                <div className="content-padding">
                    <div className="page-header">
                        <div className="page-title">
                            <nav className="breadcrumbs">
                                <span>운영 포털</span>
                                <span style={{ color: "var(--outline-variant)" }}>/</span>
                                <span className="active-crumb">대시보드</span>
                            </nav>
                            <h1>반갑습니다, {dashboard.memberName ?? "사용자"} 님.</h1>
                            <p>
                                <span style={{ color: "rgb(113, 113, 255)" }}>
                                    대기 중인 승인 건이{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                        {dashboard.pendingVacationCount ?? 0}건
                                    </span>
                                </span>{" "}
                                있습니다.
                            </p>
                        </div>
                    </div>

                    <div className="dashboard-grid">
                        <AttendanceCard dashboard={dashboard} />
                        <StatsCard dashboard={dashboard} vacationPercent={vacationPercent} />
                        <HistoryTable recentAttendances={dashboard.recentAttendances} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default withPageStyle(Dashboard, "dashboard.css", pageCss);