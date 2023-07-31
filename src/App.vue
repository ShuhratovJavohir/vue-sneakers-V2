<template>
  <div class="wrapper">
    <Navbar />
    <Cart :openCart="openCart" />
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import Cart from "@/components/Cart.vue";

const openCart = ref(true)

</script>