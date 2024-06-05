import { useLocation } from "react-router-dom"

export default function Product(){
    const location = useLocation()
    console.log(location)

    return <div>
        hello
    </div>
}