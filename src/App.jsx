
import './App.css'
import PageNotFound from './components/PageNotFound/PageNotFound';
import Register from './components/Register/Register'
import Login from './components/Login/Login';
import AboutPage from './components/About/AboutPage';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './fonts.css'
import Layout from './components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products/Products';
import { Cart } from './components/cart/cart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { ApiContextProvider } from './contexts/ApiContext';
import { AuthProvider } from './contexts/AuthContext';


const routes = createBrowserRouter(
  [
    { path: '/', element: <Layout/>  , children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <ProductDetails /> },
      { path: '/cart', element: <Cart/> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '*', element: <PageNotFound /> }
    ]}
  ]
)

function App() {

  return <>
    <AuthProvider>
      <ApiContextProvider>
        <RouterProvider router={routes} />
      </ApiContextProvider>
    </AuthProvider>
  </>
}

export default App;
