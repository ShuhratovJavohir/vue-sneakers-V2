import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    items: [],
    isLoading: true,
    item: null,
  }),
  actions: {
    async fetchItems() {
      this.isLoading = true;

      const res = await fetch("http://localhost:3000/products");

      if (res.ok) {
        this.items = await res.json();
      }
      this.isLoading = false;
    },
    upDateProducts(item) {
      this.item = item;
      if (item.inCart === true) {
        let index = this.items.findIndex((el) => el.id === item.id);
        this.items[index].inCart = true;
      }else if(item.inLike === true){
        let index = this.items.findIndex((el) => el.id === item.id);
        this.items[index].inLike = true;
      }
    },
  },
});
