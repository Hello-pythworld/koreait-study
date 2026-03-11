import { getUser } from "../api/22_Axios";
import { useQuery } from "@tanstack/react-query";

export default function useUsersQuery(enabled) {
    return useQuery({
        queryKey: ['users'], // 해당 쿼리의 캐시 키(식별자)
        queryFn: getUser,    // 실제 API 요청을 수행하는 함수
        enabled,             // true면 쿼리 실행, false면, 쿼리 실행 않마
        // select: (data) => {   // 응답 받은 데이터 후처리
        //     return data.map((user) => ({
        //         id: user.id,
        //         name: user.name.toUpperCase()
        //     }))
        // },
        retry: (failCount, error) => {
            // 첫번째 매개변수(failCount) : 실패 횟수
            // 두번째 매개변수(error) : 에러 정보

            // ?의 의미 : 옵셔널 체이닝
            //  - 객체가 없을 때(null, undefined) 에러가 발생하는 것을 방지
            //  - 객체가 비워져있으면 바로 undefined 반환
            const status = error?.response?.status;

            // 응답받은 상태코드가 400~500번이면, retry하지 않겠다.
            if(status >= 400 && status < 500) return false;

            return failCount < 2; // 그 외에는 retry 활성화
        },
        // 브라우저 포커스 복귀 시 자동 재시도 방지
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
        cacheTIme: 1000 * 60 * 10
    })
}