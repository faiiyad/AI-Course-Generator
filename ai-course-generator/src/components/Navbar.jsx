import { Link } from "react-router-dom";
import '../css/Navbar.css';


function Navbar() {


    return <>
        <div className="main">
            <Link to='/' className="nav-home">CourseGen</Link>
            <span className="blank"></span>
            <div className="left">
                <Link to='/courses'className="courses-nav">Courses</Link>
                <span className="divider"></span>
                <Link to='/user' className="user">User</Link>
            </div>
        </div>
    </>
}

export default Navbar;