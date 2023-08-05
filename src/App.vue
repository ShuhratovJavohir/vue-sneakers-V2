<template>
  <div class="wrapper">
    <Navbar />
    <Cart />
    <RouterView />
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import Cart from "@/components/Cart.vue";
</script>