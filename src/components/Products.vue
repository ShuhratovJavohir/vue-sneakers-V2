<template>
  <div class="products">
    <h2 class="products-title">Все кросовки</h2>
    <div class="products__wrapper" v-if="productsStore.products">
      <Product
        v-for="product in productsStore.products"
        :key="product.id"
        :product="product"
      />
    </div>
    <h1 v-else>идёт загруска</h1>
  </div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import Product from "@/components/product.vue";
import { useProducts } from "@/store/products";
let productsStore = useProducts();

onMounted(() => {
  productsStore.getProducts();
});
</script>

<style lang="scss" scoped>
</style>