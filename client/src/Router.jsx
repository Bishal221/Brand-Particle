import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Admin/Dashboard';
import Login from './Admin/Auth/Login';

const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={ <Dashboard/> } />
      <Route path="/admin-login" element={ <Login/> } />
    </Routes>
);

export default routes;
