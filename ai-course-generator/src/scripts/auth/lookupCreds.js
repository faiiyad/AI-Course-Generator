import axios from "axios"

const lookupCreds = async (username, pass) => {
    const response = await axios.post(
            "http://127.0.0.1:8080/user/login",
            {username: username, pass: pass}
        );
    const token = await response.data.access_token;
    return token;
}

export default lookupCreds;