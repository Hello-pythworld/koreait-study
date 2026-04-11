import { useState } from "react";
import {
    useAllVacations,
    useUpdateVacationStatus,
} from "../query/vacationQuery";

export const useVacationRequestList = () => {
    const { data: vacations = [], isLoading, isError } = useAllVacations(true);
    const { mutate: updateStatus } = useUpdateVacationStatus();

    const [filter, setFilter] = useState("ALL");

    // 필터링
    const filteredVacations =
        filter === "ALL"
            ? vacations
            : vacations.filter((v) => v.vacationType === filter);

    // 통계
    const pendingCount = vacations.filter((v) => v.status === "PENDING").length;
    const approvedCount = vacations.filter((v) => v.status === "APPROVED").length;
    const rejectedCount = vacations.filter((v) => v.status === "REJECTED").length;

    // 승인
    const handleApprove = (id) => {
        updateStatus({ vacationId: id, status: "APPROVED" });
    };

    // 반려
    const handleReject = (id) => {
        updateStatus({ vacationId: id, status: "REJECTED" });
    };

    return {
        filteredVacations,
        isLoading,
        isError,
        filter,
        setFilter,
        pendingCount,
        approvedCount,
        rejectedCount,
        handleApprove,
        handleReject,
    };
};