<template>
  <div class="container">
    <nav class="nav">
      <!-- nav__logo -->
      <a class="nav__logo" href="#">
        <img class="nav__logo-img" src="@/assets/images/logo.png" alt="logo" />
        <div class="nav__logo-name">
          <h3>VUE SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </a>
      <!-- nav__list -->
      <ul class="nav__list">
        <li class="nav__list-item" @click="openCart = true">
          <a class="nav__list-link cart-btn" href="#">
            <img src="@/assets/images/cart.svg" alt="" />
            <span>1250 руб.</span>
          </a>
        </li>

        <li class="nav__list-item">
          <a class="nav__list-link like" href="#">
            <img src="@/assets/images/like.svg" alt="" />
          </a>
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
</script>