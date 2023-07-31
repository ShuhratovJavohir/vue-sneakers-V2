<template>
  <div class="container">
    <nav class="nav">
      <!-- nav__logo -->
      <router-link to="/" class="nav__logo">
        <img class="nav__logo-img" src="@/assets/images/logo.png" alt="logo" />
        <div class="nav__logo-name">
          <h3>VUE SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </router-link>
      <!-- nav__list -->
      <ul class="nav__list">
        <li class="nav__list-item" @click="$emit('clickCart', true)">
          <a class="nav__list-link cart-btn" href="#">
            <img src="@/assets/images/cart.svg" alt="" />
            <span>1250 руб.</span>
          </a>
        </li>

        <li class="nav__list-item">
          <router-link to="/like" class="nav__list-link like">
            <img src="@/assets/images/like.svg" alt="" />
          </router-link>
        </li>

        <li class="nav__list-item">
          <a class="nav__list-link user" href="#">
            <img src="@/assets/images/user.svg" alt="" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <hr class="hr" />
</template>

<script setup>
import { ref, onMounted } from "vue";
</script>