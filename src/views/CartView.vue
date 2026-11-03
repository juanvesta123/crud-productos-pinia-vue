<script setup>
import { useCartStore } from '../stores/cart'

const cart = useCartStore()
</script>

<template>
  <section class="page-heading">
    <div>
      <p class="section-label">Carrito</p>
      <h1>Resumen del pedido</h1>
      <p>Estos son los productos agregados al carrito.</p>
    </div>
    <button v-if="cart.items.length" class="button button-danger" type="button" @click="cart.clearCart">
      Vaciar carrito
    </button>
  </section>

  <section v-if="cart.items.length" class="cart-section">
    <article v-for="item in cart.items" :key="item.id" class="cart-row">
      <div>
        <h2>{{ item.name }}</h2>
        <p>${{ item.price.toFixed(2) }} · Cantidad: {{ item.quantity }}</p>
      </div>
      <div class="row-actions">
        <p class="price">${{ (item.price * item.quantity).toFixed(2) }}</p>
        <button class="button button-secondary" type="button" @click="cart.removeFromCart(item.id)">
          Eliminar
        </button>
      </div>
    </article>

    <div class="cart-total">
      <strong>Total acumulado</strong>
      <strong>${{ cart.total.toFixed(2) }}</strong>
    </div>
  </section>

  <section v-else class="empty-state">
    <h2>El carrito está vacío</h2>
    <p>Agrega un producto desde la lista.</p>
    <RouterLink class="button button-primary" to="/productos">Ir a productos</RouterLink>
  </section>
</template>
