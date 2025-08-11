import axios from 'axios';

const generateCourse = async (prompt) => {
    

    try{
        const response = await axios.post('http://localhost:8080/api/getcourse', {prompt})
        const data = await response.data;
        return data;

    }
    catch(error){
        console.log(error);
        return false;
    }
}


export default generateCourse;