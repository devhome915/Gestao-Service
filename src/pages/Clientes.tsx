import { useState } from 'react'

import ClienteFilters from '../components/Clientes/ClienteFilters'
import ClienteForm from '../components/Clientes/ClienteForm'
import type { Cliente } from '../components/Clientes/ClienteForm'
import ClienteTable from '../components/Clientes/ClienteTable'
import Button from '../components/Button/Button'

import '../components/Clientes/Clientes.css'

function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [search, setSearch] = useState('')
  const [showForm, setShowForm] = useState(false)

  const filteredClientes = clientes.filter((cliente) => {
    const searchTerm = search.trim().toLocaleLowerCase()

    return (
      cliente.name.toLocaleLowerCase().includes(searchTerm) ||
      cliente.email.toLocaleLowerCase().includes(searchTerm)
    )
  })

  function handleSave(cliente: Omit<Cliente, 'id'>) {
    setClientes((currentClientes) => [
      ...currentClientes,
      { ...cliente, id: crypto.randomUUID() },
    ])
    setShowForm(false)
  }

  return (
    <div className="clientes-page">
      <header className="clientes-page__header">
        <div>
          <h1 id="clientes-title">Clientes</h1>
          <p>Consulte e cadastre os clientes da empresa.</p>
        </div>
        <Button
          aria-expanded={showForm}
          aria-controls="novo-cliente-form"
          onClick={() => setShowForm((isOpen) => !isOpen)}
        >
          Novo cliente
        </Button>
      </header>

      <ClienteFilters search={search} onSearchChange={setSearch} />

      {showForm && (
        <section
          className="clientes-card"
          aria-labelledby="novo-cliente-title"
          id="novo-cliente-form"
        >
          <h2 id="novo-cliente-title">Novo cliente</h2>
          <ClienteForm
            onSave={handleSave}
            onCancel={() => setShowForm(false)}
          />
        </section>
      )}

      <section className="clientes-card" aria-labelledby="lista-clientes-title">
        <h2 id="lista-clientes-title">Lista de clientes</h2>

        {filteredClientes.length > 0 ? (
          <ClienteTable clientes={filteredClientes} />
        ) : (
          <p className="clientes-empty" role="status">
            {clientes.length === 0
              ? 'Nenhum cliente cadastrado. Cadastre um cliente para começar.'
              : 'Nenhum cliente encontrado para essa busca.'}
          </p>
        )}
      </section>
    </div>
  )
}

export default Clientes