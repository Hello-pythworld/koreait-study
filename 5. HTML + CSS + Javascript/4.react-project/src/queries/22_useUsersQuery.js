import { getUser } from "../api/22_Axios";
import { useQuery } from "@tanstack/react-query";

export default function useUsersQuery(enabled) {
    return useQuery({
        queryKey: ['users'], // 해당 쿼리의 캐시 키(식별자)
        queryFn: getUser,    // 실제 API 요청을 수행하는 함수
        enabled,             // true면 쿼리 실행, false면, 쿼리 실행 않마
        select: (data) => {   // 응답 받은 데이터 후처리
            return data.map((user) => ({
                id: user.id,
                name: user.name.toUpperCase()
            }))
        }
    })
}