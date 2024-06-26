# Setup do Projeto de Teste de API com Playwright

Este documento fornece instruções passo a passo sobre como configurar e rodar um projeto de teste de API usando Playwright e Axios.

## Pré-requisitos

Antes de configurar seu projeto de teste, você precisará instalar algumas ferramentas essenciais.

### Instalação do Node.js

1. **Baixe e instale o Node.js**:
   - Visite [Node.js](https://nodejs.org/) e baixe a versão LTS recomendada para o seu sistema operacional.
   - Siga as instruções de instalação na tela.

### Instalação do Visual Studio Code (VSCode)

2. **Baixe e instale o VSCode**:
   - Acesse o site oficial do [Visual Studio Code](https://code.visualstudio.com/) e baixe a versão adequada para seu sistema.
   - Execute o instalador e siga as instruções de configuração.

### Configuração do Projeto Playwright

3. **Crie e configure o projeto Playwright**:
   ```sh
   npm init playwright@latest playwright-api-testing

4. **Instale o Axios**:
    ```sh
    npm install axios

### Instalação de Extensões do VSCode

5. **Instale a extensão Playwright Test for VSCode**:
- Abra o VSCode, vá para a aba de extensões (ícone de blocos no lado esquerdo) e procure por "Playwright Test for VSCode" da Microsoft [ou clique aqui para acessar diretamente a extensão](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright).
- Clique em instalar.

### Rodando os Testes
Para rodar os testes no seu projeto, você pode seguir estas etapas simples:

1. Abra o terminal:
2. Execute os testes:
```sh
npx playwright test
```

Este comando rodará todos os testes no diretório de testes do seu projeto.

### Dicas Adicionais
Visualização dos Resultados de Teste:
- O Playwright irá fornecer uma saída detalhada no terminal, mostrando quais testes passaram ou falharam.
- Você pode executar o comando abaixo e o report padrão do Playwright vai ser exibido diretamente no browser
```sh
npx playwright show-report
```