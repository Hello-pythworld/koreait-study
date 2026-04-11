import { useQuery } from "@tanstack/react-query";
import { getMemberList, searchMember } from "../api/memberApi";

// 전체 직원 조회 (페이징)
export const useMemberList = (searchKeyword, page, size) => {
    return useQuery({
        queryKey: ["members", searchKeyword, page],
        queryFn: () => searchKeyword
            ? searchMember(searchKeyword, page, size)
            : getMemberList(page, size),
    });
};