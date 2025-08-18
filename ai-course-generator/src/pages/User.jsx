import { useEffect, useState } from "react";
import { useToken } from "../context/TokenContext";
import getUserData from "../scripts/user/getUserData";
import TotalStats from "../components/users/TotalStats";
import CourseStats from "../components/users/CourseStats";
import '../css/users/User.css'
import { useNavigate } from "react-router-dom";


function User(){

    const { token } = useToken();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({"username": "", "courseMapped": []})

    

    useEffect(()=>{
        const fetchUserData = async () => {
            try{
                const response = await getUserData(token);
                const data = await response?.data ?? {};
                setUserData(data);
            }
            catch(err){
                console.log(err);
                navigate("/login");
            }
        }

        fetchUserData();
        console.log(userData);
    }, [])

    
    if (token){
    return <>
        <h1>Welcome  {userData?.username ?? "user"}</h1>
        <TotalStats success={userData?.totalStats?.correct ?? 1} attempts={userData?.totalStats?.attempted ?? 1}></TotalStats>
        <h1>Course Data</h1>
        <div className="course-data">
            {userData?.courseMapped.map((course, idx)=>(
                <CourseStats key={course?.courseTitle ?? idx} course = {course}></CourseStats>
            ))}
        </div>
        
    </>}
    else{
        navigate("/login")
        
    }
}

export default User;