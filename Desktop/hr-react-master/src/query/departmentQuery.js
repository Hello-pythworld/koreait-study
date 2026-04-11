import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
    getDepartmentList,
    searchDepartment,
    createDepartment,
    updateDepartment,
    deleteDepartment
} from '../api/departmentApi';

// 부서 목록 조회
export const useDepartmentList = () => {
    return useQuery({
        queryKey: ['departments'],
        queryFn: getDepartmentList
    });
};

// 부서 검색
export const useSearchDepartment = (deptName) => {
    return useQuery({
        queryKey: ['departments', 'search', deptName],
        queryFn: () => searchDepartment(deptName),
        enabled: !!deptName // deptName이 있을때만 실행하기 위하여
    });
};

// 부서 생성
export const useCreateDepartment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: createDepartment,
        onSuccess: () => {
            // 성공하면 자동 갱신
            queryClient.invalidateQueries({queryKey: ['departments']});
        }
    });
};

// 부서 수정
export const useUpdateDepartment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ departmentId, dto }) => updateDepartment(departmentId, dto),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['departments'] });
    }
    });
};

// 부서 삭제
export const useDeleteDepartment = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteDepartment,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['departments'] });
    }
    });
};