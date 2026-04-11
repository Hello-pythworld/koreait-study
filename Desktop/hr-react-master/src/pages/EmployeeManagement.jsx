import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMemberList, searchMember } from "../api/memberApi";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import withPageStyle from "../utils/withPageStyle.jsx";
import pageCss from "../styles/dashboard.css?inline";
import { deleteMember } from "../api/memberApi";

function EmployeeManagement() {
    const [searchName, setSearchName] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [page, setPage] = useState(0);
    const size = 5;

    const { data = { content: [], totalElements: 0, totalPages: 0 }, isLoading } = useQuery({
        queryKey: ["members", searchKeyword, page],
        queryFn: () => searchKeyword
            ? searchMember(searchKeyword, page, size)
            : getMemberList(page, size),
    });

    const members = data.content ?? [];
    const totalPages = data.totalPages ?? 0;
    const totalElements = data.totalElements ?? 0;

    const filteredMembers = useMemo(() => {
        return members.filter(m => filterStatus ? m.status === filterStatus : true);
    }, [members, filterStatus]);

    const fullTime = members.filter(m => m.employType === '정규직').length;
    const partTime = members.filter(m => m.employType === '계약직').length;

    const handleSearch = () => {
        setPage(0);
        setSearchKeyword(searchName);
    };

    return (
        <>
            <Sidebar />
            <Header />
            <main>
                <div className="content-padding">
                    <div className="page-header">
                        <div className="page-title">
                            <nav className="breadcrumbs">
                                <span>조직</span>
                                <span style={{ color: "var(--outline-variant)" }}>/</span>
                                <span className="active-crumb">직원 명부</span>
                            </nav>
                            <h1>직원 관리</h1>
                            <p>전체 {totalElements}명 활성 인원 목록입니다.</p>
                        </div>
                        <button className="btn-add-employee" onClick={() => (window.location.href = "/employee-create")}>
                            <span className="material-symbols-outlined">person_add</span>
                            직원 추가
                        </button>
                    </div>

                    <div className="filter-grid">
                        <div className="search-container">
                            <span className="material-symbols-outlined" style={{ color: "var(--on-surface-variant)" }}>search</span>
                            <input
                                placeholder="직원 이름으로 검색..."
                                type="text"
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                            />
                        </div>
                        <div className="select-container">
                            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
                                <option value="">상태: 전체</option>
                                <option value="재직">재직</option>
                                <option value="퇴직">퇴직</option>
                            </select>
                        </div>
                        <div className="filter-btn" onClick={handleSearch}>
                            <span className="emp-details">검색</span>
                        </div>
                    </div>

                    <div className="table-card">
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <th>사번</th>
                                        <th>이름</th>
                                        <th>부서</th>
                                        <th>직책</th>
                                        <th>상태</th>
                                        <th style={{ textAlign: "right" }}>관리</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {isLoading ? (
                                        <tr><td colSpan={6} style={{ textAlign: "center" }}>로딩 중...</td></tr>
                                    ) : filteredMembers.length === 0 ? (
                                        <tr><td colSpan={6} style={{ textAlign: "center" }}>데이터가 없습니다.</td></tr>
                                    ) : (
                                        filteredMembers.map((m) => (
                                            <tr key={m.memberId}>
                                                <td className="emp-id">#{m.employeeNo ?? m.memberId}</td>
                                                <td>
                                                    <div className="emp-info">
                                                        <div className="emp-avatar bg-blue-light">{m.name?.charAt(0)}</div>
                                                        <div className="emp-details">
                                                            <p>{m.name}</p>
                                                            <p>{m.email}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="dept-cell">{m.deptName ?? '-'}</td>
                                                <td><span className="badge badge-staff">{m.role ?? '-'}</span></td>
                                                <td>
                                                    <div className="status-cell">
                                                        <span className={`status-dot ${m.status === '재직' ? 'active' : 'inactive'}`}></span>
                                                        <span className={`status-text ${m.status === '재직' ? 'active' : 'inactive'}`}>
                                                            {m.status === '재직' ? '활성' : '비활성'}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="action-cell">
                                                    <button className="btn-edit" onClick={() => (window.location.href = `/employee-edit/${m.memberId}`)}>
                                                        <span className="material-symbols-outlined">edit</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="table-footer">
                            <p className="footer-info">전체 {totalElements}명 중 {page * size + 1}~{Math.min((page + 1) * size, totalElements)}번째 직원 표시 중</p>
                            <div className="pagination">
                                <button className="page-btn" onClick={() => setPage(p => Math.max(p - 1, 0))} disabled={page === 0}>
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                {[...Array(totalPages)].map((_, i) => (
                                    <button key={i} className={`page-btn ${page === i ? 'active' : ''}`} onClick={() => setPage(i)}>
                                        {i + 1}
                                    </button>
                                ))}
                                <button className="page-btn" onClick={() => setPage(p => Math.min(p + 1, totalPages - 1))} disabled={page === totalPages - 1}>
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="stats-grid" style={{ marginTop: "24px" }}>
                        <div className="stat-card primary">
                            <p className="stat-label">총 직원 수</p>
                            <p className="stat-value">{totalElements}</p>
                        </div>
                        <div className="stat-card secondary">
                            <p className="stat-label">정규직</p>
                            <p className="stat-value">{fullTime}</p>
                        </div>
                        <div className="stat-card tertiary">
                            <p className="stat-label">계약직</p>
                            <p className="stat-value">{partTime}</p>
                        </div>
                        <div className="stat-card success">
                            <p className="stat-label">재직 중</p>
                            <p className="stat-value">{members.filter(m => m.status === '재직').length}</p>
                        </div>
                    </div>
                </div>
            </main >
        </>
    );
}

export default withPageStyle(EmployeeManagement, "dashboard.css", pageCss);
