import { Routes, Route } from 'react-router-dom';
import  Home  from '../pages/Home';
import  { Transactions }  from '../pages/Transactions';
import  { ErrorPage }  from '../../src/routes/error-page';

export function AuthRoutes() {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Home />} />
      <Route path="transactions" element={<Transactions />} />
      <Route path="*" element={<ErrorPage />} />
      {/* Rotas protegidas
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      /> */}
    </Routes>
  );
}

