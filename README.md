# Projeto: Trevisan Officina - Landing Page Premium

Esta é uma landing page de altíssimo padrão desenvolvida para a Trevisan Officina, uma oficina mecânica premium em Curitiba - PR. O design segue o estilo Lovable.dev/Vercel, focado em estética moderna, clean, tecnológica e ultra-conversiva, com total responsividade.

## Tecnologias Utilizadas

*   **React.js:** Biblioteca JavaScript para construção de interfaces de usuário.
*   **Tailwind CSS:** Framework CSS utilitário para estilização rápida e responsiva.
*   **JavaScript (ES6+):** Linguagem de programação principal.

## Estrutura do Projeto

O projeto é composto pelos seguintes componentes principais:

*   `Page.jsx`: Componente principal que orquestra todas as seções da landing page.
*   `Hero.jsx`: Dobra inicial de alta conversão, com destaque para a autoridade do fundador e a infraestrutura da oficina.
*   `Features.jsx`: Seção que exibe os principais serviços e diferenciais da Trevisan Officina em um layout de cards moderno.
*   `Contact.jsx`: Dobra final focada na conversão, com informações de contato e um CTA claro para o WhatsApp.

## Design System (Estilo Lovable Premium)

*   **Paleta de Cores:** Fundo ultra-escuro (`bg-zinc-950`), detalhes em Amarelo/Ouro vibrante (`yellow-400`) e elementos em Cinza/Prata metálico (`slate-300`). Pontos de brilho sutil no fundo.
*   **Glassmorphism:** Efeito de vidro aplicado em cards e cabeçalho para uma estética premium (`bg-white/[0.02] border border-white/10 backdrop-blur-md`).
*   **Tipografia:** Utiliza a fonte "Plus Jakarta Sans" para um visual limpo e moderno. Títulos com gradientes e pesos contrastantes.
*   **Ícones:** Ícones SVG inline para garantir performance e consistência visual.
*   **Imagens:** `logo.png` e `fachada.png` são usadas estrategicamente para reforçar a marca e a infraestrutura.
*   **Micro-interações:** Animações sutis de hover em botões e cards para uma experiência de usuário refinada.

## Como Rodar o Projeto

Siga os passos abaixo para configurar e executar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou Yarn) instalados em seu sistema.

*   [Node.js](https://nodejs.org/en/download/) (versão LTS recomendada)
*   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js) ou [Yarn](https://yarnpkg.com/en/docs/install)

### Instalação

1.  **Crie um novo projeto React (ex: com Vite):**
    ```bash
    npm create vite@latest trevisan-officina-landing-page -- --template react
    cd trevisan-officina-landing-page
    ```

2.  **Instale as dependências, incluindo Tailwind CSS:**
    ```bash
    npm install
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

### Configuração do Tailwind CSS

Atualize o arquivo `tailwind.config.js` e o arquivo CSS principal (`src/index.css` ou `src/global.css`):

**`tailwind.config.js`:**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta-sans': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        'zinc-950': '#090A0E', // Cor de fundo principal
      }
    },
  },
  plugins: [],
}
```

**`src/index.css` (ou seu arquivo CSS global):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Importação da fonte Plus Jakarta Sans do Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap');

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
```

### Adicione os componentes

Crie os arquivos `Hero.jsx`, `Features.jsx`, `Contact.jsx` e `Page.jsx` dentro da pasta `src/` e cole o código fornecido para cada um.

Em seguida, atualize `src/App.jsx` para renderizar o componente `Page`:
```jsx
import Page from './Page'

function App() {
  return (
    <Page />
  )
}

export default App
```

### Executando o Servidor de Desenvolvimento

Para iniciar o aplicativo em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O aplicativo estará disponível em `http://localhost:5173` (ou outra porta indicada pelo seu ambiente de desenvolvimento, como o Vite).

## Arquivos de Imagem

Certifique-se de que os arquivos `logo.png` e `fachada.png` estejam localizados na pasta `public/` do seu projeto. Isso permite que eles sejam acessados diretamente via `src="logo.png"` e `src="fachada.png"` no código JSX.

## Contato

Para dúvidas ou suporte, entre em contato com:

*   **WhatsApp:** (41) 98898-7233
*   **Instagram:** [@trevisan_officina](https://www.instagram.com/trevisan_officina)
