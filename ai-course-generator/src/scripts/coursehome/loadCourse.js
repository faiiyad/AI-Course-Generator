const loadCourse = async ({id, difficulty}) => {
    console.log(id, difficulty);
    
    const response = await fetch(`http://127.0.0.1:8080/api/data?id=${id}&difficulty=${difficulty}`);
    const data = response.json();
    return data;
}

export default loadCourse;