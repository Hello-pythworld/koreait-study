const STATUS_MAP = {
    NORMAL: { label: "정상", className: "tag-normal" },
    LATE:   { label: "지각", className: "tag-late" },
    ABSENT: { label: "결석", className: "tag-absent" },
};

function HistoryTable({ recentAttendances }) {
    return (
        <div className="card history-card">
            <div className="history-header">
                <div className="history-title-box">
                    <h3>최근 활동</h3>
                </div>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>날짜</th>
                            <th>출근</th>
                            <th>퇴근</th>
                            <th>근무 시간</th>
                            <th className="align-right">상태</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recentAttendances?.length > 0 ? (
                            recentAttendances.map((item) => (
                                <tr key={item.attendanceId}>
                                    <td>{item.workDate}</td>
                                    <td>{item.checkIn ?? "-"}</td>
                                    <td>{item.checkOut ?? "-"}</td>
                                    <td>{item.workHours ? `${item.workHours}시간` : "-"}</td>
                                    <td className="align-right">
                                        <span className={`tag ${STATUS_MAP[item.status]?.className ?? "tag-normal"}`}>
                                            {STATUS_MAP[item.status]?.label ?? "정상"}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} style={{ textAlign: "center", padding: "32px" }}>
                                    근태 이력이 없습니다.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HistoryTable;