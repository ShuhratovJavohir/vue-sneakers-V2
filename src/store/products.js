import { defineStore } from "pinia";
import axios from "axios";

export const useProducts = defineStore({
  id: "products",
  state: () => ({
    products: null,
  }),
  actions: {
    async getProducts() {
      try {
        let response = await axios.get("http://localhost:3000/products");
        this.products = response.data;
      } catch (error) {
        console.error("Ошибка при запросе 404");
      }
    },
  },
  getters: {},
});
