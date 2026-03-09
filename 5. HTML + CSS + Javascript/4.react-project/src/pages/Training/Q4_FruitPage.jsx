import Q4_FruitList from "../../components/Training/Q4_FruitList";

function Q4_FruitPage() {
    function getFruits() {
        return ["사과", "바나나", "포도"];
    }

    return (
        <Q4_FruitList fruits={getFruits()} />  // ← 함수 호출해서 전달
    )
}

export default Q4_FruitPage;