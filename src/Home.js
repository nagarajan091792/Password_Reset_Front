import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const username = localStorage.getItem("username");
    let logout = () => {
        localStorage.removeItem("usertoken");
       localStorage.removeItem("username");
       // localStorage.clear()
       navigate("/");
     };
    return (
        <>
        <nav class="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
 <button style={{marginLeft:"auto"}} className="btn btn-outline-danger " onClick={logout}><b>Logout</b></button>
</nav>
        <h2 style={{color:"red",textAlign:'center'}}>Welcome {username}</h2>
        </>
    )
}
export default Home