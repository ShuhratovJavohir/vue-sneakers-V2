<script setup>
import { useCartStore } from "@/store/cart.js";
import { computed } from "vue";

const cartStore = useCartStore();

const onClickOpenCart = () => {
  cartStore.isOpenCart = true;
  document.body.style = "overflow: hidden; margin-right: 16px;";
};
</script>

<template>
  <div class="container">
    <nav class="nav">
      <!-- nav__logo -->
      <router-link to="/" class="nav__logo">
        <img class="nav__logo-img" src="@/assets/images/logo.png" alt="logo" />
        <div class="nav__logo-name">
          <h3>VUE SNEAKERS -V2</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </router-link>
      <!-- nav__list -->
      <ul class="nav__list">
        <li class="nav__list-item" @click="onClickOpenCart">
          <span class="nav__list-link cart-btn">
            <img src="@/assets/images/cart.svg" alt="" />
            <span>{{ cartStore.totalPrice }} руб.</span>
          </span>
        </li>

        <li class="nav__list-item">
          <router-link to="/like" class="nav__list-link like">
            <img src="@/assets/images/like.svg" alt="" />
          </router-link>
        </li>

        <li class="nav__list-item">
          <sapn class="nav__list-link user">
            <img src="@/assets/images/user.svg" alt="" />
          </sapn>
        </li>
      </ul>
    </nav>
  </div>
  <hr class="hr" />
</template>