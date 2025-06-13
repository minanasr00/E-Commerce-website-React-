
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
import { WishlistProvider } from './contexts/WishlistContext';
import Wishlist from './components/Wishlist/Wishlist';
import { ProductsProvider } from './contexts/ProductsContext';
import Guard from './components/guard/Guard';
import AuthGard from './components/authGuard/AuthGard';

const routes = createBrowserRouter(
  [
    { path: '/', element: <Layout />  , children: [
      { path: '/', element:<Home /> },
      { path: '/about', element: <Guard><AboutPage /></Guard> },
      { path: '/products', element: <Guard><Products /></Guard> },
      { path: '/Wishlist', element: <Guard><Wishlist /></Guard> },
      { path: '/products/:id', element: <Guard><ProductDetails /></Guard> },
      { path: '/cart', element: <Guard><Cart/></Guard> },
      { path: '/login', element: <AuthGard><Login /></AuthGard> },
      { path: '/register', element: <AuthGard><Register /></AuthGard> },
      { path: '*', element: <Guard><PageNotFound /></Guard> }
    ]}
  ]
)

function App() {

  return <>
    <AuthProvider>
      <ApiContextProvider>
        <ProductsProvider>
        <WishlistProvider>
          <RouterProvider router={routes} />
          </WishlistProvider>
          </ProductsProvider>
      </ApiContextProvider>
    </AuthProvider>
    
  </>
}

export default App;
