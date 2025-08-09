import axios from 'axios';

const generateCourse = async (prompt) => {
    

    try{
        const response = await axios.post('http://localhost:8080/api/getcourse', {prompt})
        console.log(response.data);

    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("done");
        
    }
}


export default generateCourse;