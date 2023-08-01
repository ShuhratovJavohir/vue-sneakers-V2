<template>
  <div class="wrapper">
    <Navbar :openCart="openCart" @ClickCart="ClickCart" />
    <Cart :openCart="openCart" @CloseCart="CloseCart" />
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import Cart from "@/components/Cart.vue";

const openCart = ref(false);

const ClickCart = (open) => {
  openCart.value = open;
  document.body.classList.add('active')
};

const CloseCart = (close) => {
  openCart.value = close;
  document.body.classList.remove('active')

};
</script>