import { defineStore } from "pinia";

export const useCart = defineStore({
  id: "cart",
  state: () => ({
    cart: [],
  }),
});
