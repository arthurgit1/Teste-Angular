# Teste-Angular

Gestão de Processos Jurídicos (Teste Prático Frontend Angular)
Este projeto é uma Single Page Application (SPA) desenvolvida em Angular para a gestão de processos jurídicos. O objetivo é construir um sistema com autenticação robusta via Keycloak, um dashboard com estatísticas, integração com a API pública do DataJud, e funcionalidades de CRUD para partes interessadas.

🚀 Status Atual do Projeto
Até o momento, a base do projeto foi estabelecida com as seguintes configurações e funcionalidades implementadas:

🛠️ Tecnologias Principais
Angular 19: Framework principal para o desenvolvimento da SPA.

TypeScript: Linguagem de programação tipada para maior robustez do código.

TailwindCSS: Framework CSS utilitário para estilização rápida e responsiva.

PrimeNG: Biblioteca de componentes UI para Angular, garantindo uma interface rica e consistente.

Keycloak com keycloak-angular: Solução de autenticação e autorização para segurança da aplicação.

✅ Funcionalidades Implementadas (Base)
Configuração do Projeto:

Criação de um novo projeto Angular 19.

Instalação e configuração do TailwindCSS para estilização.

Instalação e configuração do PrimeNG para componentes de UI.

Estrutura de pastas modular (core, shared, features) para organização do código.

Autenticação com Keycloak:

Integração inicial com o Keycloak usando a biblioteca keycloak-angular.

Configuração do APP_INITIALIZER para inicializar o Keycloak antes do carregamento da aplicação, garantindo que o usuário seja redirecionado para a tela de login se não estiver autenticado (onLoad: 'login-required').

Criação de um AuthGuard básico para proteção de rotas (ainda não aplicado em todas as rotas).

Implementação de funcionalidade de Login e Logout no AppComponent, permitindo que o usuário entre e saia do sistema.

Módulo Dashboard (Estrutura Básica):

Criação do módulo DashboardModule e do componente DashboardComponent.

Estrutura básica do dashboard com layout responsivo usando TailwindCSS.

Exibição de cartões de estatísticas (p-card do PrimeNG) com dados mockados (total de partes interessadas, total de processos DataJud).

Tabela (p-table do PrimeNG) para listar os últimos 5 processos (com dados mockados).

🚀 Como Rodar o Projeto
Siga os passos abaixo para configurar e executar a aplicação em seu ambiente local:

Pré-requisitos
Node.js e npm: Certifique-se de ter o Node.js (versão 18 ou superior) e o npm instalados em sua máquina.

Angular CLI: Instale o Angular CLI globalmente:

npm install -g @angular/cli

Servidor Keycloak: Você precisará de uma instância do Keycloak rodando. Configure um realm e um client para a sua aplicação.

URL do Keycloak: Geralmente http://localhost:8080/auth

Realm: O nome do seu realm (ex: meu-realm)

Client ID: O ID do seu cliente (ex: minha-app-angular)

Importante: Atualize essas informações no arquivo src/app/core/keycloak-initializer.ts.

Instalação
Clone o repositório:

git clone [URL_DO_SEU_REPOSITORIO]
cd gestao-juridica

Instale as dependências:

npm install

Observação: Durante a instalação, pode ser que você tenha encontrado erros de ERESOLVE devido a conflitos de versão entre o Angular 19 e as versões mais recentes do PrimeNG e Keycloak. Isso foi contornado instalando versões específicas ou usando a flag --force (para PrimeNG) e garantindo a compatibilidade de versão para keycloak-angular. Se o erro persistir, tente:

npm install primeng@17.18.0 primeicons --force
npm install keycloak-angular@19.0.0 keycloak-js --force

Execução
Para iniciar o servidor de desenvolvimento do Angular:

ng serve

A aplicação estará disponível em http://localhost:4200. Você será redirecionado para a tela de login do Keycloak.

🚧 Próximos Passos
O projeto ainda está em desenvolvimento. As próximas etapas incluem:

Aplicar AuthGuard: Proteger todas as rotas internas que exigem autenticação.

Gestão de Partes Interessadas:

Implementar o CRUD completo (Create, Read, Update, Delete).

Desenvolver formulários reativos com validações.

Criar listagem com paginação, ordenação e filtros.

Integração com API Pública DataJud:

Consumir endpoints da API DataJud.

Exibir dados em tabela com paginação, filtro e ordenação.

Implementar busca por tribunal ou classe processual.

Melhorias e Diferenciais:

Tratamento global de erros com interceptores.

Indicadores de carregamento (spinners/skeleton loaders).

Implementação de testes unitários.

Deploy da aplicação.