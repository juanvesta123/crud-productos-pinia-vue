import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      { id: 1, name: 'Cuaderno profesional', price: 65 },
      { id: 2, name: 'Bolígrafo azul', price: 18 },
      { id: 3, name: 'Mochila escolar', price: 420 },
    ],
  }),

  getters: {
    getProductById: (state) => (id) => state.products.find((product) => product.id === id),
  },

  actions: {
    createProduct(data) {
      this.products.push({
        id: Date.now(),
        name: data.name.trim(),
        price: Number(data.price),
      })
    },

    updateProduct(id, data) {
      const product = this.getProductById(id)

      if (product) {
        product.name = data.name.trim()
        product.price = Number(data.price)
      }
    },

    deleteProduct(id) {
      this.products = this.products.filter((product) => product.id !== id)
    },
  },
})
