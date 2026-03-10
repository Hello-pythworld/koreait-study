import useToastStore from "../store/18_useToastStore"; // ← 추가!

function Toast() {
    const {message, showMessage, clearMessage }= useToastStore();

    return (
        <>
            <button onClick={() => showMessage('알림이 도착했습니다!')}>알림 띄우기</button>
            {message && 
                <div style={{marginTop: '10px', padding: '8px', backgroundColor: '#ffeaa7'}}>
                    {message}
                    <button onClick={clearMessage}>닫기</button>
                </div>
            }
        </>
    )
}

export default Toast;