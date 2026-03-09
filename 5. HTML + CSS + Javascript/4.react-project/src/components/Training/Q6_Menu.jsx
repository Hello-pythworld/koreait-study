
function Q6_Menu({ menu }) {
    return(
    <ul>
        {menu.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
    )
}

export default Q6_Menu;
