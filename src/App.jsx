// import './App.css'
import Footer from './components/Footer/Footer';
import Topbar from './components/Topbar/Topbar';
import About from './pages/About/About';
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import NewArrivals from './pages/NewArrivals/NewArrivals';
import SocialMedia from './pages/SocialMedia/SocialMedia';
import Login from './pages/Login/Login'
import Signup from './pages/signup/Signup';
import Cart from './pages/Cart/Cart';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import NewArrivals from './pages/NewArrivals/NewArrivals';

function App() {

  return (
   <>
   <BrowserRouter>
    <Topbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>}/>
      <Route path="/contact-us" element={<Contact/>}/>
      <Route path="/new-arrivals" element={<NewArrivals/>}/>
      <Route path="/social-media" element={<SocialMedia/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/sign-up" element={<Signup/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
   </>
  )
}

export default App
