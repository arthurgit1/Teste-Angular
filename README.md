🚀 Meu Projeto de Gestão de Processos Jurídicos
Olá! Este é o repositório do meu projeto prático de desenvolvedor Frontend Angular, focado na gestão de processos jurídicos. O objetivo é construir uma Single Page Application (SPA) completa, com autenticação, um dashboard interativo, integração com APIs externas e funcionalidades de CRUD.

Você pode encontrar o código-fonte aqui: https://github.com/arthurgit1/Teste-Angular

🛠️ As Tecnologias Que Estou Usando
Para este projeto, estou trabalhando com um conjunto de tecnologias modernas e robustas:

Angular 19: O coração da aplicação, me ajudando a construir uma SPA dinâmica.

TypeScript: Garantindo que meu código seja mais seguro e fácil de manter com tipagem forte.

TailwindCSS: Para estilizar a aplicação de forma rápida e responsiva, focando na experiência do usuário em diferentes telas.

PrimeNG: Uma biblioteca de componentes UI que me ajuda a criar interfaces ricas e padronizadas com menos esforço.

Keycloak com keycloak-angular: Essencial para gerenciar a autenticação e autorização dos usuários de forma segura.

✅ O Que Eu Já Consegui Fazer (e os Desafios!)
Até agora, consegui estabelecer uma base sólida para o projeto, mas não foi sem alguns desafios!

1. Configuração Inicial do Projeto
Comecei criando o projeto Angular 19 do zero.

Consegui instalar e configurar o TailwindCSS e o PrimeNG. Confesso que tive alguns erros de ERESOLVE por incompatibilidade de versões, mas com um pouco de persistência (e, às vezes, o --force do npm!), consegui fazer tudo funcionar.

Organizei a estrutura de pastas em core, shared e features para manter o código modular e limpo.

2. Autenticação com Keycloak
A integração com o Keycloak foi um ponto crucial. Configurei o APP_INITIALIZER para que o Keycloak seja inicializado antes da aplicação, garantindo que o usuário seja redirecionado para a tela de login se não estiver autenticado.

Criei um AuthGuard para proteger as rotas. Tive alguns "vai e volta" com o modificador override no construtor, mas finalmente consegui alinhar as versões do TypeScript e do keycloak-angular.

Implementei as funções de Login e Logout no AppComponent, que funcionam como esperado, redirecionando o usuário após a autenticação.

3. Módulo Dashboard (Estrutura Básica)
Criei o DashboardModule e o DashboardComponent. Aqui, enfrentei um desafio com o componente standalone. Meu projeto foi gerado sem essa flag por padrão, mas o componente acabou sendo gerado como standalone, causando conflitos com o NgModule. Após ajustar o dashboard.component.ts para não ser standalone, tudo se resolveu!

Estruturei o dashboard com um layout responsivo usando TailwindCSS.

Exibi cartões de estatísticas (p-card do PrimeNG) com dados mockados para o total de partes interessadas e processos DataJud.

Adicionei uma tabela (p-table do PrimeNG) para mostrar os últimos 5 processos, também com dados de exemplo.

⚙️ Como Rodar Este Projeto no Seu Computador
Se você quiser testar o que eu fiz até agora, siga estes passos:

Pré-requisitos
Node.js e npm: Tenha o Node.js (versão 18 ou superior) e o npm instalados.

Angular CLI: Instale-o globalmente: npm install -g @angular/cli

Servidor Keycloak: Essencial! Você precisará de uma instância do Keycloak rodando. Crie um realm e um client para a sua aplicação.

URL do Keycloak: Geralmente http://localhost:8080/auth

Realm: O nome do seu realm (ex: meu-realm)

Client ID: O ID do seu cliente (ex: minha-app-angular)

Lembre-se: Atualize essas informações no arquivo src/app/core/keycloak-initializer.ts antes de rodar.

Instalação
Clone o repositório:

git clone https://github.com/arthurgit1/Teste-Angular
cd Teste-Angular

Instale as dependências:

npm install

Dica: Se encontrar erros de ERESOLVE (conflitos de versão), tente instalar as dependências específicas que funcionaram para mim:

npm install primeng@17.18.0 primeicons --force
npm install keycloak-angular@19.0.0 keycloak-js

Execução
Para iniciar o servidor de desenvolvimento do Angular:

ng serve

A aplicação estará disponível em http://localhost:4200. Você será automaticamente redirecionado para a tela de login do Keycloak.

🚧 Próximos Passos (O Que Vem Por Aí!)
Ainda há muito trabalho pela frente para completar o desafio:

Aplicar AuthGuard: Proteger todas as rotas internas que exigem autenticação.

Gestão de Partes Interessadas: Implementar o CRUD completo com formulários reativos, validações, paginação, ordenação e filtros.

Integração com API Pública DataJud: Consumir os endpoints reais da API do DataJud, exibir os dados em tabelas com filtros e ordenação, e implementar a busca.

Melhorias e Diferenciais: Adicionar tratamento global de erros, indicadores de carregamento (spinners), implementar testes unitários e, quem sabe, fazer o deploy da aplicação!