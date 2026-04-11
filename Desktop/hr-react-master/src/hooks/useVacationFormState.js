import { useState } from "react";

const getTomorrowDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 1);

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
};

const calculateEndDate = (startDate, days) => {
    if (!startDate) return "";

    const numericDays = Number(days);
    const date = new Date(startDate);
    date.setDate(date.getDate() + numericDays - 1);

    return date.toISOString().split("T")[0];
};

export const useVacationFormState = (quota) => {
    const [vacationType, setVacationType] = useState("기타");
    const [detailReason, setDetailReason] = useState("");
    const [startDate, setStartDate] = useState("");
    const [days, setDays] = useState("1");
    const [proxyEmployeeId, setProxyEmployeeId] = useState("");

    const remainingVacationDays = quota?.remainingDays ?? 0;
    const expectedRemainingDays = Math.max(
        remainingVacationDays - Number(days || 0),
        0
    );

    const minStartDate = getTomorrowDate();
    const endDate = calculateEndDate(startDate, days);

    return {
        vacationType,
        setVacationType,
        detailReason,
        setDetailReason,
        startDate,
        setStartDate,
        days,
        setDays,
        proxyEmployeeId,
        setProxyEmployeeId,
        remainingVacationDays,
        expectedRemainingDays,
        minStartDate,
        endDate,
    };
};