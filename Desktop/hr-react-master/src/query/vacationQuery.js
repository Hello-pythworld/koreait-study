import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAuthStore from "../store/authStore";
import {
    requestVacation,
    getMyVacationHistory,
    getMyVacationQuota,
    getPendingVacations,
    getAllVacations,
    updateVacationStatus,
} from "../api/vacationApi";

// 내 휴가 내역 조회
export const useMyVacationHistory = () => {
    return useQuery({
        queryKey: ["myVacationHistory"],
        queryFn: getMyVacationHistory,
    });
};

// 휴가 신청
export const useRequestVacation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: requestVacation,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["myVacationHistory"] });
            queryClient.invalidateQueries({ queryKey: ["myVacationQuota"] });
            queryClient.invalidateQueries({ queryKey: ["allVacations"] });
            queryClient.invalidateQueries({ queryKey: ["pendingVacations"] });
        },
        onError: (error) => {
            console.error("신청 실패:", error);
        },
    });
};

// 관리자 승인 대기 목록 조회
export const usePendingVacations = (enabled = true) => {
    return useQuery({
        queryKey: ["pendingVacations"],
        queryFn: getPendingVacations,
        enabled,
    });
};

// 관리자 전체 휴가 목록 조회
export const useAllVacations = (enabled = true) => {
    return useQuery({
        queryKey: ["allVacations"],
        queryFn: getAllVacations,
        enabled,
    });
};




// 관리자 휴가 상태 변경
export const useUpdateVacationStatus = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: updateVacationStatus,

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["allVacations"] });
            queryClient.invalidateQueries({ queryKey: ["myVacationQuota"] });
            queryClient.invalidateQueries({ queryKey: ["pendingVacations"] });
            queryClient.invalidateQueries({ queryKey: ["myVacationHistory"] });
            queryClient.invalidateQueries({ queryKey: ["allVacations"] });
        },

        onError: (error) => {
            const message =
                error?.response?.data?.message ||
                error?.response?.data?.error ||
                "휴가 상태 변경에 실패했습니다.";

            alert(message);
            console.error("휴가 상태 변경 실패:", error);
        },
    });
};

// 내 휴가 quota 조회
export const useMyVacationQuota = () => {
    const { user } = useAuthStore();

    return useQuery({
        queryKey: ["myVacationQuota"],
        queryFn: getMyVacationQuota,
        enabled: !!user,
    });
};

