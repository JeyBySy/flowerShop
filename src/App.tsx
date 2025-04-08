import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ErrorPage from './pages/Errorpage';
import Loginpage from './pages/Auth/Loginpage';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import RegisterPage from './pages/Auth/Registerpage';
import Forgetpage from './pages/Auth/Forgetpage';
import TrackOrderpage from './pages/TrackOrderpage';
import Searchpage from './pages/Searchpage';
import ProductPage from './pages/Product/ProductPage';
import Cartpage from './pages/Cart/Cartpage';
import Checkoutpage from './pages/Checkoutpage';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import ProtectedLayout from './layouts/ProtectedLayout';
import { ToastProvider } from './context/ToastContext';
import ToastContainer from './components/Global/ToastContainer';

const App: React.FC = () => {
  return (
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Homepage />} />

              {/* Required authentication */}
              <Route element={<ProtectedLayout />}>
                <Route path="/cart" element={<Cartpage />} />
                <Route path="/checkout" element={<Checkoutpage />} />
              </Route>

              <Route path="/track-order" element={<TrackOrderpage />} />
              <Route path="/search" element={<Searchpage />} />
              <Route path="/search/:categoryName/:subCategoryName" element={<Searchpage />} />

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
          <ToastContainer />
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
  );
};

export default App;
