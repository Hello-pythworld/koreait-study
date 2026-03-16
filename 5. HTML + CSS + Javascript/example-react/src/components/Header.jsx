import { Link } from "react-router-dom";

function Header(){
    return (
        <header style={{padding:"20px", borderBottom:"1px solid #ddd"}}>
            <nav>
                {/* 
                    아래의 a 태그를 Link 컴포넌트로 변경하세요.
                        - Home을 클릭하면 "/" 으로 이동합니다.
                        - Users를 클릭하면 "/users" 으로 이동합니다.
                */}
                <a style={{marginRight:"20px"}}>
                    Home
                </a>
                <a>
                    Users
                </a>
            </nav>
        </header>
    )
}

export default Header