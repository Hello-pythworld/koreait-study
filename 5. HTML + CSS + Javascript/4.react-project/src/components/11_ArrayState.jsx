import { useState } from "react";

function ArrayState() {
    // 배열 상태 초기 값 설정
    const [items, setItems] = useState(['item 1', 'item 2', 'item 3'])

    // 배열 상태 업데이트 (아이템 추가)
    function addItem() {
        // 기존 배열 복사하여 새로운 배열 생성하고, 'new item' 요소 추가
        //   - 새로운 객체를 생성해주어야 렌더링이 발생함.
        //   - 기존 객체를 넣으면 렌더링이 발생하지 않음
        //   - 상태 변경 함수(set)는 객체 참조 비교를 수행
        setItems(prevItem => [...prevItem, 'new item'])
    }
    return (
        <>
        
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <button onClick={addItem}>아이템 추가</button>
        </>
    )
}

export default ArrayState;