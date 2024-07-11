# API de Agenda de Contatos

- Esta é a documentação de requisitos para a API de Agenda de Contatos. Esta API permite aos usuários gerenciar contatos, categorizá-los e realizar operações de CRUD.

# Funcionalidade

- Os usuários devem poder adicionar novos contatos com informações como nome, número de telefone, endereço de e-mail, etc.

# Requisitos Funcionais

- [x] Cadastro de Contatos
- [x] Visualização de Contatos
- [x] Atualização de Contatos
- [x] Exclusão de Contatos

# Requisitos de Autenticação e Autorização

- [x] Autenticação de Usuários
- [x] Autorização de Acesso às Operações
- [x] Criação de usuário

# Regras de Negócios

- [x] Os usuários devem ser cadastrados com nome e email
- [x] O email deve ser uma chave unica
- [x] Os contatos devem conter pelo menos um nome e uma forma de contato (número de telefone, endereço de e-mail, etc.).
- [x] Somente usuários autenticados podem executar operações de criação, atualização e exclusão de contatos.
- [x] A autorização é baseada em funções de usuário, como administrador e usuário regular.
- [x] Todos os dados da API devem ser armazenados de forma segura e protegidos contra acesso não autorizado.
- [x] As entradas do usuário devem ser validadas para evitar a inserção de dados incorretos ou maliciosos.
