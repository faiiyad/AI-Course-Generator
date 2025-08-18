import axios from "axios"

const getUserData = async (token) => {
    try {
        const response = await axios.post("http://127.0.0.1:8080/user/get_user_data",
        {},
        {headers:
            {Authorization: `Bearer ${token}`}
        }
        
    )
        console.log(response.data);
        
        return response;
    }
    catch(err){
        console.log(err);
    }
    finally{
        console.log("Done getting user data");
    }
}

export default getUserData;