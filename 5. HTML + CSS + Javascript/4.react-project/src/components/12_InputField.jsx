import { useState } from "react";

function InputField() {
    const [name, setName] = useState('');

    function handleName() {
        console.log(event);
        setName(event.target.value)
        console.log(name);
    }

    function handleEmail() {
        console.log(event);
        setName(event.target.value)
        console.log(email);
    }
    return (
        <form action="">
            <input type="text" onChange={handleName}/>
            <input type="text" onChange={handleEmail}/>
        </form>
    )
}

export default InputField;