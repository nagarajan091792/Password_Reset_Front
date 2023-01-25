
import { Navigate } from "react-router-dom"
import Home from "./Home"


const PrivateRoutes = () => {
    
    let auth = localStorage.getItem("usertoken")
    return(
        auth ? <Home/> : <Navigate to="/"/>
    )
}
export default PrivateRoutes