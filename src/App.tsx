import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ErrorPage from './pages/Errorpage'
import Loginpage from './pages/Loginpage'
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import RegisterPage from './pages/Registerpage';
import Forgetpage from './pages/Forgetpage';
import TrackOrderpage from './pages/TrackOrderpage';
import Searchpage from './pages/Searchpage'; // You can use this to handle dynamic search
import ProductPage from './pages/ProductPage';
import Cartpage from './pages/Cartpage';
import Checkout from './components/Cart/Checkout';


const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/track-order" element={<TrackOrderpage />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/search/occasions/:occasion" element={<Searchpage />} />
        <Route path="/search/flowers/:flower" element={<Searchpage />} />
        <Route path="/search/treats/:treat" element={<Searchpage />} />
        <Route path="/search/gifts/:gift" element={<Searchpage />} />

        <Route path="/cart" element={<Cartpage />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/product/:item" element={<ProductPage />} />


        <Route path="/page-not-found" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget-password" element={<Forgetpage />} />
      </Route>
    </Routes>
  );
};

export default App
