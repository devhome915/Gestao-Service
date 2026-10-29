import { Link } from 'react-router'

function Login() {
  return (
    <main>
      <h1>Entrar no GestãoService</h1>
      <p>A autenticação será implementada em uma próxima tarefa.</p>
      <Link to="/clientes">Visualizar página de clientes</Link>
    </main>
  )
}

export default Login