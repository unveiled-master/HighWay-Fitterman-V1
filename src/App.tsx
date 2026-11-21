import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './landing/pages/HomePage';
import ContentPage from './landing/pages/ContentPage';
import DriverRequestPage from './landing/pages/DriverRequestPage';
import AuthPage from './auth/AuthPage';
const publicPages = ['about','how-it-works','drivers','mechanics','become-a-mechanic','roadside-assistance','contact'];
export default function App() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/sos/*" element={<DriverRequestPage />} />
    <Route path="/auth" element={<Navigate to="/auth/register" replace />} />
    <Route path="/auth/:mode" element={<AuthPage />} />
    {publicPages.map((page) => <Route key={page} path={`/${page}`} element={<ContentPage page={page} />} />)}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}