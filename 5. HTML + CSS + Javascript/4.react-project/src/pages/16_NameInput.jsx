import useNameStore from "../store/16_nameStore"

function NameInput() {
    const { name, setName } = useNameStore();

    return (
        <>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <p>안녕하세요, {name || '사용자'}님</p>
        </>
    )
}

export default NameInput;