
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

## Aplicação Disponível na Rede

Caso não queira baixar a aplicação e rodar em sua máquina, pode conferir a aplicação pelo o link abaixo. 
Sem a necessidade de configurações. 

Abra [https://vitrine-cogna-cfl6.vercel.app/](https://vitrine-cogna-cfl6.vercel.app/) no navegador para visualizar a aplicação.

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
- `/utils` → Funções utiliárias para formatação de moeda
- `/service` → Serviço de conexão com a API

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

- **SEO**: SEO de forma estratégica. A aplicação possui apenas duas páginas e ambas estão otimizadas para o SEO.
- **Mobile First**: As páginas foram construidas em Mobile First, para melhorar a responsividade.
- **"use client"**: Necessário para permitir hooks de estado e memorização. Somente na Galeria, deixando os demais como SSG
- **"Next/Head""**: Um pequena consideração, para as aplicações NextJs, 14+ não é mais aconselhavel o uso de Next/Head e sim, de metadatas exportáveis. 
- **Filtro por categoria**: melhora usabilidade e organização.
- **Vitest**: escolha estratégica para simplificação e compatibilidade com Next.js. Nas ver
- **Sem SSR ou SSG para a galeria**: decisão tomada pois depende de interações de usuário em tempo real, como seleção de categoria.

---

## Qualidade do Projeto de acordo com o PegeSpeed
**Teste de Performace e Acessibilidade no Mobile**
![Imagem representando o teste para mobile](https://i.imgur.com/6IgBbSg.png, "Teste Para Mobile")

**Teste de Performace e Acessibilidade no Desktop**
![Imagem representando o teste para mobile](https://i.imgur.com/Z5ZiNOP.png, "Teste Para Desktop")


## ✍️ Autor

Desenvolvido por [Flávio Santos](https://github.com/flaviosantospqri).  
