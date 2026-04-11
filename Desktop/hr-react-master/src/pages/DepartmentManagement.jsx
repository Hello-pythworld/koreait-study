import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import withPageStyle from "../utils/withPageStyle.jsx";
import pageCss from "../styles/dashboard.css?inline";
import { useDepartmentList, useSearchDepartment } from "../query/departmentQuery";

function DepartmentManagement() {
    const navigate = useNavigate();
    const [searchKeyword, setSearchKeyword] = useState("");

    const { data: allDepts = [], isLoading } = useDepartmentList();
    const { data: searchedDepts = [] } = useSearchDepartment(searchKeyword);

    const departments = searchKeyword ? searchedDepts : allDepts;

    if (isLoading) return <div>로딩 중...</div>;

    return (
        <>
            <Sidebar />
            <Header />
            <main>
                <div className="content-canvas">
                    <div className="page-header">
                        <div className="page-title">
                            <nav className="breadcrumbs">
                                <span>운영 포털</span>
                                <span style={{ color: "var(--outline-variant)" }}>/</span>
                                <span className="active-crumb">부서 관리</span>
                            </nav>
                            <h1>부서 관리</h1>
                            <p>부서를 관리합니다.</p>
                        </div>
                        <div className="header-actions">
                            <button className="btn-dark">
                                <span className="material-symbols-outlined">download</span>
                                엑셀 내보내기
                            </button>
                            <button
                                className="btn-add"
                                onClick={() => navigate("/department-create")}
                            >
                                <span className="material-symbols-outlined">add</span>
                                부서 추가
                            </button>
                        </div>
                    </div>

                    <section className="table-container">
                        <div className="table-header">
                            <div className="search-bar">
                                <span className="material-symbols-outlined">search</span>
                                <input
                                    type="text"
                                    placeholder="부서명 또는 부서장으로 검색..."
                                    value={searchKeyword}
                                    onChange={(e) => setSearchKeyword(e.target.value)}
                                />
                            </div>
                            <button className="btn-dark">
                                <span className="material-symbols-outlined">neurology</span>
                                진단 요청하기
                            </button>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>코드</th>
                                    <th>부서명</th>
                                    <th>부서장</th>
                                    <th>인원</th>
                                    <th style={{ textAlign: "right" }}>관리</th>
                                </tr>
                            </thead>
                            <tbody>
                                {departments.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} style={{ textAlign: "center", padding: "32px" }}>
                                            부서 데이터가 없습니다.
                                        </td>
                                    </tr>
                                ) : (
                                    departments.map((dept) => (
                                        <tr key={dept.departmentId}>
                                            <td className="code-cell">{dept.deptCode}</td>
                                            <td className="name-cell">{dept.deptName}</td>
                                            <td>
                                                <div className="manager-cell">
                                                    <div className="avatar-shell">
                                                        {dept.managerName ? dept.managerName.slice(0, 1) : "-"}
                                                    </div>
                                                    <span>{dept.managerName ?? "미지정"}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="status-badge status-blue">
                                                    {dept.memberCount ?? 0}명
                                                </span>
                                            </td>
                                            <td style={{ textAlign: "right" }}>
                                                <button
                                                    className="btn-edit"
                                                    onClick={() => navigate(`/department-edit/${dept.departmentId}`)}
                                                >
                                                    상세 보기
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>

                        <div className="table-footer">
                            <p className="footer-info">
                                전체 {departments.length}개 부서
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default withPageStyle(DepartmentManagement, "dashboard.css", pageCss);