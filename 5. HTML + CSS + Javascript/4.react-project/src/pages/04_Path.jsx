import { useParams } from "react-router-dom"

export default function Path() {
    const {value} = useParams();

    return (
        <div>
            <p>값 : {value}</p>
        </div>
    )
}