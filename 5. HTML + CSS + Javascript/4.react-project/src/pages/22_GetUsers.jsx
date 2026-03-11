import useUsersQuery from "../queries/22_useUsersQuery"
import { Link } from "react-router-dom";

function GetUsers2() {
    let enabledFlag = true;
    const{data, isLoading, error} = useUsersQuery(enabledFlag);

    if(isLoading) return <p>로딩중...</p>

    return (
        <>
            <h2>사용자 목록</h2>
            <Link to="/20">이동</Link>
            <p>{data}</p>
            <ul>
                {/* {data.map((user)=> (
                    <li key={user.id}>{user.name}</li>
                ))} */}
            </ul>
        </>
    )
}

export default GetUsers2;

