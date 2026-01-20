import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import TemplatePage from './components/Template';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<TemplatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
