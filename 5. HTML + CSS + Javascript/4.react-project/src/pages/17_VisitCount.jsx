import useVisitCountStore from "../store/17_VisitCountStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function VisitCount() {
    const {visitCount, increment} = useVisitCountStore();

    // React 컴포넌트가 렌더링된 이후 실행하는 함수
    //  - 사이드 이펙트 처리용으로 사용
    //  - 사이드 이펙트 : 함수가 자신의 결과(return) 외에 외부 상태를 변경하거나 외부와 상호작용하는 모든 작업을 의미

    // 1. 렌더링된 이후에 increment()함수를 호출하겠다!
    // 2. visitCount 상태가 변경될 때 increment() 함수를 호출하겠다!
    useEffect(() => {
        increment();
    }, []);

    return (
        <>
            <h2>방문 페이지</h2>
            <p>이 페이지에 방문하면 방문 횟수가 증가합니다!</p>
            <p>현재 방문 횟수는 <strong>{visitCount}</strong>번 입니다!</p>
            <Link to="/17_Other">다른 페이지로 이동</Link>

        </>
    )
}

export default VisitCount;