import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ErrorPage from './pages/Errorpage'
import Loginpage from './pages/Loginpage'
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import RegisterPage from './pages/Registerpage';


const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default App
