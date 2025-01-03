import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Pages/Home';
import { ThemeContextProvider } from './Context/ThemeMode';
import routes from './Router';

createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    {routes}
  </ThemeContextProvider>
)
