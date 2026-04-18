# 📚 Documentação Técnica - Arquitetura & Manutenção

## 🏗️ Arquitetura do Projeto

### Decisões de Design

1. **Vue.js 3 com Composition API**: Mais moderno e intuitivo
2. **Vite**: Build tool ultrarrápido com HMR (Hot Module Replacement)
3. **CSS Nativo com Variáveis**: Sem dependências de pré-processadores
4. **Componentes Isolados**: Cada seção é um componente independente

### Fluxo de Dados

```
App.vue (Raiz)
├── Navigation.vue (Navegação fixa)
├── Hero.vue (Seção inicial)
├── About.vue (Sobre o desenvolvedor)
├── Projects.vue (Portfolio de projetos)
├── TechStack.vue (Stack de tecnologias)
├── Contact.vue (Formulário de contato)
└── Footer.vue (Rodapé)
```

### Comunicação entre Componentes

O App.vue gerencia:
- Estado ativo da seção
- Funções de navegação suave

Os componentes filhos recebem props e emitem eventos através do App.

## 🎨 Sistema de Design

### Paleta de Cores

```
Primária:      #0f3c7d (Azul escuro)
Primária Light: #1e5ba8 (Azul médio)
Primária Dark:  #0a2847 (Azul muito escuro)
Accent:        #00d4ff (Ciano - Destaque)
Accent Dark:   #00a8cc (Ciano escuro)
Background:    #0d1117 (Quase preto)
Secondary BG:  #161b22 (Cinza escuro)
Tertiary BG:   #21262d (Cinza mais claro)
Texto:         #e6edf3 (Branco suave)
Texto Sec:     #8b949e (Cinza médio)
Texto Muted:   #6e7681 (Cinza claro)
```

### Tipografia

- **Fonte**: System UI Stack (-apple-system, BlinkMacSystemFont, etc.)
- **Headings**: Peso 600, Line-height 1.2
- **Body**: Peso 400, Line-height 1.6
- **Code**: 'Fira Code' ou 'Monaco' monospace

### Espaçamento

```
--spacing-xs: 0.5rem  (8px)
--spacing-sm: 1rem    (16px)
--spacing-md: 1.5rem  (24px)
--spacing-lg: 2rem    (32px)
--spacing-xl: 3rem    (48px)
```

## 🔧 Guia de Manutenção

### Adicionando um Novo Componente

1. **Crie o arquivo** em `src/components/NomeComponente.vue`
2. **Importe em App.vue**:
   ```javascript
   import NomeComponente from './components/NomeComponente.vue'
   ```
3. **Use no template**:
   ```vue
   <NomeComponente />
   ```

### Atualizando Estilos Globais

Edite `src/style.css`:
- Variáveis CSS em `:root`
- Animações em `@keyframes`
- Estilos globais (body, h1, buttons, etc.)

### Adicionando Animações

Há 3 animações prontas:
- `fadeInUp`: Aparece com fade de baixo para cima
- `slideInLeft`: Desliza da esquerda
- `slideInRight`: Desliza da direita

Use adicionando a classe no elemento:
```vue
<div class="fade-in-up">Conteúdo</div>
```

### Atualizando Dados Estáticos

#### Projects.vue
```javascript
const projects = ref([
  {
    id: 1,
    title: 'Nome do Projeto',
    description: 'Descrição breve',
    icon: '🚀',
    technologies: ['Tech1', 'Tech2'],
    link: 'url-do-projeto',
    github: 'url-do-github'
  }
])
```

#### TechStack.vue
```javascript
const technologies = ref([
  {
    name: 'Frontend',
    items: [
      { name: 'Vue.js', icon: '💚', level: 'Avançado' }
    ]
  }
])
```

#### Contact.vue
Atualize os dados nos cards de informação:
```vue
<div class="info-card">
  <div class="info-icon">📧</div>
  <h3>Email</h3>
  <p>seu-email@example.com</p>
</div>
```

## ⚡ Performance Tips

1. **Lazy Loading**: Para componentes pesados, use:
   ```javascript
   const Componente = defineAsyncComponent(() => 
     import('./Componente.vue')
   )
   ```

2. **Otimizar Imagens**: Use formatos modernos (WebP, AVIF)

3. **Code Splitting**: Vite faz automaticamente, mas evite bundles grandes

4. **CSS Crítico**: Estilos importantes são inlined

## 🐛 Troubleshooting

### Problema: Páginas não carregam no `npm run dev`

**Solução**: 
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Problema: Estilos não aparecem

**Solução**: 
- Verifique se `style.css` está importado em `main.js`
- Limpe o cache do navegador (Ctrl+Shift+R)

### Problema: Componentes não renderizam

**Solução**:
- Verifique imports em App.vue
- Confirme que o componente tem template válido
- Abra DevTools (F12) para ver erros

## 📋 Checklist de Deploy

- [ ] Atualize informações pessoais (email, links)
- [ ] Adicione seus projetos reais
- [ ] Atualize tecnologias usadas
- [ ] Revise textos para erros de português
- [ ] Teste links de contato
- [ ] Otimize imagens
- [ ] Execute `npm run build`
- [ ] Teste em `npm run preview`
- [ ] Faça deploy

## 🚀 Otimizações Futuras

- [ ] Adicionar transições de página com Transition API
- [ ] Integrar com backend para formulário de contato
- [ ] Adicionar modo claro (light mode)
- [ ] Blog/Articles section
- [ ] Integração com CMS (Strapi, Sanity)
- [ ] Testes unitários com Vitest
- [ ] PWA features

## 📞 Suporte & Recursos

- [Vue.js 3 Docs](https://vuejs.org)
- [Vite Guide](https://vitejs.dev)
- [MDN Web Docs](https://mdn.org)
- [CSS Tricks](https://css-tricks.com)

---

Última atualização: Abril 2026
