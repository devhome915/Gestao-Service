import type { Cliente } from './ClienteForm'

type ClienteTableProps = {
  clientes: Cliente[]
}

function ClienteTable({ clientes }: ClienteTableProps) {
  return (
    <div className="clientes-table-wrapper">
      <table className="clientes-table">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Telefone</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.name}</td>
              <td>{cliente.email || '—'}</td>
              <td>{cliente.phone || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClienteTable
