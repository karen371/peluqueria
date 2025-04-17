import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  // state
  state: () => ({
    count: 0,
    name: 'Counter'
  }),

  // getters
  getters: {
    doubleCount: (state) => state.count * 2,
  },

  // actions
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})