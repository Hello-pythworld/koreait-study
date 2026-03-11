import { Link, useLocation } from "react-router-dom";
import { useCheckMemberQuery } from "../query/checkMemberQuery";
import useUsersStore from "../store/userStore";
import { useEffect } from "react";


function Header() {
    const location = useLocation();
    const {data, isLoading, error} = useCheckMemberQuery();
    const {currentUser, setCurrentUser} = useUsersStore();

    useEffect(() => {
        setCurrentUser(data);
    }, [])

    const isActive = (path) => {
        return location.pathname === path ? 'nav-link active' : 'nav-link';
    }

    return (
        <header>
            <nav>
                <div className="logo">Spring Hub</div>
                <ul className="nav-center">
                    <li><Link to="/" className={isActive('/')}>홈</Link></li>
                    <li><Link to="/notice" className={isActive('/notice')}>공지사항</Link></li>
                    <li><Link to="/free" className={isActive('/free')}>자유게시판</Link></li>
                    <li><Link to="/profile" className={isActive('/profile')}>회원정보</Link></li>
                </ul>
                <div className="nav-right">
                    {!currentUser &&
                        <>
                            <Link to="/login" className="btn btn-secondary">로그인</Link>
                            <Link to="/register" className="btn btn-primary" 
                                        style={{textDecoration: 'none', display: 'inline-block'}}>
                                        회원가입</Link>
                        </>
                    }
                    {currentUser &&
                        <>
                            <Link to="/logout" className="btn btn-secondary">로그아웃</Link>
                        </>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header;