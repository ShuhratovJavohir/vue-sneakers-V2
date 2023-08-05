import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    isOpenCart: false,
    items: [],
  }),
  getters: {
    totalPrice(){
      return this.items.reduce((sum, el) => sum + el.price, 0)
    }
  },
  actions: {
    addItem(item) {
      const find = this.items.find((el) => el.id === item.id);
      console.log(find);
			
      if (find) {
        item.inCart = false
        this.items = this.items.filter((el) => el.id !== item.id);
      } else {
        item.inCart = true
        this.items.push(item); 
      }
    },
  },
});
