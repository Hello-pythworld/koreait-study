import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/userApi";

// 아래 조건을 만족하는 TanStack Query 함수를 작성하세요.
//  - 함수명 : useUsersQuery
//  - 매개변수는 받지 않습니다.
//  - useQuery를 사용하여 아래 API를 호출하세요.
//      > key : ["users"]
//      > fn : getUsers