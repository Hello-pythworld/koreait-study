import { useState } from "react";

function ObjectState() {
    // 객체 초기 값 설정
    const [user, setUser] = useState({name:"이영훈", age:22});

    function updateName() {
        // 기존 객체를 유지하고 특정 속성을 변경하는 방식
        //  - prevUser : 이전 state (매개변수 부분)
        //  - ...prevUser : 기존 객체 복사
        //  - name: "홍길동" : 해당 객체의 name 값 변경
        setUser(prevUser => ({ ...prevUser, name: "이영훈"}))
    }
    return (
        <>
            <div>
                <p>이름 : {user.name}</p>
                <p>나이 : {user.age}</p>
                <button onClick={updateName}>이름 업데이트</button>
            </div>
        </>
    )
}

export default ObjectState;