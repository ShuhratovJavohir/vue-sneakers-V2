<template>
  <div class="container">
    <div class="like" v-if="likes.length">
      <div class="like__top">
        <router-link to="/">
          <img src="@/assets/images/toback.svg" alt="" />
        </router-link>
        <h2 class="like__top-title">Мои покупки</h2>
      </div>
      <div class="products__wrapper">
        <div class="product" v-for="product in likes" :key="product.id">
          <button class="product-like" @click="delProductLike(product)">
            <img src="@/assets/images/likeadd.svg" alt="" />
          </button>
          <img
            :src="getImages(product.images)"
            alt="product.images"
            class="product-img"
          />
          <p class="product-name">{{ product.title }}</p>
          <div class="product__bottom">
            <div class="product-price">
              <p>Цена:</p>
              <h3>{{ product.price }} руб.</h3>
            </div>
            <button
              v-if="product.inCart"
              class="product-add"
              @click="deltoCartProduct(product)"
            >
              <img src="@/assets/images/addToCart.svg" alt="" />
            </button>
            <button
              v-else
              class="product-add"
              @click="addProductCart(product)"
            >
              <img src="@/assets/images/add.svg" alt="" />
            </button>
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

<script setup>
import { ref } from "vue";
import { useLike } from "@/store/like";
import { useCart } from "@/store/cart";

const storeLike = useLike();
const likes = storeLike.likes;

const storeCart = useCart();
const carts = storeCart.cart;

const addProductCart = (product) => {
  product.inCart = true
  carts.push(product)
};

const deltoCartProduct = () => {
  console.log('del');
}

const delProductLike = (product) => {
  console.log('del');
  let index = likes.findIndex((el) => el.id == product.id);
  likes.splice(index, 1);
}

const getImages = (images) => `../../public/images/products/${images}`;
</script>