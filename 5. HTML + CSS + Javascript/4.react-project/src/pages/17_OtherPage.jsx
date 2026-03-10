import useVisitCountStore from "../store/17_VisitCountStore"; // ← 이거 추가!
import { Link } from "react-router-dom"; // ← 추가!
function OtherPage() {
    const { visitCount } = useVisitCountStore();
    return (
        <>
            <h2>다른 페이지</h2>
            <p>현재 visit 페이지에 방문한 횟수는 <storng>{visitCount}</storng>번 입니다!</p>
            <Link to="/17"> 방문 페이지로 이동하기</Link>
        </>
    )
}

export default OtherPage;