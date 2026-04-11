import axios from 'axios';

const BASE_URL = 'https://d1m2mdh79i68qn.cloudfront.net/api/members';

// 전체 직원 조회 (페이징)
export const getMemberList = async () => {
    const res = await axios.get(BASE_URL);
    return res.data.data ?? [];
};

// 직원 이름 검색 (페이징)
export const searchMember = async (name) => {
    const res = await axios.get(`${BASE_URL}/search`, { params: { name } });
    return res.data.data.content ?? [];
};

// 직원 등록
export const createMember = async (dto) => {
    const res = await axios.post(BASE_URL, dto);
    return res.data;
};

// 직원 수정
export const updateMember = async (memberId, dto) => {
    const res = await axios.patch(`${BASE_URL}/${memberId}`, dto);
    return res.data;
};

// memberApi.js에 추가
export const deleteMember = async (memberId) => {
    const response = await fetch(`/api/members/${memberId}`, {
        method: "DELETE",
    });
    if (!response.ok) throw new Error("삭제 실패");
    return response.json();
};