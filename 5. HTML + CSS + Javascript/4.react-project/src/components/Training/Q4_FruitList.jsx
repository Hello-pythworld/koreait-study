function Q4_FruitList({ fruits }) {  // ← props로 받기
    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    )
}

export default Q4_FruitList;