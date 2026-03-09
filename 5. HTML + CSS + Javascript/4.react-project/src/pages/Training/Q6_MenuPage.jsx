import Q6_Menu from "../../components/Training/Q6_Menu";

function Q6_MenuPage() {
    function getMenu() {
        return ["홈, 소개, 문의하기"];
    }
    return (
        <Q6_Menu menu={getMenu()} />
    )
}

export default Q6_MenuPage;