import './App.css'
import {Routes, Route} from 'react-router-dom';
import CourseList from './pages/CourseList';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CourseHome from './pages/CourseHome';
import CourseChapter from './pages/CourseChapter';


function App() {


  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/courses' element={<CourseList></CourseList>}></Route>
        <Route path='/courses/:difficulty/:id' element={<CourseHome></CourseHome>}></Route>
        <Route path='/courses/:difficulty/:id/:index' element={<CourseChapter></CourseChapter>}></Route>
      </Routes>
    </>
  )
}

export default App
