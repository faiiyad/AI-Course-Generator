import { Link } from "react-router-dom";
import '../css/auth/Login.css'

function LandingPage(){


    return <>
        <div className="content">
            <h2>You must be logged in to access this website!</h2>
            <button className="login-button">
                <Link to='/login'>Login!</Link>
            </button>
            <button className="login-button">
                <Link to='/signup'>Sign Up!</Link>
            </button>
        </div>
        
    
    </>
}

export default LandingPage;