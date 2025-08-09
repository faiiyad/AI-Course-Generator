import { Link } from "react-router-dom";
import '../css/Navbar.css';


function Navbar() {


    return <>
        <div className="main">
            <Link to='/' className="home">AICourse</Link>
            <span className="blank"></span>
            <Link to='/courses'className="courses-nav">Courses</Link>
            <p>User</p>
        </div>
    </>
}

export default Navbar;