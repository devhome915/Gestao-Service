import { useState } from 'react'

import Button from '../components/Button/Button'
import Input from '../components/Input/Input'
import Modal from '../components/Modal/Modal'
import Toast from '../components/Toast/Toast'

import '../components/ComponentesDemo/ComponentesDemo.css'

function ComponentesDemo() {
  const [loading, setLoading] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

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

      <section className="componentes__section" aria-labelledby="modal-title">
        <h2 id="modal-title">Modal</h2>

        <Button onClick={() => setModalOpen(true)}>
          Abrir modal
        </Button>

        <Modal
          open={modalOpen}
          title="Demonstração de modal"
          onClose={() => setModalOpen(false)}
        >
          <p>Use Cancelar ou Escape para fechar esta janela.</p>
        </Modal>
      </section>

      <section className="componentes__section" aria-labelledby="toast-title">
        <h2 id="toast-title">Toast</h2>

        <Button onClick={() => setToastMessage('Cliente salvo com sucesso.')}>
          Mostrar mensagem
        </Button>
      </section>

      <Toast
        message={toastMessage}
        onDismiss={() => setToastMessage('')}
      />
    </section>
  )
}

export default ComponentesDemo
