import Input from '../Input/Input'

type ClienteFiltersProps = {
  search: string
  onSearchChange: (search: string) => void
}

function ClienteFilters({ search, onSearchChange }: ClienteFiltersProps) {
  return (
    <div className="clientes-filter">
      <Input
        label="Buscar clientes"
        name="search"
        type="search"
        placeholder="Digite o nome ou e-mail"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  )
}

export default ClienteFilters
