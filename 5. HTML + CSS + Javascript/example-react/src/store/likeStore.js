import { create } from "zustand";

// 아래 조건을 만족하는 Store 함수 작성하세요.
//  - 함수명 : useLikeStore
//  - 상태 변수(likes)와 상대 변경 함수(increase)를 갖습니다.
//  - 상태 변수의 기본 값은 {} 입니다.
//  - increase 함수는 id를 매개변수로 받습니다.
//      > set을 사용하여 현재 값에서 1을 증가하세요.
//      > likes 객체에 추가되어야 하므로 아래와 같은 로직을 가집니다.
//            likes: {
//                ...state.likes,
//                [id]: (state.likes[id] || 0) + 1
//            }