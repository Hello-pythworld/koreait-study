import { create } from "zustand";

const DropDownStore = create((set)=> ({
    selectOption: '',
    setSelectOption: (value) => set({selectOption: value})
}))

export default DropDownStore;