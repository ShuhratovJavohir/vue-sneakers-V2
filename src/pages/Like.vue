<script setup>
import { useCartStore } from "@/store/cart.js";
import { useLikeStore } from "@/store/like.js";

const cartStore = useCartStore()
const likeStore = useLikeStore()

const onClickDelLike = (item) => {
  likeStore.addLike(item)
}

const onClickAdd = (item) => {
  cartStore.addItem(item)
}

</script>

<template>
  <div class="container">
    <div class="like" v-if="likeStore.items.length != 0">
      <div class="like__top">
        <router-link to="/">
          <img src="@/assets/images/toback.svg" alt="" />
        </router-link>
        <h2 class="like__top-title">Мои покупки</h2>
      </div>
      <div class="home__wrapper">
        <div 
          class="product" 
          v-for="item in likeStore.items"
          :key="item.id"
        >
          <button class="product-like" @click="onClickDelLike(item)">
            <img src="@/assets/images/minusLike.svg" alt="" />
          </button>
          <img
            :src="'../images/products/' + item.images"
            alt="product.images"
            class="product-img"
          />
          <p class="product-name">{{item.title}}</p>
          <div class="product__bottom">
            <div class="product-price">
              <p>Цена:</p>
              <h3>{{item.price}} руб.</h3>
            </div>
            <div class="product-add" @click="onClickAdd(item)">
              <img v-if="item.inCart" src="@/assets/images/minusCart.svg" alt="" />
              <img v-else src="@/assets/images/plusCart.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="like__empty" v-else>
      <div class="like__empty-content">
        <img
          src="@/assets/images/empty-like.png"
          alt=""
          class="like__empty-img"
        />
        <h2 class="like__empty-title">Закладок нет :(</h2>
        <p class="like__empty-subtitle">
          Вы нищеброд? <br />
          Оформите хотя бы один заказ.
        </p>
        <router-link to="/" class="like__empty-btn like"
          >Вернуться назад</router-link
        >
      </div>
    </div>
  </div>
</template>