import { Link } from 'react-router'

function NotFound() {
  return (
    <main>
      <h1>Página não encontrada</h1>
      <p>Confira o endereço ou volte para o início.</p>
      <Link to="/login">Ir para login</Link>
    </main>
  )
}

export default NotFound