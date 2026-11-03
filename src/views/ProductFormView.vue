<script setup>
import { computed, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '../stores/products'

const route = useRoute()
const router = useRouter()
const products = useProductsStore()
const form = reactive({ name: '', price: '' })

const productId = computed(() => Number(route.params.id))
const currentProduct = computed(() => products.getProductById(productId.value))
const isEditing = computed(() => Boolean(route.params.id))

watch(
  currentProduct,
  (product) => {
    if (isEditing.value && !product) {
      router.replace('/productos')
      return
    }

    form.name = product?.name || ''
    form.price = product?.price || ''
  },
  { immediate: true },
)

function saveProduct() {
  if (isEditing.value) {
    products.updateProduct(productId.value, form)
  } else {
    products.createProduct(form)
  }

  router.push('/productos')
}
</script>

<template>
  <section class="form-section">
    <p class="section-label">Productos</p>
    <h1>{{ isEditing ? 'Editar producto' : 'Crear producto' }}</h1>
    <p>Completa los datos del producto.</p>

    <form class="product-form" @submit.prevent="saveProduct">
      <label for="name">Nombre</label>
      <input id="name" v-model.trim="form.name" type="text" required maxlength="60" />

      <label for="price">Precio</label>
      <input id="price" v-model.number="form.price" type="number" min="0.01" step="0.01" required />

      <div class="form-actions">
        <button class="button button-primary" type="submit">Guardar</button>
        <RouterLink class="button button-secondary" to="/productos">Cancelar</RouterLink>
      </div>
    </form>
  </section>
</template>
