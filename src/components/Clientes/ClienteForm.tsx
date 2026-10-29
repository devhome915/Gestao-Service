import { useState } from 'react'
import type { FormEvent } from 'react'

import Button from '../Button/Button'
import Input from '../Input/Input'

export type Cliente = {
  id: string
  name: string
  email: string
  phone: string
}

type ClienteFormProps = {
  onSave: (cliente: Omit<Cliente, 'id'>) => void
  onCancel: () => void
}

function ClienteForm({ onSave, onCancel }: ClienteFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [nameError, setNameError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedName = name.trim()

    if (!trimmedName) {
      setNameError('Informe o nome do cliente.')
      return
    }

    setNameError('')

    onSave({
      name: trimmedName,
      email: email.trim(),
      phone: phone.trim(),
    })
  }

  return (
    <form className="clientes-form" onSubmit={handleSubmit}>
      <Input
        label="Nome"
        name="name"
        autoComplete="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
        error={nameError}
      />

      <Input
        label="E-mail"
        name="email"
        type="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        label="Telefone"
        name="phone"
        type="tel"
        autoComplete="tel"
        inputMode="numeric"
        value={phone}
        onChange={(event) => setPhone(event.target.value.replace(/\D/g, ''))}
      />

      <div className="clientes-form__actions">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit">Salvar cliente</Button>
      </div>
    </form>
  )
}

export default ClienteForm
