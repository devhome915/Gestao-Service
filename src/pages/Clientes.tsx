import { useState } from 'react'
import Input from '../components/Input/Input'

import Button from '../components/Button/Button'

function Clientes() {
  const [loading, setLoading] = useState(false)

  return (
    <section aria-labelledby="clientes-title">
      <h1 id="clientes-title">Clientes</h1>
      <p>A gestão de clientes será implementada nas próximas tarefas.</p>

      <Button onClick={() => setLoading(true)} loading={loading}>
        Testar carregamento
      </Button>

      <Button variant="secondary" onClick={() => setLoading(false)}>
        Restaurar botão
      </Button>

      <Input
        label="Nome do cliente"
        name="name"
        autoComplete="name"
        placeholder="Digite o nome"
        required
        error="Exemplo de erro: informe o nome do cliente."
      />
    </section>
  )
}

export default Clientes