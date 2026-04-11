import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set) => ({
            accessToken: null,
            user: null,

            setAuth: (data) =>
                set({
                    accessToken: data.token,
                    user: {
                        memberId: data.memberId,
                        employeeNo: data.employeeNo,
                        name: data.name,
                        role: data.role,
                        deptName: data.deptName,
                        departmentId: data.departmentId,
                        hireDate:  data.hireDate
                    },
                }),

            logout: () =>
                set({
                    accessToken: null,
                    user: null,
                }),
        }),
        {
            name: "auth-storage",
        }
    )
);

export default useAuthStore;