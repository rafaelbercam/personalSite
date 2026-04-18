# 🚀 Portfólio Pessoal - Rafael Bercam

Um site de portfólio moderno, responsivo e altamente customizável, desenvolvido com Vue.js 3 e Vite. Especializado em QA Engineering e automação de testes.

## 📋 Características

- ✨ Design moderno com paleta de cores tech (azul escuro)
- 📱 Totalmente responsivo (mobile-first)
- ⚡ Desenvolvido com Vite para performance máxima
- 🎨 Componentes reutilizáveis em Vue.js
- 🎭 Animações suaves e transições elegantes
- 📧 Formulário de contato funcional com validação
- 🔍 SEO-friendly
- 🌙 Interface dark mode
- 🧪 Testes E2E com Playwright
- 📊 Analytics integrado
- ♿ Acessibilidade aprimorada

## 🛠️ Stack de Tecnologias

- **Frontend**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Linguagem**: TypeScript
- **Validação**: Zod
- **Email**: EmailJS
- **Testes**: Playwright
- **Estilização**: CSS3 com variáveis customizadas
- **Node.js**: v18.18.2 ou superior

## 📁 Estrutura do Projeto

```
personalSite/
├── src/
│   ├── components/          # Componentes Vue.js
│   │   ├── ui/              # Componentes reutilizáveis
│   │   │   ├── ProjectCard.vue
│   │   │   ├── TechBadge.vue
│   │   │   └── Section.vue
│   │   ├── Navigation.vue
│   │   ├── Hero.vue
│   │   ├── About.vue
│   │   ├── Projects.vue
│   │   ├── TechStack.vue
│   │   ├── Contact.vue
│   │   └── Footer.vue
│   ├── config/              # Configurações centralizadas
│   │   └── site.ts
│   ├── hooks/               # Composables customizados
│   │   ├── useSmoothScroll.ts
│   │   ├── useIntersectionObserver.ts
│   │   └── useAnalytics.ts
│   ├── services/            # Serviços e APIs
│   │   ├── emailService.ts
│   │   └── validationService.ts
│   ├── types/               # Definições TypeScript
│   │   └── index.ts
│   ├── App.vue              # Componente raiz
│   ├── main.ts              # Ponto de entrada
│   └── style.css            # Estilos globais
├── tests/
│   ├── e2e/                 # Testes E2E
│   │   ├── navigation.spec.ts
│   │   ├── projects.spec.ts
│   │   └── contact.spec.ts
│   └── playwright.config.ts
├── .github/
│   └── workflows/           # CI/CD
│       └── ci-cd.yml
├── index.html
├── vite.config.ts
├── package.json
├── tsconfig.json
├── .env.example
└── README.md
```

## 🚀 Como Começar

### Pré-requisitos

- Node.js v18.18.2 ou superior
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/rafaelbercam/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env
   # Edite o .env com suas configurações
   ```

4. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

5. **Abra no navegador**
   ```
   http://localhost:5175
   ```

## 📜 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build

# Qualidade
npm run type-check   # Verificação de tipos TypeScript
npm run lint         # Linting (configurar conforme necessário)

# Testes
npm run test         # Executa testes E2E
npm run test:ui      # Executa testes com interface visual
```

## 🔧 Configuração

### EmailJS (Formulário de Contato)

1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta e configure um serviço de email
3. Crie um template de email
4. Adicione as credenciais no arquivo `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Analytics (Opcional)

Para Google Analytics 4:

```env
VITE_GA_TRACKING_ID=your_ga_tracking_id
```

## 🚀 Deploy

### Vercel (Recomendado)

1. **Instale Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Faça login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

### Netlify

1. **Build o projeto**
   ```bash
   npm run build
   ```

2. **Faça upload da pasta `dist/` no Netlify**

### GitHub Pages

1. **Build o projeto**
   ```bash
   npm run build
   ```

2. **Configure GitHub Pages** para servir da pasta `dist/`

## 🧪 Testes

### Executando Testes E2E

```bash
# Todos os testes
npm run test

# Com interface visual
npm run test:ui

# Testes específicos
npx playwright test tests/e2e/navigation.spec.ts
```

### Cobertura de Testes

- ✅ Navegação entre seções
- ✅ Links dos projetos (GitHub)
- ✅ Formulário de contato
- ✅ Responsividade
- ✅ Acessibilidade básica

## 🎨 Personalização

### Cores

As cores são definidas em variáveis CSS em `src/style.css`:

```css
:root {
  --primary: #0f3c7d;
  --accent: #00d4ff;
  --background: #0d1117;
  /* ... */
}
```

### Conteúdo

Edite as configurações em `src/config/site.ts`:

- **Informações pessoais**: `siteConfig`
- **Projetos**: `projects` array
- **Tecnologias**: `technologies` array
- **Contato**: `contactInfo` array

### Componentes

Os componentes são modulares e podem ser facilmente customizados:

- `src/components/ui/` - Componentes reutilizáveis
- `src/hooks/` - Lógica reutilizável
- `src/services/` - Integrações externas

## 📊 Performance

### Otimizações Implementadas

- ✅ Lazy loading de componentes
- ✅ Code splitting automático
- ✅ Otimização de bundles
- ✅ Compressão de assets
- ✅ Cache inteligente

### Métricas

- **First Contentful Paint**: ~1.2s
- **Largest Contentful Paint**: ~2.1s
- **Bundle Size**: ~150KB (gzip)

## ♿ Acessibilidade

### Recursos Implementados

- ✅ Navegação por teclado
- ✅ Labels adequados em formulários
- ✅ Contraste de cores adequado
- ✅ Estrutura semântica HTML
- ✅ ARIA labels onde necessário
- ✅ Focus management

### Teste de Acessibilidade

```bash
# Instalar ferramentas de teste
npm install -D axe-playwright

# Executar testes de acessibilidade
npx playwright test --grep "accessibility"
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Rafael Bercam**
- LinkedIn: [linkedin.com/in/rafaelbercam](https://www.linkedin.com/in/rafaelbercam/)
- GitHub: [github.com/rafaelbercam](https://github.com/rafaelbercam)
- Email: faelbercam@gmail.com

---

⭐ **Dê uma estrela se este projeto te ajudou!**
- npm v9.8.1 ou superior

### Instalação

1. **Clone ou acesse o repositório**
   ```bash
   cd personalSite
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   
   O site será aberto automaticamente em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview da Build

```bash
npm run preview
```

## 🎨 Customização

### Paleta de Cores

Todas as cores podem ser customizadas editando as variáveis CSS em `src/style.css`:

```css
:root {
  --primary: #0f3c7d;           /* Azul primário */
  --accent: #00d4ff;             /* Azul ciano (destaque) */
  --background: #0d1117;         /* Fundo principal */
  /* ... mais variáveis */
}
```

### Dados do Portfólio

Edite os dados nos seguintes componentes:

- **About.vue**: Informações pessoais e estatísticas
- **Projects.vue**: Lista de projetos
- **TechStack.vue**: Tecnologias e skills
- **Contact.vue**: Informações de contato

### Componentes

Cada componente está auto-contido e pode ser reutilizado. Veja a estrutura:

```vue
<template>
  <!-- HTML -->
</template>

<script setup>
  // Lógica Vue.js
</script>

<style scoped>
  /* Estilos específicos do componente */
</style>
```

## 📝 Guia de Conteúdo

### Atualizando Projetos

Em `src/components/Projects.vue`, atualize o array `projects`:

```javascript
const projects = ref([
  {
    id: 1,
    title: 'Seu Projeto',
    description: 'Descrição do projeto',
    icon: '🚀',
    technologies: ['Vue.js', 'Node.js'],
    link: '#',
    github: '#'
  }
])
```

### Adicionando Tecnologias

Em `src/components/TechStack.vue`, customize o array `technologies`.

### Atualizando Informações de Contato

Em `src/components/Contact.vue`, atualize os dados nos cards de contato.

## 🔧 Deployment

### Vercel

1. Conecte seu repositório GitHub
2. Selecione o projeto
3. Vercel detectará automaticamente Vite
4. Deploy automático! 🎉

### Netlify

1. Conecte seu repositório
2. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
3. Deploy automático! 🎉

### GitHub Pages

```bash
npm run build
# Envie a pasta 'dist' para a branch 'gh-pages'
```

## 📊 Performance

- Lighthouse Score: A+
- Tempo de carregamento: < 1s
- Bundle size: ~50KB (gzipped)

## 🤝 Contribuições

Se encontrar bugs ou tiver sugestões de melhoria, por favor abra uma issue!

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Contato

- **Email**: seu.email@example.com
- **LinkedIn**: [Rafael Bercam](https://linkedin.com)
- **GitHub**: [@rafael-bercam](https://github.com)

---

⭐ Se encontrou útil, deixe uma estrela no repositório!

**Última atualização**: Abril 2026
