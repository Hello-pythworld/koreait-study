import { useParams } from "react-router-dom"

export default function Extension() {
    const todoHeader = "todo-header"

    return(
        <>
            <h1 className={todoHeader}>Todo List</h1>
        
        <ul style = {{backGroundColor : 'red', color: 'blue'}}>
        <li>잠자기</li>
        <li>먹기</li>
        <li>놀기</li>        
        </ul>
    
        </>
    )

}