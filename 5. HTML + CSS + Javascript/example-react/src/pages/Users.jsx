import { useUsersQuery } from "../query/useUsersQuery";
import UserCard from "../components/UserCard";

function Users(){
    const {data, isLoading, isError} = useUsersQuery()

    if(isLoading){
        return <p style={{padding:"20px"}}>Loading...</p>
    }

    if(isError){
        return <p>에러 발생</p>
    }

    return(
        <div style={{padding:"20px"}}>
            <h2>사용자 목록</h2>
            {
                data.map(user => (
                    <UserCard
                        key={user.id}
                        user={user}
                    />
                ))
            }
        </div>
    )
}

export default Users