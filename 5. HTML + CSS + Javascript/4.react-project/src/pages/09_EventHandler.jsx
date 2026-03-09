
function EventHandler() {
    function handleClick() {
        alert('클릭되었습니다.');
    }

    return (
        <button onClick={handleClick}>클릭</button>
    )
}

export default EventHandler;