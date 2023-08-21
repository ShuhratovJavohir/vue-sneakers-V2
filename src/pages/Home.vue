<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useProductStore } from "@/store/products.js";
import { useCartStore } from "@/store/cart.js";
import Product from "@/components/Product.vue";
import Loading from "@/components/Loading.vue";

const productsStore = useProductStore();

const search = ref("");

const getProducts = computed(() => {
  return productsStore.items.filter((el) =>
    el.title.toLowerCase().includes(search.value.toLowerCase())
  );
});

onMounted(() => {
  if (!productsStore.items.length) {
    setTimeout(() => {
      productsStore.fetchItems();
    }, 1000);
  } else {
    console.log("уже есть");
  }
});
</script>

<template>
  <div class="container">
    <div class="home" v-if="!productsStore.isLoading">
      <div class="home__top">
        <h2 class="home__top-title">
          {{ search.length == 0 ? "Все кросовки" : "Поиск: " + search }}
        </h2>
        <div class="home__top-search">
          <img
            v-if="search.length == 0"
            src="@/assets/images/search.svg"
            alt=""
          />
          <img
            v-else
            @click="search = ''"
            class="home__top-search-clear"
            src="@/assets/images/clear.svg"
            alt=""
          />
          <input v-model="search" type="text" placeholder="Поиск..." />
        </div>
      </div>
      <div class="home__wrapper" v-if="getProducts.length">
        <Product v-for="item in getProducts" :key="item.id" :item="item" />
      </div>
      <h1 v-else>По вашему поиску ничего не найдено</h1>
    </div>
    <Loading v-else />
  </div>
</template>