# Shoppingify
A aplicação Shoppingify é uma espécie de super lista de compras que você pode levar para qualquer lugar. Um usuário pode adicionar items por categorias já pré-cadastradas e esses itens serão públicos para qualquer um poder adicionar em sua lista também. Além de ter acesso a suas listas e função como deletar a lista e check-list do items, o usuário também pode vizualizar suas estatísticas como items e categorias mais usados em suas listas.

<p align="center">
  <img src="/demo/demo_shoppingify_desktop.gif" />
</p>

<p align="center">
  <img src="/demo/demo_shoppingify_mobile.gif" />
</p>


## Pré-requisitos
Ter uma versão atualizada do NodeJS instalada em sua máquina e um gerenciador de pacotes (yarn ou npm).

## Como executar
Vá até a paste do projeto e digite:
```
yarn ou npm install
```
para instalar as dependencias
```
yarn dev ou npm run dev
```
para executar o projeto.

## Aviso
A aplicação consome uma API própria também, onde o codigo fonte pode ser encontrado [aqui](https://github.com/CaioGrossi/Shoppingify-API). Para fazer a aplicação rodar corretamente na sua máquina local, siga as intruções descritas no README.md do codigo fonte da API. Se quiser apenas vizualizar os componentes, rode o comando ``` yarn storybook ```.

## Habilidades desenvolvidas/aprimadoras com o desenvolvimento desse projeto

### Componentização
Por ser um projeto que possui muitos componentes e uma quantidade média de páginas, foi possível explorar bem a parte de componentização com React. Os componentes foram estruturados de modo a serem reutilizáveis e estilizados com CSS in JS. Cada componente possui um teste unitário também, para assegurar o bom funcionamento de suas responsabilidades utilizando Jest e React Testing Library. Pela quantidade de componentes, em alguns casos pude experimentar metodologias como TDD.

### Paginas e templates
No que se diz as páginas da aplicação, optei por separar cada página em templates para facilitar os testes e separar as responsabilidades de consumir a API (que foi tomada pelos arquivos na paginas 'page' do projeto, o próprio arquivo de pagina do Next), e de mostrar os dados (tomada pelos templates). Com essa abordagem, pude criar templates que são usados em todas as páginas, como o "Base" que possui a base para as telas internas  e o "Auth" que possui a base para telas de de autenticação.

### Testes unitários
Como já falado nos dois tópicos acima, todos os componentes e paginas tem um teste unitário para suas funcionalidades. Pude explorar bastente as funcionalidades do Jest (desde coisas básicas como as funções de matchers até mocks de funções de outros pacotes), da React Testing Library (como as queries síncronas e assíncronas) e de ferramentas como MSW (Mock Service Worker, utilizado para mock de rotas da API). Com os testes, pude ter mais segurança ao desenvolver o projeto e adicionar mais funcionalidades. 

### Autenticação de usuário
Para esse projeto decidi utilizar a biblioteca Next Auth por sua facilidade e funcinalidades que são perfeitas para o problema. A biblioteca permite a autenticação por vários tipos (como conta google, apple, email e etc) e facilita o acesso aos dados do usuário, tanto no server side, quanto no client side (o que facilita muito para controlar chamadas autenticadas a API).

### Utilização das principais features do NextJs
Todas as paginas utilizam a geração por servidor (getServerSideProps) que é uma opção oferecida pelo framework. Para esse projeto em sí, não era tão crucial a utlização dessa geração já que não depende tanto de coisas como SEO, mas atendeu muito bem a demanda gerando paginas de forma rápida e performática. Muitas vezes foram utilizados recursos de rotas como 'pathname' (utilizado no componente Sidebar para identificar a atual rota) e de 'push' para o redirecionamento.

### Context API
Sem dúvida uma das pricipais funcionalidades foi a Context API do React. Ela que que mantem a comunicação entre o componente de listagem de items de do componente da lista de comprar.  Tem como principais funções de adicionar, remover, aumentar e diminuir a quantidade de items em sua lista. Como não podia faltar, tem testes para garantir o bom funcionamento de suas renposabilidades também.

### Deploy 
Como utilizei NextJs, o deploy foi feito na plataforma da vercel que é sem duvidas o jeito mais fácil e simples de colocar uma aplicação Next em produção. É bem intuitivo de utlizar, o único ponto que tive que ter mais antenção foi na parte de variaveis de ambiente (como mudar a rota da API dependendo do ambiente em que a aplicação está rodando).

## Tópicos estudados
* React
* Next JS
* Next Auth
* Styled Components
* Manipulação de dados de API
* Context API
* Typescript
* (Muitos!) Testes unitários com React Testing Library, Jest e MSW
