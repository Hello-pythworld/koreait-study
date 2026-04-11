function AttendanceCard({ dashboard }) {
    return (
        <div className="card attendance-card">
            <div>
                <div className="card-label-row">
                    <span className="card-label">근태 현황</span>
                    <div className="status-badge">
                        <span className="dot" />
                        {dashboard.todayStatus ?? "미출근"}
                    </div>
                </div>
                <p className="time-display">
                    {dashboard.todayCheckIn ?? "--:--"}
                </p>
                <p className="date-sub">
                    {new Date().toLocaleDateString("ko-KR")}
                </p>
            </div>
            <div className="btn-group">
                <button
                    className={dashboard.todayCheckIn ? "btn btn-disabled" : "btn btn-primary"}
                    disabled={!!dashboard.todayCheckIn}
                >
                    <span className="material-symbols-outlined">login</span>
                    출근하기
                </button>
                <button
                    className={dashboard.todayCheckIn && !dashboard.todayCheckOut ? "btn btn-primary" : "btn btn-disabled"}
                    disabled={!dashboard.todayCheckIn || !!dashboard.todayCheckOut}
                >
                    <span className="material-symbols-outlined">logout</span>
                    퇴근하기
                </button>
            </div>
        </div>
    );
}

export default AttendanceCard;