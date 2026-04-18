# Instruções para Copilot - Portfólio Pessoal

Este arquivo contém instruções específicas para o desenvolvimento e manutenção do projeto de portfólio pessoal.

## 📋 Contexto do Projeto

- **Nome**: Portfólio Pessoal de Rafael Bercam
- **Tipo**: Site estático com Vue.js 3
- **Framework**: Vite + Vue.js 3 (Composition API)
- **Estilo**: Tech dark theme com paleta azul escuro e ciano
- **Perfil**: QA Engineer Specialist & Tech Lead
- **Perfil**: QA Engineer Specialist & Tech Lead

## 🎯 Guia de Desenvolvimento

### Estrutura de Componentes

Cada componente segue este padrão:

```vue
<template>
  <!-- HTML semântico -->
</template>

<script setup>
  // Composition API
</script>

<style scoped>
  /* CSS isolado do componente */
</style>
```

### Convenções de Código

- **Nomes de Componentes**: PascalCase (e.g., `MyComponent.vue`)
- **Nomes de Variáveis**: camelCase (e.g., `myVariable`)
- **Nomes de Classes CSS**: kebab-case (e.g., `.my-class`)
- **Variáveis CSS**: kebab-case com `--` prefix (e.g., `--primary-color`)

### Paleta de Cores (Referência)

```
--primary: #0f3c7d         (Azul escuro primário)
--primary-light: #1e5ba8   (Azul primário claro)
--primary-dark: #0a2847    (Azul primário muito escuro)
--accent: #00d4ff          (Ciano - destaque principal)
--accent-dark: #00a8cc     (Ciano escuro)
--background: #0d1117      (Fundo principal - quase preto)
--background-secondary: #161b22
--background-tertiary: #21262d
--text-primary: #e6edf3
--text-secondary: #8b949e
--text-muted: #6e7681
--border: #30363d
```

## ✨ Animações Disponíveis

Classe | Efeito
-------|--------
`.fade-in-up` | Fade com translação de baixo para cima
`.slide-in-left` | Desliza da esquerda
`.slide-in-right` | Desliza da direita
`.glow` | Brilho de texto (usado em `.accent`)

## 📝 Guia de Edição de Conteúdo

### Adicionar Novo Projeto

**Arquivo**: `src/components/Projects.vue`

```javascript
{
  id: 5,
  title: 'Nome do Repositório',
  description: 'Descrição focada em automação e qualidade',
  icon: '🧪', // Emoji relacionado a testes
  technologies: ['Playwright', 'TypeScript', 'Jest'],
  link: 'https://github.com/rafaelbercam/repo-name',
  github: 'https://github.com/rafaelbercam/repo-name'
}
```

### Adicionar Nova Tecnologia

**Arquivo**: `src/components/TechStack.vue`

1. Encontre a categoria apropriada em `technologies`
2. Adicione ao array `items`:

```javascript
{ name: 'Nova Tech QA', icon: '🧪', level: 'Avançado' }
```

Níveis disponíveis: "Avançado", "Intermediário", "Básico"

### Atualizar Informações de Contato

**Arquivo**: `src/components/Contact.vue`

Procure pela seção `.info-card` e atualize:
- Email
- LinkedIn
- GitHub
- WhatsApp

## 🔍 Checklist de Qualidade

Antes de fazer commit, verifique:

- [ ] Sem erros de console (F12 → Console)
- [ ] Sem warnings de Vue
- [ ] Responsividade testada (mobile, tablet, desktop)
- [ ] Todos os links funcionam
- [ ] Formulário de contato valida inputs
- [ ] Animações são suaves
- [ ] Cores seguem a paleta definida
- [ ] Sem typos em português

## 🚀 Comandos Úteis

```bash
# Desenvolver
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Limpar node_modules (se houver problemas)
rm -rf node_modules package-lock.json && npm install
```

## 📱 Pontos de Breakpoint

```css
Mobile: até 768px
Tablet: 768px até 1024px
Desktop: acima de 1024px
```

## 🔗 Arquivos Importantes

- `src/style.css` - Estilos globais e variáveis CSS
- `src/App.vue` - Componente raiz
- `vite.config.js` - Configuração do Vite
- `index.html` - Arquivo HTML principal
- `ARQUITETURA.md` - Documentação técnica completa

## 💡 Dicas Práticas

1. **Reusar Componentes**: Prefira atualizar componentes existentes a criar novos
2. **Manter Estilos Globais**: Alterações de cores vão em `style.css`
3. **Validar Dados**: Sempre valide inputs do formulário
4. **Testar Responsividade**: Use DevTools (F12) para testar diferentes resoluções
5. **Commits Descritivos**: Use mensagens claras em português

## 🐛 Problemas Comuns

**Estilos não aparecem**
→ Verifique se `style.css` está importado em `main.js`

**Componentes não renderizam**
→ Verifique imports em `App.vue` e a sintaxe do componente

**Build falha**
→ Execute `npm install` e `npm run build` novamente

---

Para mais detalhes, veja `README.md` e `ARQUITETURA.md`
