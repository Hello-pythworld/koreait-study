import { useState } from "react";
import Child1 from "../components/13_Child1";
import Child2 from "../components/13_Child2";

function Lifting() {
    // 상태 끌어올리기(Lifting State Up)
    //  - 두개 이상의 자식 컴포넌트가 동일한 데이터를 공유해야할 경우, 사용하는 방식
    //  - 부모 컴포넌트의 상태를 변경하는 함수(set)를 하위 컴포넌트로 전달하여
    //    자식 컴포넌트가 데이터를 변경할 수 있도록 해주는 개념
    const [count, setCount] = useState(0);
    return (
        <>
           <Child1 count ={count} setCount={setCount}></Child1>
           <Child2 count ={count} setCount={setCount}></Child2>
        </>
    )
}

export default Lifting;