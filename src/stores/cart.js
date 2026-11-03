import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  getters: {
    total: (state) => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
  },

  actions: {
    addToCart(product) {
      const item = this.items.find((item) => item.id === product.id)

      if (item) {
        item.quantity += 1
        return
      }

      this.items.push({ ...product, quantity: 1 })
    },

    removeFromCart(id) {
      this.items = this.items.filter((item) => item.id !== id)
    },

    clearCart() {
      this.items = []
    },
  },
})
