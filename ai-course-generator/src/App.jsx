import './App.css'
import {Routes, Route} from 'react-router-dom';
import CourseList from './pages/CourseList';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import CourseHome from './pages/CourseHome';
import CourseChapter from './pages/CourseChapter';
import Footer from './components/Footer';
import Login from './pages/Login';
import { TokenProvider } from './context/TokenContext';
import SignUp from './pages/SignUp';


function App() {


  return (
    <>
      <TokenProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/courses' element={<CourseList></CourseList>}></Route>
          <Route path='/courses/:difficulty/:id' element={<CourseHome></CourseHome>}></Route>
          <Route path='/courses/:difficulty/:id/:index' element={<CourseChapter></CourseChapter>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
        </Routes>
        <Footer></Footer>
      </TokenProvider>
    </>
  )
}

export default App
