import './fonts.css';
import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products';
import Login from './components/Login';
// import AboutSection from'./components/AboutPage.jsx'
// import ProductDetails from'./components/ProductDetails.jsx'
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
import ProductDetails from './components/ProductDetails/ProductDetails';


function App() {


  return <>
  <Navbar />
    <Home />
  </>
}

export default App;
