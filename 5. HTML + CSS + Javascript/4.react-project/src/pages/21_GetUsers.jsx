import { useEffect, useState } from "react";
import { getUser } from "../api/21_Axios";


function GetUsers() {
    const [users, setUsers] = useState([]);

        useEffect(() => {
        const fetchUser = async () => {
            const data = await getUser();
            setUsers(data);
        }

        fetchUser()
    })

    return (
        <>
            <h2>사용자 목록</h2>
            <ul>
                {users.map((user)=> (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default GetUsers;

