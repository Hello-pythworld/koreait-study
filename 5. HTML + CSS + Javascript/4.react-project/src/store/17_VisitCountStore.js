import { create } from "zustand"

const useVisitCountStore = create((set) => ({
    visitCount:0,
    increment: () => set((state)=> ({visitCount : state.visitCount+1}))
}))

export default useVisitCountStore;