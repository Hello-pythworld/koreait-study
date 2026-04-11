import { useMyVacationQuota } from "../query/vacationQuery";
import { useVacationFormState } from "./useVacationFormState";
import { useVacationValidation } from "./useVacationValidation";
import { useVacationSubmit } from "./useVacationSubmit";

export const useVacationRequest = () => {
    const {
        data: quota,
        isLoading: quotaLoading,
        isError: quotaError,
    } = useMyVacationQuota();

    const form = useVacationFormState(quota);
    const { validateVacationRequest } = useVacationValidation();
    const { submitVacationRequest, handleCancel, isPending } =
        useVacationSubmit();

    const handleSubmit = (e) => {
        e.preventDefault();

        const errorMessage = validateVacationRequest({
            startDate: form.startDate,
            days: form.days,
            remainingVacationDays: form.remainingVacationDays,
            minStartDate: form.minStartDate,
        });

        if (errorMessage) {
            alert(errorMessage);
            return;
        }

        submitVacationRequest({
            vacationType: form.vacationType,
            detailReason: form.detailReason,
            startDate: form.startDate,
            endDate: form.endDate,
            days: form.days,
            proxyEmployeeId: form.proxyEmployeeId,
        });
    };

    return {
        vacationType: form.vacationType,
        setVacationType: form.setVacationType,
        detailReason: form.detailReason,
        setDetailReason: form.setDetailReason,
        startDate: form.startDate,
        setStartDate: form.setStartDate,
        days: form.days,
        setDays: form.setDays,
        proxyEmployeeId: form.proxyEmployeeId,
        setProxyEmployeeId: form.setProxyEmployeeId,
        quota,
        quotaLoading,
        quotaError,
        remainingVacationDays: form.remainingVacationDays,
        expectedRemainingDays: form.expectedRemainingDays,
        minStartDate: form.minStartDate,
        handleSubmit,
        handleCancel,
        isPending,
    };
};