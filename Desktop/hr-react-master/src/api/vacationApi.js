import api from "./instance";

const BASE_URL = "https://d1m2mdh79i68qn.cloudfront.net/vacations";
const ADMIN_BASE_URL = "https://d1m2mdh79i68qn.cloudfront.net/admin/vacations";

// 휴가 신청
export const requestVacation = async (dto) => {
    const res = await api.post(BASE_URL, dto);
    return res.data;
};

// 내 휴가 내역 조회
export const getMyVacationHistory = async () => {
    const res = await api.get(`${BASE_URL}/my`);
    return res.data.data;
};

// 내 휴가 quota 조회
export const getMyVacationQuota = async () => {
    const res = await api.get(`${BASE_URL}/quota/my`);
    return res.data.data;
};

// 관리자 승인 대기 목록 조회
export const getPendingVacations = async () => {
    const res = await api.get(`${ADMIN_BASE_URL}/pending`);
    return res.data.data;
};

// 관리자 전체 휴가 요청 조회
export const getAllVacations = async () => {
    const res = await api.get(ADMIN_BASE_URL);
    return res.data.data;
};

// 관리자 휴가 상태 변경
export const updateVacationStatus = async ({ vacationId, status }) => {
    const res = await api.patch(`${ADMIN_BASE_URL}/${vacationId}/status`, {
        status,
    });
    return res.data;
};