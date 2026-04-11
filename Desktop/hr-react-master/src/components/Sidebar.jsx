import { NavLink, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

function Sidebar({ checkInLabel = "체크인" }) {
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();

    const role = user?.role;

    const handleLogout = () => {
        logout();
        navigate("/login", { replace: true });
    };

    const navClass = ({ isActive }) =>
        isActive ? "nav-link active" : "nav-link";

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <div className="logo-box">
                    <div className="logo-icon">
                        <span className="material-symbols-outlined">architecture</span>
                    </div>
                    <div className="logo-text">
                        <h2>경영진 포털</h2>
                        <p>글로벌 HR 시스템</p>
                    </div>
                </div>
            </div>

            <nav className="sidebar-nav">
                {role === "ADMIN" && (
                    <>

                        <NavLink className={navClass} to="/employee-management">
                            <span className="material-symbols-outlined">group</span>
                            <span className="text-sm">직원 관리</span>
                        </NavLink>

                        <NavLink className={navClass} to="/department-management">
                            <span className="material-symbols-outlined">domain</span>
                            <span className="text-sm">부서 관리</span>
                        </NavLink>
                    </>
                )}
                        <NavLink className={navClass} to="/dashboard">
                            <span className="material-symbols-outlined">dashboard</span>
                            <span className="text-sm">대시보드</span>
                        </NavLink>

                <NavLink className={navClass} to="/attendance-management">
                    <span className="material-symbols-outlined">event_available</span>
                    <span className="text-sm">근태 관리</span>
                </NavLink>

                <NavLink className={navClass} to="/vacation-management">
                    <span className="material-symbols-outlined">event_busy</span>
                    <span className="text-sm">휴가 관리</span>
                </NavLink>

                <NavLink className={navClass} to="/member-edit">
                    <span className="material-symbols-outlined">settings</span>
                    <span className="text-sm">내 정보 수정</span>
                </NavLink>
            </nav>

<div className="sidebar-footer">
    <button className="btn-check-in" type="button">
        {checkInLabel}
    </button>

    <NavLink className={navClass} to="/it-contact">
        <span className="material-symbols-outlined">help</span>
        문의 하기
    </NavLink>

    <button
        type="button"
        className="nav-link logout logout-btn"
        onClick={handleLogout}
    >
        <span className="material-symbols-outlined">logout</span>
        로그아웃
    </button>
</div>
        </aside>
    );
}

export default Sidebar;