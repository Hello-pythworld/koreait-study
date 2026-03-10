import useCounterStore from "../store/14_CounterStore";

function Counter() {
    const { count, increase } = useCounterStore();

    return(
        <>
        <p>{count}</p>
        <button onClick={increase}>클릭</button>
        </>

    )
}

export default Counter;