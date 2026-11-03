<script setup>
import { useCartStore } from '../stores/cart'
import { useProductsStore } from '../stores/products'

const cart = useCartStore()
const products = useProductsStore()
</script>

<template>
  <section class="page-heading">
    <div>
      <p class="section-label">Productos</p>
      <h1>Lista de productos</h1>
      <p>Desde esta vista se puede consultar, editar, eliminar o agregar productos al carrito.</p>
    </div>
    <RouterLink class="button button-primary" to="/productos/crear">Nuevo producto</RouterLink>
  </section>

  <section v-if="products.products.length" class="product-list" aria-label="Lista de productos">
    <article v-for="product in products.products" :key="product.id" class="product-row">
      <div>
        <h2>{{ product.name }}</h2>
        <p class="price">${{ product.price.toFixed(2) }}</p>
      </div>
      <div class="row-actions">
        <RouterLink class="button button-secondary" :to="`/productos/${product.id}`">Editar</RouterLink>
        <button class="button button-secondary" type="button" @click="cart.addToCart(product)">
          Agregar al carrito
        </button>
        <button class="button button-danger" type="button" @click="products.deleteProduct(product.id)">
          Eliminar
        </button>
      </div>
    </article>
  </section>

  <section v-else class="empty-state">
    <h2>No hay productos</h2>
    <p>Registra un producto para comenzar.</p>
    <RouterLink class="button button-primary" to="/productos/crear">Crear producto</RouterLink>
  </section>
</template>
