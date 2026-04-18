<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Rafael Bercam</h3>
          <p>Full Stack Developer</p>
        </div>

        <div class="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Redes Sociais</h4>
          <div class="social-links">
            <a href="https://github.com" target="_blank" title="GitHub">🐙</a>
            <a href="https://linkedin.com" target="_blank" title="LinkedIn">💼</a>
            <a href="https://twitter.com" target="_blank" title="Twitter">𝕏</a>
            <a href="mailto:seu@email.com" title="Email">✉️</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Rafael Bercam. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--background) 100%);
  border-top: 1px solid var(--border);
  padding: var(--spacing-xl) 0;
  margin-top: var(--spacing-xl);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border);
}

.footer-section h3 {
  font-size: 1.3rem;
  margin-bottom: var(--spacing-md);
  color: var(--accent);
}

.footer-section h4 {
  font-size: 1rem;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.footer-section p {
  color: var(--text-secondary);
  margin: 0;
}

.footer-section ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-section a {
  color: var(--text-secondary);
  transition: all 0.3s ease;
}

.footer-section a:hover {
  color: var(--accent);
  transform: translateX(5px);
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
  font-size: 1.5rem;
}

.social-links a {
  display: inline-block;
  transition: all 0.3s ease;
  color: var(--text-secondary);
}

.social-links a:hover {
  transform: scale(1.2) rotate(5deg);
  filter: drop-shadow(0 0 10px rgba(0, 212, 255, 0.3));
}

.footer-bottom {
  text-align: center;
  color: var(--text-muted);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .footer {
    padding: var(--spacing-lg) 0;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-section a:hover {
    transform: none;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
