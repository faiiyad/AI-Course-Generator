const getCourses = async () => {
    const responses = await fetch("http://127.0.0.1:8080/api/data");
    const data = await responses.json();
    return data.courses;
}

export default getCourses;