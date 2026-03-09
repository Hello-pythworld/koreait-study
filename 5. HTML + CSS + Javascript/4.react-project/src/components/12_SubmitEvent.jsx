import { useEffect, useState } from "react";

function SubmitEvent() {
    const [formData, setFormData] = useState({});

    function handleSubmit(e) {
        e.preventDefault();

        setFormData({
            name: e.target.name.value,
            email: e.target.email.value
        });
    }
    
    useEffect(()=>{
        console.log(formData);
    })
    
    console.log(formData);

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name"/>
            <input type="text" name="email"/>
            <button type="submit">제출</button>
        </form>
    )
}

export default SubmitEvent;