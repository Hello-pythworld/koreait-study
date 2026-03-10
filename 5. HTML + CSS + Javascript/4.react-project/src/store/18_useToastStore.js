import { create } from "zustand"

// 1. message 상태를 가짐 (초기값 : '')
// 2. showMessage : 상태 변경 함수
//  -> 문자열로 매개변수를 받아 message 상태에 값 할당
//  -> ex) showMessage('안녕하세요')와 같은 형식으로 사용
// 3. clearMessage : 상태 변경 함수
//  -> 기존 상태의 값(message)을 비어있는 값으로 변경
//  -> ex) clearMessage()와 같은 형식으로 사용
const useToastStore = create((set)=> ({
    message : '',
    showMessage: (newMessage) => set({message: newMessage}),
    clearMessage: () => set({ message : ''}),
}));

export default useToastStore;