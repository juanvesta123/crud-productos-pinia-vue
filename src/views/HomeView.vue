<script setup>
import { useProductsStore } from '../stores/products'

const products = useProductsStore()
</script>

<template>
  <section class="welcome-section">
    <p class="section-label">Inicio</p>
    <h1>Control de productos</h1>
    <p class="intro-text">
      En esta aplicación se pueden registrar, editar y eliminar productos. También se pueden agregar al carrito.
    </p>
    <RouterLink class="button button-primary" to="/productos">Ver productos</RouterLink>
  </section>

  <section class="summary-section" aria-label="Resumen">
    <h2>Resumen</h2>
    <p v-if="products.products.length">
      Hay {{ products.products.length }} productos registrados en este momento.
    </p>
    <p v-else>No hay productos registrados.</p>
  </section>
</template>
