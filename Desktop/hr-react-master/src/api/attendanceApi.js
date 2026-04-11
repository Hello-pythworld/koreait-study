import axios from 'axios';

const BASE_URL = '/api/attendances';

// 전체 근태 조회
export const getAllAttendances = async () => {
    const res = await axios.get(BASE_URL);
    return res.data ?? [];
};

// 특정 직원 근태 조회
export const getAttendanceByMember = async (memberId) => {
    const res = await axios.get(`${BASE_URL}/${memberId}`);
    return res.data ?? [];
};

// 출근 체크인
export const checkIn = async (memberId) => {
    const res = await axios.post(`${BASE_URL}/check-in`, { memberId });
    return res.data;
};

// 퇴근 체크아웃
export const checkOut = async (attendanceId, memberId) => {
    const res = await axios.patch(`${BASE_URL}/check-out/${attendanceId}`, { memberId });
    return res.data;
};

// 근태 삭제
export const deleteAttendance = async (attendanceId) => {
    const res = await axios.delete(`${BASE_URL}/${attendanceId}`);
    return res.data;
};