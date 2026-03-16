import { Link } from "react-router-dom";

function Header(){
    return (
        <header style={{padding:"20px", borderBottom:"1px solid #ddd"}}>
            <nav>
                
                <Link style={{marginRight:"20px"}}>
                    Home
                    
                    <li><Link to="/" className={isActive('/')}>Home</Link></li>
                    <li><Link to="/users" className={isActive('/')}>Users</Link></li>
                </Link>
                <a>
                    Users
                </a>
            </nav>
        </header>
    )
}

export default Header