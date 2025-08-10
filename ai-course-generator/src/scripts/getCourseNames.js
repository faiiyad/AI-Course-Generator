const getCourseNames = async () => {
    const response = await fetch("http://127.0.0.1:8080/api/loadcoursenames");
    const data = await response.json()
    return data;
}


export default getCourseNames;