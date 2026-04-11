export const useVacationValidation = () => {
    const validateVacationRequest = ({
        startDate,
        days,
        remainingVacationDays,
        minStartDate,
    }) => {
        if (!startDate) {
            return "연차 사용일을 선택하세요.";
        }

        if (Number(days) > remainingVacationDays) {
            return "잔여 연차를 초과했습니다.";
        }

        if (startDate < minStartDate) {
            return "연차 사용일은 내일부터 선택할 수 있습니다.";
        }

        return null;
    };

    return {
        validateVacationRequest,
    };
};