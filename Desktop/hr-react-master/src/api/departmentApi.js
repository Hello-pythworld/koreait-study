import axios from 'axios';

const BASE_URL = 'https://d1m2mdh79i68qn.cloudfront.net/api/department';

// 부서 목록 조회
export const getDepartmentList = async () => {
    const res = await axios.get(BASE_URL);
    return res.data.data ?? [];
};

// 부서 검색
export const searchDepartment = async (deptName) => {
    const res = await axios.get(`${BASE_URL}/search`, { params: { deptName } });
    return res.data.data ?? [];
};

// 부서 생성
export const createDepartment = async (dto) => {
    const res = await axios.post(BASE_URL, dto);
    return res.data;
};

// 부서 수정
export const updateDepartment = async (departmentId, dto) => {
    const res = await axios.put(`${BASE_URL}/${departmentId}`, dto);
    return res.data;
};

// 부서 삭제
export const deleteDepartment = async (departmentId) => {
    const res = await axios.delete(`${BASE_URL}/${departmentId}`);
    return res.data;
};