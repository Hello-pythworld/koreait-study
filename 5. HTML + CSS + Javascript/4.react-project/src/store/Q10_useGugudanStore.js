import { create } from 'zustand';

const useGugudanStore = create((set, get) => ({

 a:'', //첫번째 수 
 b:'', //두번재 수
 userAnswer:'', // 사용자가 입력한 정답
 result:'', //정답 유무
 setA: (number) => set({ a:number}),
 setB: (number) => set({ b:number}),
 setUserAnswer: (number) => set({ userAnswer: number })
 }))
// //   checkAnswer: () => { //정답 확인 함수
//     // get() : 현재 저장소의 상태(state)를 불러오는 함수
//     const {a, b, userAnswer} = get();
//     const resultCheck = Number(a) * Number(b) === Number(userAnswer);
    
//     set({ result: resultCheck ? '정답입니다!' : '오답입니다!' });
//  },
//  reset: () => set({a:'', b:'', userAnswer:'', result:''})
// }))

export default useGugudanStore;