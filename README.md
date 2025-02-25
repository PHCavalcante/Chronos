# Chronos

Bem-vindo ao repositório do **Chronos**, um monorepo desenvolvido para gerenciar múltiplos projetos de forma eficiente utilizando o [Turborepo](https://turbo.build/). Este repositório contém duas aplicações principais um Front-end e um Back-end e foi feito para um desafio técnico da [TokenLab](https://www.tokenlab.com.br/pt/home).

## Aplicações e Pacotes

- **Aplicações:**
  - `api`: Aplicação [Express.js](https://expressjs.com/) responsável pela documentação.
  - `web`: Aplicação [Next.js](https://nextjs.org/) onde o front-end está desenvolvido.

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/): Framework React para desenvolvimento web.
- [TypeScript](https://www.typescriptlang.org/): Superset do JavaScript que adiciona tipagem estática ao código.
- [Tailwindcss](https://tailwindcss.com/): Framework de css com foco em desenvolvimento rápido
- [NextAuth](https://next-auth.js.org/): Biblioteca de que facilita a autenticação no [Nextjs](https://nextjs.org/).
- [Turborepo](https://turbo.build/): Ferramenta para gerenciamento de monorepos de alto desempenho.
- [ESLint](https://eslint.org/): Ferramenta de linting para identificar e corrigir problemas em código JavaScript/TypeScript.

## Estrutura do Projeto

A estrutura do repositório é organizada da seguinte forma:

```
/
├── apps/
│   ├── api/
│   └── web/
├── packages/
│   ├── eslint-config/
│   ├── typescript-config/
│   └── ui/
├── .vscode/
├── .gitignore
├── .npmrc
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── turbo.json
└── README.md
```

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/en/): Versão LTS recomendada.
- [pnpm](https://pnpm.io/): Gerenciador de pacotes utilizado no projeto.

## Como Executar o Projeto

Siga os passos abaixo para configurar e executar o projeto localmente:

1. **Instale as dependências:**
   ```bash
   pnpm install
   ```

2. **Inicie as aplicações em desenvolvimento:**
   ```bash
   pnpm run dev
   ```

   Este comando iniciará tanto o back-end `api` quanto o front-end `web`. Por padrão:

   - `api`: [http://localhost:3000](http://localhost:3000)
   - `web`: [http://localhost:3001](http://localhost:3001)

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts úteis:

- `dev`: Inicia ambas as aplicações (`api` e `web`) em modo de desenvolvimento.
- `build`: Compila as aplicações para produção.
- `lint`: Executa o linter em todo o projeto.
- `format`: Formata o código utilizando o Prettier.

Para executar qualquer um desses scripts, utilize o comando:

```bash
pnpm run <script>
```

Por exemplo:

```bash
pnpm run build
```

1. Faça um fork deste repositório.
2. Crie uma nova branch com sua feature ou correção de bug: `git checkout -b minha-feature`.
3. Faça as alterações necessárias e commit: `git commit -m 'Minha nova feature'`.
4. Envie para o seu fork: `git push origin minha-feature`.
5. Abra um Pull Request neste repositório.

## Licença

Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE` no repositório.