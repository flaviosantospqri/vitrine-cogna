
![Next.js](https://img.shields.io/badge/Next.js-15-blue?logo=next.js)
![Vitest](https://img.shields.io/badge/Tested%20with-Vitest-6E9EFF?logo=vitest)
![Status](https://img.shields.io/badge/status-beta-yellow)

# Vitrine de Produtos - Next.js

Este projeto é uma mini vitrine de produtos desenvolvida com **Next.js** 
Este projeto foi desenvolvido com foco especial em **SEO, acessibilidade e performance**, aplicando as melhores práticas modernas do Next.js 14+:
(JavaScript puro, sem TypeScript), consumindo dados da API externa [Fake Store API](https://fakestoreapi.com/products).

- Static Site Generation (SSG) com `generateStaticParams`
- Pré-renderização de rotas dinâmicas em tempo de build
- Otimização de imagens e navegação
- Responsividade e Mobile First
---

## ✅ Funcionalidades

- Listagem de produtos com imagem, nome e preço.
- Filtro por categoria na Home.
- Página de detalhes para cada produto.
- Página de erro personalizada caso o produto não exista.
- Página 404 personalizada para rotas inexistentes.
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

Optei pelo uso do **Vitest** ao invés do tradicional **Jest**, devido à crescente desatualização do ecossistema do Babel, que o Jest ainda depende fortemente.  
Com a chegada do **Next.js 14**, a tendência é caminhar para ambientes **ESM-first**, onde ferramentas como o Vitest se destacam por sua leveza, simplicidade e performance.  
Essa escolha nos prepara melhor para a progressão da stack e adoção de novas features sem sobrecarga de configuração.

---

## 📦 Instalação e execução local

### Pré-requisitos

- Node.js 18.x ou superior
- npm ou yarn
- Configurar as variáveis de ambiente `.env.local` (mesmo que não existam variáveis obrigatórias no momento).

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

> 💡 Alternativamente, use `yarn install`.
> para rodar, use `yarn dev` se preferir.


---

### Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
touch .env.local
```

Atualmente, tem apenas a API como variável de ambiente, que deve nomea-la como:
```bash
NEXT_PUBLIC_API_URL
```

---

### Executar o projeto

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar a aplicação.

---

## 🌐 Aplicação Disponível Online

Caso não queira baixar a aplicação e rodar em sua máquina, pode conferir a aplicação pelo link abaixo:

🔗 [https://vitrine-cogna.vercel.app/](https://vitrine-cogna.vercel.app/)

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
- `/App` → Páginas do Next.js (Home, produto/[id])
- `/utils` → Funções utilitárias para formatação de moeda
- `/service` → Serviço de conexão com a API

---

## 🧠 Diferenciais Técnicos

- Navegação otimizada com `next/link` e `prefetch`.
- Otimização de imagens com `next/image`.
- SEO básico com `next/head` e metadata exportável.
- Estrutura semântica e acessível.
- Performance com `useMemo` e renderização client-side controlada.
- Código comentado explicando decisões técnicas.

---

## 💡 Decisões técnicas importantes

- **SEO**: As duas páginas da aplicação estão estrategicamente otimizadas.
- **Mobile First**: Layout pensado para dispositivos móveis primeiro.
- **"use client"**: Utilizado somente onde necessário (como na galeria), aproveitando SSG nas demais páginas.
- **Head vs Metadata**: Preparação para adoção do novo padrão de `metadata` do Next.js 14+.
- **Filtro por categoria**: Melhora a navegação e experiência do usuário.
- **Vitest**: Escolha pensada para compatibilidade, performance e futura evolução da stack.
- **Página de erro personalizada**: Se o usuário acessar um produto inexistente, uma página customizada será exibida.
- **Página 404 personalizada**: Qualquer rota inválida exibe uma interface amigável ao usuário.
- **Controlador de estado**: Não foi implementado por simplicidade do projeto atual. Contudo, os componentes foram estruturados de forma a permitir fácil integração futura com ferramentas como Redux ou Zustand.

---

## 📊 Qualidade do Projeto (PageSpeed)

**Teste de performance e acessibilidade no Mobile**  
![Imagem representando o teste para mobile](https://i.imgur.com/1zUpGNI.png)

**Teste de performance e acessibilidade no Desktop**  
![Imagem representando o teste para desktop](https://i.imgur.com/WC7vStF.png)

---
## 🚀 Performance e SEO

A aplicação foi desenvolvida com **foco especial em performance e SEO** desde o início.

Utilizando **Next.js 14+** com **Static Site Generation (SSG)** e `generateStaticParams`, todas as rotas são **pré-renderizadas em build time**, garantindo carregamento instantâneo, excelente indexação por mecanismos de busca e uma experiência de usuário extremamente rápida.

### ✅ Destaques do build:  
- ✅ **Todas as páginas são geradas estaticamente**
- ✅ **Carregamento inicial leve** (JS compartilhado ~101 kB)
- ✅ **Rotas dinâmicas pré-construídas** com `generateStaticParams`
- ✅ **Rota de erro personalizada (`/not-found`) pré-renderizada**
- ✅ **Chunks otimizados para cache e revalidação automática (≈17h)**

Essas práticas não apenas reduzem o tempo de carregamento como também garantem que a aplicação seja altamente performática mesmo em conexões lentas — ideal para SEO e usabilidade em dispositivos móveis.

### Preview: 
**Home Page - Banner**
 ![Imagem do Banner inicial da aplicação](https://i.imgur.com/IiYOZqW.png)
 **Home Page - Gallery**
 ![Imagem do Galeria inicial da aplicação](https://i.imgur.com/mJgk3k0.png)
 **Product - [ID]**
 ![Imagem da página de detalhes do produto](https://i.imgur.com/bJg1qsE.png)
 **Not Found**
 ![Imagem da página, para quando o usuário tentar acessar um url indisponível](https://i.imgur.com/9FwB4Sc.png)
 **Error - Produto não encontrado**
 ![Imagem da página, para quando o usuário tentar acessar um produto indisponível](https://i.imgur.com/Z9KcFbk.png)


## ✍️ Autor

Desenvolvido por [Flávio Santos](https://github.com/flaviosantospqri)
