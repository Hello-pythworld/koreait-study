
function Child({numbers}) {
    console.log(numbers)


    // 1. 변수에 넣고 출력
    // const doubleNumbers = numbers.map(number => number*2);
    return (
        <>
        <p>Child 입니다.</p>
        {/* <p>{doubleNumbers}</p>
        <ul>{ numbers.map((number, index) => {
            return <li key = {index}>{number}</li>
        })} */}
        <ul>
            {/* 3보다 큰 요소만 렌더링 */}
            {numbers
                .filter(number => number > 3)
                .map((number, index) => {
                    return <li key={index}>{number}</li>
                })
            }
        </ul>
        </>
    )
}

export default Child;
