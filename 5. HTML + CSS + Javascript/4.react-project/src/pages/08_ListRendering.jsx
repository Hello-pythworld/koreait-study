import Child from "../components/08_Child";

function ListRendering() {
    return (
        <>
            <p>ListRendering 페이지 입니다.</p>
            <Child numbers ={[1, 2, 3, 4, 5]}></Child>
        </>
    );
}

export default ListRendering;