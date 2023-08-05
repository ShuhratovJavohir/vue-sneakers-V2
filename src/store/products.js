import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
    state: () => ({
            
        isLoading: true,
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
    },
});
