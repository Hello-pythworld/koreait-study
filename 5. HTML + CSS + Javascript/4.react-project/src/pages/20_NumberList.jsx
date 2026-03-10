import useNumberStore from "../store/20_NumberStore";
import { useState } from "react";

function NumberList() {
    const { numbers, addNumber, removeNumber } = useNumberStore();
    const [input, setInput] = useState('');

    function handleAddNumber() {
        const num = Number(input); // 사용자가 입력한 값 숫자로 변환
        if(!isNaN(num)) { // 숫자일 경우
            addNumber(num);
            setInput('');
        }
    }

    return (
        <>
            <h2>체크리스트</h2>

            <div>
                <input type="number" value= {input} onChange={(e)=> setInput(e.target.value)}/>
                <button onClick={handleAddNumber}>추가</button>
            </div>

            <div style={{ marginTop: '20px'}}>
                <strong>체크된 항목</strong>

                <ul>
                    {
                        numbers.map((num, index) => (
                            <li key={index}>
                                {num}
                            <button onClick={() => removeNumber(index)}>삭제</button>
                            </li>
                        ))
                    }

                </ul>
            </div>
        </>
    )
}

export default NumberList;