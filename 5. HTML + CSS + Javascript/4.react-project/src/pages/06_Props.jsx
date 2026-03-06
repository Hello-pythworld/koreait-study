import Child from "../components/06_Child"

export default function Props() {
    // Props
    //  - 컴포넌트끼리 서로 데이터를 전달하기 위한 방식
    //  - 부모에서 던져주는 이름과 자식에서 받는 이름이 동일해야 함.
    return (
        <>
            <Child
            // img는 객체를 전달
            img={{ src: 'https://i.imgur.com/R6Pwu27.jpeg', alt:'고양이'}}
            // size는 값(200)을 전달
            size={200}/>
        </>
    )
}