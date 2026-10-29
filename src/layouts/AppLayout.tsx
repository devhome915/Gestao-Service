import { NavLink, Outlet } from 'react-router'

import './AppLayout.css'

function AppLayout() {
  return (
    <div className="app-layout">
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>

      <header className="app-header">
        <strong className="app-header__brand">GestãoService</strong>
        <span>Ambiente de desenvolvimento</span>
      </header>

      <aside className="app-sidebar">
        <nav aria-label="Navegação principal">
          <NavLink
            to="/clientes"
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link--active' : 'nav-link'
            }
          >
            Clientes
          </NavLink>
        </nav>
      </aside>

      <main id="main-content" className="app-content" tabIndex={-1}>
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout