import { useState, useEffect } from "react";
import { getAllAttendances, checkIn, checkOut } from "../api/attendanceApi";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import withPageStyle from "../utils/withPageStyle.jsx";
import pageCss from "../styles/dashboard.css?inline";
import { useAuthStore } from "../store/authStore"; // 경로 맞게 수정

function AttendanceManagement() {
    const [attendances, setAttendances] = useState([]);
    const [todayAttendance, setTodayAttendance] = useState(null);

    // ✅ authStore에서 로그인 사용자 memberId 읽기
    const memberId = useAuthStore((state) => state.memberId);

    const fetchAttendances = async () => {
        try {
            const data = await getAllAttendances();
            setAttendances(data);

            const today = new Date().toISOString().slice(0, 10);
            const todays = data.find(
                (a) => a.workDate === today && a.memberId === memberId
            );
            setTodayAttendance(todays ?? null);
        } catch (e) {
            console.error("근태 데이터 불러오기 실패:", e);
        }
    };

    const handleCheckIn = async () => {
        try {
            await checkIn(memberId);
            alert("출근 완료!");
            fetchAttendances();
        } catch (e) {
            alert("출근 처리 실패: " + e.message);
        }
    };

    const handleCheckOut = async () => {
        try {
            await checkOut(todayAttendance.attendanceId, memberId);
            alert("퇴근 완료!");
            fetchAttendances();
        } catch (e) {
            alert("퇴근 처리 실패: " + e.message);
        }
    };

    useEffect(() => {
        if (memberId) fetchAttendances();
    }, [memberId]);

    // 이번 달 통계 계산
    const today = new Date();
    const thisMonth = today.toISOString().slice(0, 7);
    const thisMonthData = attendances.filter(
        (a) => a.workDate?.startsWith(thisMonth) && a.memberId === memberId
    );
    const workDays = thisMonthData.filter((a) => a.checkIn).length;
    const lateDays = thisMonthData.filter((a) => a.status === "LATE").length;
    const absentDays = thisMonthData.filter((a) => a.status === "ABSENT").length;
    const totalDays = thisMonthData.length;
    const attendanceScore =
        totalDays > 0 ? ((workDays / totalDays) * 100).toFixed(1) : 0;

    // 날짜 포맷 헬퍼
    const formatDate = (dateStr) => {
        if (!dateStr) return "-";
        const d = new Date(dateStr);
        const days = ["일", "월", "화", "수", "목", "금", "토"];
        return {
            primary: `${d.getFullYear()}년 ${d.getMonth() + 1}월 ${d.getDate()}일`,
            secondary: `${days[d.getDay()]}요일`,
        };
    };

    // 시간 포맷 헬퍼 (ISO or "HH:mm:ss" → "HH:MM AM/PM")
    const formatTime = (timeStr) => {
        if (!timeStr) return "-";
        const [h, m] = timeStr.split(":").map(Number);
        const ampm = h >= 12 ? "PM" : "AM";
        const hour = h % 12 || 12;
        return `${String(hour).padStart(2, "0")}:${String(m).padStart(2, "0")} ${ampm}`;
    };

    // 근무 시간 계산 헬퍼
    const calcWorkHours = (checkIn, checkOut) => {
        if (!checkIn || !checkOut) return "-";
        const [h1, m1] = checkIn.split(":").map(Number);
        const [h2, m2] = checkOut.split(":").map(Number);
        const total = (h2 * 60 + m2) - (h1 * 60 + m1);
        return `${Math.floor(total / 60)}시간 ${total % 60}분`;
    };

    // 상태 배지 클래스 매핑
    const statusClass = {
        NORMAL: "status-normal",
        LATE: "status-late",
        ABSENT: "status-absent",
        EARLY_LEAVE: "status-early",
    };
    const statusLabel = {
        NORMAL: "정상",
        LATE: "지각",
        ABSENT: "결근",
        EARLY_LEAVE: "조퇴",
    };

    return (
        <>
            <Sidebar checkInLabel="출근하기" />
            <Header />
            <main>
                <div className="page-header">
                    <div className="page-title">
                        <nav className="breadcrumbs">
                            <span>운영 포털</span>
                            <span style={{ color: "var(--outline-variant)" }}>/</span>
                            <span className="active-crumb">근태 관리</span>
                        </nav>
                        <h1>근태 현황 개요</h1>
                        <p>이번 달 근태 현황 및 성실도를 모니터링합니다.</p>
                    </div>
                </div>

                <div className="content-canvas">
                    {/* ✅ API 데이터로 통계 카드 렌더링 */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-header">
                                <div className="icon-box blue">
                                    <span className="material-symbols-outlined"
                                        style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                </div>
                            </div>
                            <div>
                                <p className="stat-value">{workDays} <span className="stat-unit">일</span></p>
                                <p className="stat-label">이번 달 출근 일수</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-header">
                                <div className="icon-box orange">
                                    <span className="material-symbols-outlined"
                                        style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                                </div>
                            </div>
                            <div>
                                <p className="stat-value">{String(lateDays).padStart(2, "0")} <span className="stat-unit">회</span></p>
                                <p className="stat-label">지각 횟수</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-header">
                                <div className="icon-box red">
                                    <span className="material-symbols-outlined"
                                        style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                                </div>
                            </div>
                            <div>
                                <p className="stat-value">{String(absentDays).padStart(2, "0")} <span className="stat-unit">일</span></p>
                                <p className="stat-label">총 결근 일수</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-header">
                                <div className="icon-box green">
                                    <span className="material-symbols-outlined"
                                        style={{ fontVariationSettings: "'FILL' 1" }}>leaderboard</span>
                                </div>
                            </div>
                            <div>
                                <p className="stat-value">{attendanceScore} <span className="stat-unit">%</span></p>
                                <p className="stat-label">근태 점수</p>
                            </div>
                        </div>
                    </div>

                    {/* ✅ API 데이터로 테이블 렌더링 */}
                    <div className="table-container">
                        <div className="table-header">
                            <div>
                                <h3>상세 근태 로그</h3>
                                <p>현재 정산 주기의 이력 데이터입니다.</p>
                            </div>
                        </div>
                        <div style={{ overflowX: "auto" }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>날짜</th>
                                        <th>출근 시각</th>
                                        <th>퇴근 시각</th>
                                        <th>근무 시간</th>
                                        <th className="text-center">상태</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {thisMonthData.length === 0 ? (
                                        <tr>
                                            <td colSpan={6} style={{ textAlign: "center", padding: "2rem", color: "#999" }}>
                                                근태 기록이 없습니다.
                                            </td>
                                        </tr>
                                    ) : (
                                        thisMonthData.map((a) => {
                                            const { primary, secondary } = formatDate(a.workDate);
                                            return (
                                                <tr key={a.attendanceId}>
                                                    <td>
                                                        <div className="date-cell">
                                                            <span className="date-primary">{primary}</span>
                                                            <span className="date-secondary">{secondary}</span>
                                                        </div>
                                                    </td>
                                                    <td className="time-cell">{formatTime(a.checkIn)}</td>
                                                    <td className="time-cell">{formatTime(a.checkOut)}</td>
                                                    <td className="time-cell">{calcWorkHours(a.checkIn, a.checkOut)}</td>
                                                    <td className="text-center">
                                                        <span className={`status-badge ${statusClass[a.status] ?? ""}`}>
                                                            {statusLabel[a.status] ?? a.status}
                                                        </span>
                                                    </td>
                                                    <td className="text-right">
                                                        <button className="btn-icon">
                                                            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
                                                                more_vert
                                                            </span>
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default withPageStyle(AttendanceManagement, "dashboard.css", pageCss);