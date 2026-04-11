import { useDashboard as useDashboardQuery } from '../query/dashboardQuery';


export const useDashboard = (memberId) => {
    const { data: dashboard = {}, isLoading } = useDashboardQuery(memberId);


    const vacationPercent = dashboard.totalVacationDays
        ? (dashboard.remainVacationDays / dashboard.totalVacationDays) * 100
        : 0;
    
    return {
        dashboard,
        isLoading,
        vacationPercent
    };
};