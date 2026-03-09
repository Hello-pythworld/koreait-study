
function Q2_Button() {
    function buttonClick() {
        alert("버튼이 클릭 되었습니다!");
    }
    return (
        <button onClick={buttonClick}>클릭</button>
    )
}

export default Q2_Button;