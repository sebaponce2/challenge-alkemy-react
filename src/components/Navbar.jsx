// Component imports
import { Link } from "react-router-dom";

// Css imports
import "../css/Navbar.css";


const Navbar = () =>{
    return ( 
        <>
            <div className="navbar navbar-light bg-purple-dark px-3 fixed-navbar">
                <div className="container-fluid d-flex justify-content-between container-navbar">
                    <Link to="/" className="text-decoration-none"><p className="navbar-brand mb-0 h1 font-poppins font-white fw-bold">Sebastián Ponce</p></Link>
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item font-poppins fw-bold">
                                <Link className="nav-link active font-white" aria-current="page" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Navbar;