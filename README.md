# Cartão de Visita Interativo

Este projeto é uma aplicação Angular que permite criar e visualizar cartões de visita interativos. O usuário pode inserir informações pessoais em um formulário dividido em etapas e, em seguida, visualizar essas informações em um cartão que pode ser girado para revelar detalhes adicionais.

### Link do projeto
[<link>](https://card-master-xi.vercel.app/)

## Funcionalidades

- **Formulário de Cadastro**: Um formulário dividido em duas etapas que coleta informações pessoais, incluindo nome, idade, telefone, e-mail e endereço.
- **Cartão Interativo**: Um cartão que pode ser girado para exibir detalhes do usuário, como idade, telefone, e-mail e endereço.
- **Validação de Formulário**: Valida as entradas do usuário para garantir que todos os campos obrigatórios sejam preenchidos corretamente.
- **Uso de FontAwesome**: Ícones da biblioteca FontAwesome são utilizados para melhorar a interface do usuário.

## Estrutura do Projeto

### Componentes

- **CardComponent**: Componente que exibe o cartão de visita interativo.
  - Exibe o nome na frente do cartão.
  - Detalhes como idade, telefone, e-mail e endereço são exibidos na parte de trás do cartão.

- **FormComponent**: Componente responsável pelo formulário de cadastro.
  - Possui validações para garantir entradas corretas.
  - Permite navegação entre as etapas do formulário.

### Interfaces

- **Pessoa**: Interface que define a estrutura dos dados pessoais coletados no formulário.

## Dependências

- **Angular**: Framework principal utilizado para construir a aplicação.
- **FontAwesome**: Biblioteca de ícones utilizada para melhorar a estética da interface.
- **Reactive Forms**: Utilizado para a manipulação e validação dos formulários.

## Instalação

Instale as dependências:

1. Instale as dependências:
npm install
Inicie o servidor de desenvolvimento:

2. Inicie o servidor de desenvolvimento:
ng serve

3. Abra seu navegador e acesse:
http://localhost:4200

### Como Usar

1. Preencha o formulário com as informações solicitadas.
2. Navegue entre as etapas do formulário usando os botões "Anterior" e "Próximo".
3. Após preencher todas as informações, clique em "Gerar Cartão de Visitas".
4. Você será redirecionado para a página do cartão, onde poderá visualizar os dados inseridos.



