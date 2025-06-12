# Avantsoft- Desafio Técnico Desenvolvedor Jr.

## Objetivo do Projeto

Construir uma aplicação para gerenciar produtos.

#### Pré-requisitos

-[Node.js](https://nodejs.org/en/download/) (Versão 18 ou superior)

-   [NPM](https://www.npmjs.com/get-npm)

### Back-end

Consiste em uma API RESTful para gerenciar produtos, desenvolvida com Nest.js.
A API implementa um CRUD completo com suporte aos seguintes verbos HTTP:
POST, DELETE, PUT, GET.

#### Bibliotecas usadas:

-   **[TypeORM](https://typeorm.io/)**: ORM para facilitar a interação com o banco
    de dados.
-   **[Class-validator](https://github.com/typestack/class-validator)**: Biblioteca
    para validação de classes, garantindo a integridade dos dados recebidos e
    enviados pela API.

### Frontend

Interface criada usando Next.js para fornecer uma interface de usuário interativa e
responsiva.

#### Bibliotecas usadas:

-   **[Chakra UI](https://chakra-ui.com/)**:
    O Chakra UI foi escolhido por ser uma das bibliotecas de componentes mais completas e eficientes da atualidade. Ele permite o desenvolvimento rápido de interfaces modernas, acessíveis e responsivas. Seus componentes reutilizáveis, combinados com a facilidade de estilização diretamente via props, proporcionam uma experiência de desenvolvimento mais ágil e consistente. Esses diferenciais tornaram o Chakra UI a escolha ideal para este projeto.

#### Pré-requisitos

-   [Node.js](https://nodejs.org/en/download/) (Versão 18 ou superior)
-   [NPM](https://www.npmjs.com/get-npm)
-   [Docker](https://www.docker.com/) (Docker Compose versão 3:9)

### Como executar

O .env.development está configurado para conexão com o banco de dados, e propositalmente
não incluído no .gitignore para facilitar a avaliação do projeto.
Para facilitar o processo de execução, um script de automação foi incluído para
sistemas Linux. Siga as instruções abaixo para executar o projeto em diferentes
ambientes:

-   Por favor, certifique-se de ter o Docker instalado na sua máquina :D

#### Em Sistemas Linux

1. Clone o repositório

```bash
git clone https://github.com/yanlucasscf/avantsoft-challenge.git
```

2. Entre no diretório do projeto

-   Execute o seguinte comando no diretório avantsoft-challenge:

```bash
./start-projects.sh
```

-   O front-end estará disponível nesse link:

```bash
http://localhost:3000
```

-   Para acessar o backend será usado esse link (Definido na main.ts do diretório
    backend)

```bash
http://localhost:8080
```

### Em outros sistemas

Caso esteja usando outro sistema operacional, segue o passo a passo:

### Executar backend

1. Clone o repositório (Caso não tenha clonado)

```bash
git clone https://github.com/yanlucasscf/avantsoft-challenge.git
```

2. Entre no diretório do projeto

```bash
cd avantsoft-challenge
```

3. Navegue até o diretório backend

```bash
cd backend
```

4. Instale as dependências

```bash
npm i
```

5. Execute o script

```bash
npm run start:dev
```

-   Para acessar o backend será usada esse link (Definido na main.ts do diretório
    backend.)

```bash
http://localhost:8080
```

### Executar frontend

1. Entre no diretório do projeto

```bash
cd avantsoft-challenge
```

2. Navegue até o diretório frontend

```bash
cd frontend
```

3. Instale as dependências

```bash
npm i
```

4. Execute o script

```bash
npm run dev
```

-   O front-end estará disponível nesse link:

```bash
http://localhost:3000
```

## Rotas da aplicação

### Backend

-   **`POST url/products`**: Cria um novo produto e retorna.
-   Utilize esse payload: </br>

```json
{
    "name": "Caneca One Piece",
    "sku": "CAN-OP",
    "price": 22
}
```

-   **`GET url/products`**: Lista todos produtos e retorna o campo adicional: firstMissingLetterAlphabet.
-   **`GET url/products/:id`**: Lista um produto específico e retorna o campo adicional: firstMissingLetterAlphabet.
-   **`PUT url/products/:id`**: Atualiza um produto existente e retorna o produto atualizado.
-   Utilize esse payload: </br>

```json
{
    "name": "Caneca One Piece",
    "sku": "CAN-OP",
    "price": 22
}
```

-   Caso seja um campo específico: </br>

```json
{
    "name": "Caneca One Piece Luffy"
}
```

-   **`DELETE url/products/:id`**: Remove um produto existente.

### Frontend

-   **`url/products`**: Cria um novo produto.
-   **`GET url/products`**: Lista todos produtos.
-   **`GET url/products/:id`**: Lista um produto específico.
-   **`PUT url/products/:id`**: Atualiza um produto existente.
-   **`DELETE url/products/:id`**: Remove um produto.

### Dúvidas

Para quaisquer dúvidas ou questões, entre em contato por e-mail:
<a href="mailto:yanlucascarvalho20@gmail.com">
<button>Enviar E-mail</button>
</a>
