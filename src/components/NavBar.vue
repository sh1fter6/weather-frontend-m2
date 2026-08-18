<template>
  <nav class="navbar">
    <div class="navbar-container">
      <router-link to="/" class="navbar-brand">
        ☁️ ChileClima
      </router-link>
      <div class="navbar-links">
        <router-link to="/" class="nav-link">Inicio</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}
.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-brand {
  font-size: 1.8rem;
  font-family: 'Lily Script One', cursive;
  color: #fff;
  text-decoration: none;
  letter-spacing: 1px;
}
.navbar-links {
  display: flex;
  gap: 1rem;
}
.nav-link {
  color: #cbd5e1;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
.nav-link:hover, .router-link-active {
  color: #fff;
  background: rgba(255, 255, 255, 0.15);
}
</style>
