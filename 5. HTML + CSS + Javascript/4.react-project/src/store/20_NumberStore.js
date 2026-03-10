import { create } from "zustand"

const useNumberStore = create((set) => ({
    numbers: [],
    addNumber: (num) => set((state) => ({ numbers: [...state.numbers, num] })),
    removeNumber: (removeIndex) => set((state) => ({
        numbers: state.numbers.filter((_, index) => index !== removeIndex)
    }))
}))

export default useNumberStore;