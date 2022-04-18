// Component imports
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

// Css imports
import "../css/Navbar.css";


const Navbar = () =>{
    const cookies = new Cookies();
    console.log(cookies);

    
    const logout = () => {
        if (cookies) {
            cookies.remove("username", { maxAge: 1 });
            window.location.assign("/login");
        }
    }

    return ( 
        <>
            {cookies.get("username") ? (
                <div className="navbar navbar-light bg-purple-dark px-3 fixed-navbar">
                    <div className="container-fluid d-flex justify-content-between container-navbar">
                    <Link to="/" className="text-decoration-none"><p className="navbar-brand mb-0 h1 font-poppins font-white fw-bold">{`${cookies.get("name")} ${cookies.get("lastName")}`}</p></Link>
                        <div>
                            <ul className="navbar-nav">
                                <div className="nav-link active font-white">
                                    <li className="nav-item font-poppins fw-bold" aria-current="page" onClick={logout}style={{cursor: 'pointer'}}>Log out</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="navbar navbar-light bg-purple-dark px-3 fixed-navbar">
                    <div className="container-fluid d-flex justify-content-between container-navbar">
                        <Link to="/" className="text-decoration-none"><p className="navbar-brand mb-0 h1 font-poppins font-white fw-bold">Welcome user</p></Link>
                        <div>
                            <ul className="navbar-nav">
                                <Link className="nav-link active font-white" aria-current="page" to="/login">
                                    <li className="nav-item font-poppins fw-bold">Login</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            )
            }
            
        </>
    );
}
 
export default Navbar;