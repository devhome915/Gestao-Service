# Planejamento das telas — V0.1

Status: proposta inicial, ainda não implementada.

## 1. Login

Objetivo: permitir a entrada de um usuário cadastrado.

Elementos:
- Nome GestãoService.
- Campo de e-mail.
- Campo de senha.
- Botão Entrar.
- Link Esqueci minha senha.

Estados:
- Aguardando preenchimento.
- Enviando: botão desabilitado para evitar envio repetido.
- Erro de autenticação.
- Erro de conexão.

Após entrar, o usuário será direcionado para Clientes.

## 2. Recuperação de senha

Objetivo: solicitar um link para redefinir a senha.

Elementos:
- Campo de e-mail.
- Botão Enviar link.
- Link Voltar para o login.

A mensagem de confirmação será genérica, sem revelar
se o e-mail está cadastrado.

## 3. Redefinição de senha

Objetivo: definir uma nova senha após acessar o link recebido.

Elementos:
- Campo Nova senha.
- Campo Confirmar senha.
- Botão Salvar nova senha.

Estados:
- Link válido.
- Link inválido ou expirado.
- Erro de validação.
- Salvamento em andamento.
- Confirmação de alteração.

## 4. Clientes

Objetivo: consultar e organizar os clientes da empresa.

Elementos:
- Identificação da empresa e do usuário.
- Navegação com a opção Clientes.
- Botão Sair.
- Título Clientes.
- Botão Novo cliente.
- Busca por nome.
- Filtro Ativos ou Arquivados.
- Tabela com nome, e-mail, telefone e ações.
- Paginação.

Ações para clientes ativos:
- Editar.
- Arquivar com confirmação em modal.

Ações para clientes arquivados:
- Restaurar.

Estados:
- Carregando.
- Nenhum cliente cadastrado.
- Nenhum resultado para a busca.
- Falha ao carregar, com opção de tentar novamente.
- Lista carregada.

## 5. Cadastro e edição de cliente

Objetivo: cadastrar ou atualizar um cliente.

A primeira proposta usará uma página própria para o formulário.

Campos:
- Nome: obrigatório.
- E-mail: opcional, com validação quando preenchido.
- Telefone: opcional.

Elementos:
- Título indicando cadastro ou edição.
- Botão Salvar.
- Botão Cancelar.

Comportamentos:
- Mostrar erros próximos dos campos.
- Preservar os dados preenchidos quando houver falha.
- Desabilitar o envio enquanto estiver salvando.
- Exibir confirmação após salvar.
- Retornar à listagem após sucesso.

## 6. Componentes compartilhados

- Botão.
- Campo de formulário com label e mensagem de erro.
- Tabela.
- Paginação.
- Modal de confirmação.
- Toast de feedback.
- Indicador de carregamento.
- Mensagem de estado vazio.
- Mensagem de erro com ação para tentar novamente.

## 7. Diretrizes de uso

- Campos terão labels visíveis.
- A navegação deverá funcionar por teclado.
- O foco deverá ser visível.
- Informações não dependerão somente de cores.
- Modais deverão controlar e devolver o foco.
- Em telas pequenas, os formulários ocuparão a largura disponível.
- Tabelas deverão permitir consulta sem cortar as ações.
