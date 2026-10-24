# GestãoService

CRM para assistência técnica, desenvolvido como projeto de estudo e portfólio.

## Problema

Assistências técnicas precisam organizar os dados dos clientes,
acompanhar orçamentos e controlar a execução dos serviços.

## Objetivo

Construir uma aplicação web que centralize esse processo,
desde o cadastro do cliente até o acompanhamento da cobrança.

## Tecnologias planejadas

- React, TypeScript e Vite
- Supabase Auth e PostgreSQL
- Políticas de acesso com RLS
- Supabase Edge Functions
- Testes automatizados e GitHub Actions

## Primeira versão — V0.1

- Login, logout e recuperação de senha
- Cadastro e edição de clientes
- Busca e paginação
- Arquivamento e restauração de clientes
- Isolamento dos dados por empresa
- Publicação da aplicação

## Status

Em planejamento e configuração inicial.
As funcionalidades listadas ainda serão implementadas.

## Usuários do sistema

### Administrador

Responsável pela gestão da empresa no sistema e pelo gerenciamento
dos membros e suas permissões.

### Atendente

Responsável pelo cadastro e atendimento dos clientes e pelo
acompanhamento dos processos operacionais da empresa.

## Isolamento por empresa

Cada usuário estará vinculado a uma empresa.

Os dados de uma empresa não poderão ser consultados ou alterados
por usuários de outra empresa. Essa regra será aplicada no banco
de dados por políticas de acesso RLS.

## Escopo da primeira entrega

A V0.1 permitirá que um usuário autorizado entre no sistema
e gerencie os clientes da sua empresa.

O cadastro de clientes terá listagem, busca, paginação, criação,
edição, arquivamento e restauração.

A entrega incluirá validação do isolamento entre empresas,
verificações automatizadas e publicação da aplicação.

## Funcionalidades para versões futuras

- Oportunidades e funil comercial.
- Orçamentos e aprovação.
- Ordens de serviço.
- Pagamentos em ambiente de teste.
- Indicadores comerciais e financeiros.

## Experimentos opcionais

Após a entrega principal, poderão ser desenvolvidas provas
de conceito com a API oficial do WhatsApp, integração fiscal
em ambiente de testes ou simulação identificada e Next.js.

## Dados de demonstração

O desenvolvimento e a demonstração utilizarão somente dados fictícios.
