import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import {
    useMyVacationHistory,
    usePendingVacations,
    useUpdateVacationStatus,
    useMyVacationQuota
} from "../query/vacationQuery";

export const useVacationManagement = () => {
    const navigate = useNavigate();
    const { user } = useAuthStore();

    const isAdmin = user?.role === "ADMIN";

    const {
        data: history = [],
        isLoading: historyLoading,
        isError: historyError,
    } = useMyVacationHistory();

    const {
        data: pendingVacations = [],
        isLoading: pendingLoading,
        isError: pendingError,
    } = usePendingVacations(isAdmin);

    const { mutate: updateVacationStatus } = useUpdateVacationStatus();


    const {
    data: quota,
    isLoading: quotaLoading,
    isError: quotaError,
} = useMyVacationQuota();

const totalVacationDays = quota?.totalDays ?? 0;

const usedVacationDays = quota?.usedDays ?? 0;

const pendingDays = quota?.pendingDays ?? 0;

const remainingVacationDays = quota?.remainingDays ?? 0;

    const handleApprove = (vacationId) => {
        if (!isAdmin) return;

        updateVacationStatus({
            vacationId,
            status: "APPROVED",
        });
    };

    const handleReject = (vacationId) => {
        if (!isAdmin) return;

        updateVacationStatus({
            vacationId,
            status: "REJECTED",
        });
    };

    const goToVacationRequest = () => {
        navigate("/vacation-request");
    };

    const goToVacationRequestList = () => {
        if (!isAdmin) return;
        navigate("/vacation-request-list");
    };

    return {
        isAdmin,
        history,
        historyLoading,
        historyError,
        pendingVacations,
        pendingLoading,
        pendingError,
        totalVacationDays,
        usedVacationDays,
        pendingDays,
        remainingVacationDays,
        handleApprove,
        handleReject,
        goToVacationRequest,
        goToVacationRequestList,
        quotaLoading,
        quotaError
    };
};