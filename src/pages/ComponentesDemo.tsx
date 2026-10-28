import { useState } from 'react'

import Button from '../components/Button/Button'
import Input from '../components/Input/Input'

import '../components/ComponentesDemo/ComponentesDemo.css'

function ComponentesDemo() {
  const [loading, setLoading] = useState(false)

  return (
    <section className="componentes" aria-labelledby="componentes-title">
      <h1 id="componentes-title">Componentes da interface</h1>
      <p>Página de demonstração para desenvolvimento.</p>

      <section className="componentes__section" aria-labelledby="botoes-title">
        <h2 id="botoes-title">Botões</h2>

        <div className="componentes__actions">
          <Button onClick={() => setLoading(true)} loading={loading}>
            Testar carregamento
          </Button>

          <Button variant="secondary" onClick={() => setLoading(false)}>
            Restaurar botão
          </Button>

          <Button disabled>Botão desabilitado</Button>
        </div>
      </section>

      <section className="componentes__section" aria-labelledby="campos-title">
        <h2 id="campos-title">Campos</h2>

        <Input
          label="Nome do cliente"
          name="name"
          autoComplete="name"
          placeholder="Digite o nome"
          required
        />

        <Input
          label="E-mail"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue="email-invalido"
          error="Exemplo de erro: informe um e-mail válido."
        />

        <Input label="Campo desabilitado" disabled />
      </section>
    </section>
  )
}

export default ComponentesDemo
