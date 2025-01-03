import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const routes = (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
);

export default routes;
