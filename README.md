
# Vitrine de Produtos - Next.js

Este projeto é uma mini vitrine de produtos desenvolvida com **Next.js** (JavaScript puro, sem TypeScript), consumindo dados da API externa [Fake Store API](https://fakestoreapi.com/products).

## ✅ Funcionalidades

- Listagem de produtos com imagem, nome e preço.
- Filtro por categoria na Home.
- Página de detalhes para cada produto.
- Responsividade para mobile, tablet e desktop.
- Otimização de performance e SEO.
- Acessibilidade com uso correto de semântica, atributos `alt` e `label`.
- Testes automatizados com **Vitest**.

---

## 🚀 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) com JavaScript ES6+
- [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support)
- [Vitest](https://vitest.dev/) para testes unitários
- [Fake Store API](https://fakestoreapi.com/)

---

## ⚠️ Observação sobre os testes

Optamos pelo uso do **Vitest** ao invés de **Jest** devido a melhor compatibilidade com as versões mais recentes do Next.js, evitando problemas com Babel e configurações complexas.  
**Vitest** é mais leve, moderno e possui integração nativa com ESM, alinhando-se ao ecossistema atual do Next.js.

---

## 📦 Instalação e execução local

### Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn
- Configurar as variáveis de ambiente `.env.local` conforme necessário (mesmo que não exista nenhuma variável obrigatória agora, manteremos este padrão para futuras expansões).

---

### Passos para rodar o projeto localmente:

```bash
# Clone o repositório
git clone https://github.com/flaviosantospqri/vitrine-cogna.git

# Acesse o diretório do projeto
cd vitrine-cogna

# Instale as dependências
npm install
```

> 💡 Alternativamente, use `yarn install` se preferir.

---

### Ambiente

Crie um arquivo `.env.local` na raiz do projeto:  

```bash
touch .env.local
```

Atualmente, não há variáveis obrigatórias, mas o arquivo deve existir para manter o padrão Next.js.

---

### Executar o projeto

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar a aplicação.

---

## ✅ Rodar os testes

O projeto possui testes unitários implementados com **Vitest**.

### Executar os testes:

```bash
npm run test
```

ou 

```bash
npx vitest run
```

---

## 📄 Estrutura do Projeto

- `/components` → Componentes reutilizáveis (`Gallery`, `Card`, etc.)
- `/pages` → Páginas do Next.js (Home, Detalhes)
- `/styles` → Estilos com CSS Modules
- `/tests` → Testes unitários

---

## ✅ Boas práticas implementadas

- Navegação otimizada com `next/link` e `prefetch`.
- Otimização de imagens com `next/image`.
- SEO básico com `next/head`.
- Estrutura semântica e acessível.
- Performance com `useMemo` e renderização client-side controlada.
- Código comentado explicando decisões técnicas.

---

## 💡 Decisões técnicas importantes

- **"use client"**: necessário para permitir hooks de estado e memorização.
- **Filtro por categoria**: melhora usabilidade e organização.
- **Vitest**: escolha estratégica para simplificação e compatibilidade com Next.js.
- **Sem SSR ou SSG para a galeria**: decisão tomada pois depende de interações de usuário em tempo real, como seleção de categoria.

---

## 📃 Licença

Este projeto está licenciado sob a **MIT License**.  

---

## ✍️ Autor

Desenvolvido por [Flávio Santos](https://github.com/flaviosantospqri).  
