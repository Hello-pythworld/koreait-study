import { useState } from "react";
import useGugudanStore from "../../store/Q10_useGugudanStore";

function Gugudan() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [answer, setAnswer] = useState('');
    const [result, setResult] = useState(null);

    const check = () => {
        if (Number(answer)  === a*b) {
            setResult(true);
        } else {
            setResult(false);
        }
    };

    const reset = () => {
        setA('');
        setB('');
        setAnswer('');
        setResult(null);
    };
    return(
        <>
            <div>
                <label htmlFor="number1">첫번째 수(a):</label>
                <input type="number" onChange={(e) =>  setA(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="number2">두번째 수(b):</label>
                <input type="number" id="number2" onChange={(e) => setB(Number(e.target.value))}
                />
            </div>

            <p>
                { /* 문제 : a x b = ? 형식으로 보여야 함.*/}
                문제: _ x _ = ?
                {a || '_'} x {b || '_'} = ?
            </p>
            <input type="number" onChange={(e) => setUserAnswer(e.target.value)}>
            </input>value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            
            
            <button onClick={check}>정답 확인</button>
            <button style={{marginLeft: '10px'}} onClick={reset}>초기화</button>

            {/*
                사용자가 입력한 숫자가 정답일 경우, '정답 입니다!'출력
                정답이 아닐 경우, '오답 입니다!' 출력
            */ }
            {result === true && <p>정답입니다!</p>}
            {result === false && <p>오답입니다!</p>}
        </>
    )
}

export default Gugudan;