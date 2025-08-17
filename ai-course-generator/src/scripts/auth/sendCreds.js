import axios from "axios";

const sendCreds = async ({username, pass}) => {

    try{
        const response = await axios.post(
            "http://127.0.0.1:8080/user/signup",
            {username: username, pass: pass}
        );
        const data = await response.data;
        return data.token;
    }
    catch(err){
        console.log(err);
    }
    
}


export default sendCreds;