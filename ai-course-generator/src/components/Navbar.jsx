import { Link } from "react-router-dom";
import '../css/Navbar.css';


function Navbar() {


    return <>
        <div className="main">
            <Link to='/' className="home">CourseGen AI</Link>
            <span className="blank"></span>
            <Link to='/courses'className="courses-nav">Courses</Link>
            <span className="divider"></span>
            <p className="user">User</p>
        </div>
    </>
}

export default Navbar;