<script setup>
import { ref } from "vue";
import { useCartStore } from "@/store/cart.js";

const cartStore = useCartStore();

const onClickCloseCart = () => {
  cartStore.isOpenCart = false;  
};

const onClickDel = (item) => {
  cartStore.addItem(item);
};
</script>

<template>
  <div
    class="cart-wrapper"
    :class="cartStore.isOpenCart ? 'active' : ''"
    @click="onClickCloseCart"
  >
    <div
      class="cart__box"
      :class="cartStore.isOpenCart ? 'active' : ''"
      @click.stop
    >
      <div class="cart__box-top">
        <h2 class="cart__box-title">Корзина</h2>
        <button class="cart__box-close" @click="onClickCloseCart">
          <img src="@/assets/images/delete.svg" alt="" />
        </button>
      </div>
      <div class="cart__content" v-if="cartStore.items.length != 0">
        <ul class="cart__products">
          <li
            class="cart__product"
            v-for="item in cartStore.items"
            :key="item.id"
          >
            <img
              :src="'../../public/images/products/' + item.images"
              :alt="item.title"
              class="cart__product-img"
            />
            <div class="cart__product-info">
              <p class="cart__product-info-title">{{ item.title }}</p>
              <h3 class="cart__product-info-price">{{ item.price }} руб.</h3>
            </div>
            <button class="cart__product-btn" @click="onClickDel(item)">
              <img src="@/assets/images/delete.svg" alt="" />
            </button>
          </li>
        </ul>

        <div class="cart__bottom">
          <div class="cart__bottom-total">
            <h3 class="cart__bottom-total-title">Итого:</h3>
            <span class="cart__bottom-border"></span>
            <h3 class="cart__bottom-total-price">
              {{ cartStore.totalPrice }} руб.
            </h3>
          </div>
          <div class="cart__bottom-tax">
            <h3 class="cart__bottom-tax-title">Налог 5%:</h3>
            <span class="cart__bottom-border"></span>
            <h3 class="cart__bottom-tax-price">
              {{ Math.round((cartStore.totalPrice / 100) * 5) }} руб.
            </h3>
          </div>
          <button class="cart__bottom-btn">
            <span>формить заказ</span>
          </button>
        </div>
      </div>
      <div class="cart__empty" v-else>
        <img
          src="@/assets/images/cart-empty.png"
          alt=""
          class="cart__empty-img"
        />
        <h3 class="cart__empty-title">Корзина пустая</h3>
        <p class="cart__empty-subtitle">
          Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
        </p>
        <button class="cart__empty-btn" @click="onClickCloseCart">
          Вернуться назад
        </button>
      </div>
    </div>
  </div>
</template>