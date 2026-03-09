import Q5_EvenList from "../../components/Training/Q5_EvenList";
function Q5_EvenPage() {
    function getEvenNumbers() {
        const numbers = [1, 2, 3, 4, 5, 6];
        return numbers.filter(number => number %2 === 0);
    }
        return (
            <Q5_EvenList evenNumbers={getEvenNumbers()} />
        )
    }

export default Q5_EvenPage;