import Q3_LoginStatus from "../../components/Training/Q3_LoginStatus";

function Q3_LoginPage() {
    const isLogin = true; // true,false 설정

    return (
        <Q3_LoginStatus isLogin={isLogin} />
    )
}

export default Q3_LoginPage;