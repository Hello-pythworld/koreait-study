import useUsersQuery from "../queries/22_useUsersQuery"

function GetUsers2() {
    let enabledFlag = true;
    const{data, isLoading, error} = useUsersQuery(enabledFlag);

    if(isLoading) return <p>로딩중...</p>

    return (
        <>
            <h2>사용자 목록</h2>
            <ul>
                {data.map((user)=> (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default GetUsers2;

