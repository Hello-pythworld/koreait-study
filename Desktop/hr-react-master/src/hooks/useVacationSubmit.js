import { useNavigate } from "react-router-dom";
import { useRequestVacation } from "../query/vacationQuery";

export const useVacationSubmit = () => {
    const navigate = useNavigate();
    const { mutate: requestVacation, isPending } = useRequestVacation();

    const submitVacationRequest = ({
        vacationType,
        detailReason,
        startDate,
        endDate,
        days,
        proxyEmployeeId,
    }) => {
        requestVacation(
            {
                vacationType,
                detailReason: vacationType === "기타" ? detailReason : "",
                startDate,
                endDate,
                days: Number(days),
                proxyEmployeeId: proxyEmployeeId.trim() || null,
            },
            {
                onSuccess: () => {
                    alert("휴가 신청이 완료되었습니다.");
                    navigate("/vacation-management");
                },
                onError: (error) => {
                    const message =
                        error?.response?.data?.message ||
                        error?.response?.data?.error ||
                        "휴가 신청에 실패했습니다.";
                    alert(message);
                },
            }
        );
    };

    const handleCancel = () => {
        navigate("/vacation-management");
    };

    return {
        submitVacationRequest,
        handleCancel,
        isPending,
    };
};