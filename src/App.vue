<script setup>
import { useCartStore } from './stores/cart'

const cart = useCartStore()
</script>

<template>
  <header class="site-header">
    <div class="header-content">
      <RouterLink to="/" class="site-name">Catálogo de productos</RouterLink>

      <nav aria-label="Navegación principal">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/productos">Productos</RouterLink>
        <RouterLink to="/productos/crear">Crear producto</RouterLink>
        <RouterLink to="/carrito">Carrito ({{ cart.totalItems }})</RouterLink>
      </nav>
    </div>
  </header>

  <main class="page-content">
    <RouterView />
  </main>

  <footer class="site-footer">
    Proyecto realizado con Vue 3, Vue Router y Pinia.
  </footer>
</template>
