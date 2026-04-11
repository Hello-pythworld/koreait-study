function StatsCard({ dashboard, vacationPercent }) {
    return (
        <div className="stats-col">
            {/* 연차 휴가 */}
            <div className="card stat-card">
                <div className="stat-header">
                    <div className="stat-icon icon-blue">
                        <span className="material-symbols-outlined">calendar_month</span>
                    </div>
                    <div>
                        <p className="stat-title">연차 휴가</p>
                        <p className="stat-desc">잔여 휴가 일수</p>
                    </div>
                </div>
                <div className="stat-value-box">
                    <span className="stat-value" style={{ color: "var(--primary)" }}>
                        {dashboard.remainVacationDays ?? 0}
                    </span>
                    <span className="stat-unit">일</span>
                </div>
                <div className="stat-bar">
                    <div className="stat-progress" style={{ width: `${vacationPercent}%` }} />
                </div>
            </div>

            {/* 이번 달 근무 */}
            <div className="card stat-card">
                <div className="stat-header">
                    <div className="stat-icon icon-orange">
                        <span className="material-symbols-outlined">work_history</span>
                    </div>
                    <div>
                        <p className="stat-title">이번 달 근무</p>
                        <p className="stat-desc">출근 기록 일수</p>
                    </div>
                </div>
                <div className="stat-value-box">
                    <span className="stat-value">{dashboard.monthlyWorkDays ?? 0}</span>
                    <span className="stat-unit">/ {dashboard.monthlyTotalDays ?? 22} 일</span>
                </div>
            </div>
        </div>
    );
}

export default StatsCard;