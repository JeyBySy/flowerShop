import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ErrorPage from './pages/Errorpage'
import Loginpage from './pages/Auth/Loginpage'
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import RegisterPage from './pages/Auth/Registerpage';
import Forgetpage from './pages/Auth/Forgetpage';
import TrackOrderpage from './pages/TrackOrderpage';
import Searchpage from './pages/Searchpage'; // You can use this to handle dynamic search
import ProductPage from './pages/Product/ProductPage';
import Cartpage from './pages/Cart/Cartpage';
import Checkoutpage from './pages/Checkoutpage';



const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/track-order" element={<TrackOrderpage />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/search/:category/:subCategory" element={<Searchpage />} />

        <Route path="/cart" element={<Cartpage />} />
        <Route path="/checkout" element={<Checkoutpage />} />

        <Route path="/product/:id/:item" element={<ProductPage />} />


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
