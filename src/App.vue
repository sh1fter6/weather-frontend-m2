<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="app-layout">
    <NavBar />
    <main class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Outfit', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%);
  color: #f3f4f6;
  min-height: 100vh;
  background-attachment: fixed;
}
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
h1, h2, h3, .brand-font {
  font-family: 'Lily Script One', cursive;
}
.main-content {
  flex: 1;
}
</style>
