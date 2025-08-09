import './App.css'
import {Routes, Route} from 'react-router-dom';
import CourseList from './pages/CourseList';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CourseHome from './pages/CourseHome';


function App() {


  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/courses' element={<CourseList></CourseList>}></Route>
        <Route path='/courses/course' element={<CourseHome></CourseHome>}></Route>
      </Routes>
    </>
  )
}

export default App
