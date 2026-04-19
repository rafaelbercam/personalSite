<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="slide-in-left">
            Olá! Sou <span class="accent">Rafael Berçam</span>
          </h1>
          <p class="subtitle fade-in-up">
            QA Engineer Specialist & Tech Lead apaixonado por automação e qualidade de software
          </p>
          <div class="hero-buttons fade-in-up">
            <button class="btn btn-primary">Ver Projetos</button>
            <button class="btn btn-secondary">Entrar em Contato</button>
          </div>
        </div>

        <div class="hero-visual slide-in-right">
          <div class="code-block">
            <div class="code-header">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
            </div>
            <pre><code class="code-text">
<span class="keyword">describe</span>(<span class="string">'API Authentication'</span>, () => {
  <span class="keyword">it</span>(<span class="string">'should login successfully'</span>, <span class="keyword">async</span> () => {
    <span class="keyword">const</span> response = <span class="keyword">await</span> request
      .post(<span class="string">'/api/auth/login'</span>)
      .send({
        email: <span class="string">'test@example.com'</span>,
        password: <span class="string">'password123'</span>
      });
    
    <span class="property">expect</span>(response.status).toBe(<span class="property">200</span>);
    <span class="property">expect</span>(response.body).toHaveProperty(<span class="string">'token'</span>);
  });
});
            </code></pre>
          </div>
        </div>
      </div>

      <div class="scroll-indicator">
        <span>Scroll para descobrir</span>
        <div class="arrow"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--background) 100%);
  position: relative;
  overflow: hidden;
  margin-top: 60px;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  pointer-events: none;
}

.container {
  position: relative;
  z-index: 1;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  min-height: calc(100vh - 120px);
}

.hero-text h1 {
  font-size: 3.5rem;
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.hero-text .accent {
  background: linear-gradient(135deg, var(--accent) 0%, #00a8cc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: glow 2s ease-in-out infinite;
}

.subtitle {
  font-size: 1.3rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  max-width: 500px;
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.btn {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: 1rem;
  font-weight: 600;
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, var(--accent) 0%, #00a8cc 100%);
  color: var(--primary-dark);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 212, 255, 0.3);
}

.btn-secondary {
  background: transparent;
  border: 2px solid var(--accent);
  color: var(--accent);
}

.btn-secondary:hover {
  background: var(--accent);
  color: var(--primary-dark);
  transform: translateY(-2px);
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.code-block {
  background: var(--background-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 0 40px rgba(0, 212, 255, 0.1);
  max-width: 100%;
}

.code-header {
  background: var(--background-tertiary);
  padding: var(--spacing-sm) var(--spacing-md);
  display: flex;
  gap: 8px;
  border-bottom: 1px solid var(--border);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.dot.red {
  background-color: #ff5f56;
}

.dot.yellow {
  background-color: #ffbd2e;
}

.dot.green {
  background-color: #27c93f;
}

.code-text {
  font-family: 'Fira Code', 'Monaco', monospace;
  font-size: 0.9rem;
  color: var(--text-secondary);
  padding: var(--spacing-md);
  overflow-x: auto;
  line-height: 1.8;
}

.keyword {
  color: var(--accent);
  font-weight: 600;
}

.property {
  color: #85e1ff;
}

.string {
  color: #56d364;
}

.operator {
  color: var(--text-secondary);
}

pre {
  margin: 0;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.arrow {
  width: 24px;
  height: 24px;
  border-right: 2px solid var(--accent);
  border-bottom: 2px solid var(--accent);
  transform: rotate(-45deg);
  margin: 10px auto 0;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: rotate(-45deg) translateY(0);
    opacity: 1;
  }
  50% {
    transform: rotate(-45deg) translateY(10px);
    opacity: 0.5;
  }
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: var(--spacing-xl) 0;
  }

  .hero-text h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .code-block {
    max-width: 300px;
    font-size: 0.8rem;
  }
}
</style>
