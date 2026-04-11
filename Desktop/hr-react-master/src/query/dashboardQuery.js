import { useQuery } from "@tanstack/react-query"
import { getDashboard } from "../api/dashboardApi"

export const useDashboard = (memberId) => {
    return useQuery({
        queryKey: ['dashboard', memberId],
        queryFn: () => getDashboard(memberId),
        enabled: !!memberId,
        staleTime: 1000 * 60 * 5,
    });
};