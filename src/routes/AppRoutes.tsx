import { Navigate, Route, Routes } from 'react-router'

import AppLayout from '../layouts/AppLayout'
import Clientes from '../pages/Clientes'
import ComponentesDemo from '../pages/ComponentesDemo'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route element={<AppLayout />}>
        <Route path="/clientes" element={<Clientes />} />
        {import.meta.env.DEV && (
          <Route path="/componentes" element={<ComponentesDemo />} />
        )}
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes