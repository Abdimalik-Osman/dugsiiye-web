import './App.css';
import {
  BrowserRouter ,Routes,Route,Link,useParams} from "react-router-dom";
// import Showcase from './components/showcase'

import Navbar from './components/common/Navbar';
import About from './components/common/About';
import Contact from './components/common/Contact';
import Footer from './components/common/Footer';
import Home from './components/common/Home';
import Register from './components/usersInfo/Register';
import Login from './components/usersInfo/login';
import Courses from './components/common/Courses';
import NotFound from './components/notFound';
import ReactNavbar from './components/common/reactNavbar';
function App() {

  return (
    <BrowserRouter>
    <div className="container">
    {/* <Navbar /> */}
    <ReactNavbar />
      <Routes> 
        <Route  exact path="/" element={<Home />} />
        <Route  path="/courses" element={<Courses/>} />
        <Route  path="/about" element={<About/>} />
        <Route  path="/contact" element={<Contact/>}/>
        <Route  path="/login" element={<Login />} />
        <Route  path="/register" element={<Register/>}/>
        <Route  path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
        
        
  );
}

export default App;
