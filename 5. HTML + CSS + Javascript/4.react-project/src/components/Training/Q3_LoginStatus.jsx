function Q3_LoginStatus({ isLogin }) {
    return (
            <h3>{isLogin ? "로그인 성공" :  "로그인 필요"}</h3>
    )
}

export default Q3_LoginStatus;
