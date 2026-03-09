function Q5_EvenList({ evenNumbers }) {
    return (
        <div>
            {evenNumbers.map((number, index) => (
                <p key={index}>{number}</p>
            ))}
        </div>
    )
}

export default Q5_EvenList;