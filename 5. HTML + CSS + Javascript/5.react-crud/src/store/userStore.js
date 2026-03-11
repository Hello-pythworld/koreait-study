import { create } from 'zustand';

const useUserStore = create((set) => ({
    currentUser: null,
    setCurrentUser: (userData) => {
        set({ currentUser : userData });
    }
}))

export default useUserStore;