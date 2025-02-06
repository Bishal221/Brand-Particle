import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Admin/Dashboard';

const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={ <Dashboard/> } />
      <Route path="/admin-login" element={ <Dashboard/> } />
    </Routes>
);

export default routes;
