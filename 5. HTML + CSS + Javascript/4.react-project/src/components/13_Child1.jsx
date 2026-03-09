function Child1({ count, setCount}) {

    return (
    <>
        <p>Child1 값 : {count}</p>
        <button onClick={() => setCount(count => count+1)}>증가</button>
    </>
    )
}

export default Child1;