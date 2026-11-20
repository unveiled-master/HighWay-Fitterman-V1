import { Routes, Route } from 'react-router-dom';
import HomePage from './landing/pages/HomePage';
import ContentPage from './landing/pages/ContentPage';
import SosPlaceholder from './landing/pages/SosPlaceholder';

const publicPages = [
  'about',
  'how-it-works',
  'drivers',
  'mechanics',
  'become-a-mechanic',
  'roadside-assistance',
  'contact',
];

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sos/*" element={<SosPlaceholder />} />
      {publicPages.map((page) => (
        <Route
          key={page}
          path={`/${page}`}
          element={<ContentPage page={page} />}
        />
      ))}
    </Routes>
  );
}
