<template>
  <div
    class="cart-wrapper"
    @click="$emit('CloseCart', false)"
    :class="openCart ? 'active' : ''"
  >
    <div class="cart__box" :class="openCart ? 'active' : ''" @click.stop>
      <div class="cart__box-top">
        <h2 class="cart__box-title">Корзина</h2>
        <button class="cart__box-close" @click="$emit('CloseCart', false)">
          <img src="@/assets/images/delete.svg" alt="" />
        </button>
      </div>
      <div class="cart__content" v-if="cart.length != 0">
        <ul class="cart__products">
          <li class="cart__product" v-for="product in cart" :key="product.id">
            <img
              :src="getImages(product.images)"
              alt=""
              class="cart__product-img"
            />
            <div class="cart__product-info">
              <p class="cart__product-info-title">
                {{product.title}}
              </p>
              <h3 class="cart__product-info-price">{{product.price}}руб.</h3>
            </div>
            <button class="cart__product-btn" @click="delProduct(product)">
              <img src="@/assets/images/delete.svg" alt="" />
            </button>
          </li>
        </ul>

        <div class="cart__bottom">
          <div class="cart__bottom-total">
            <h3 class="cart__bottom-total-title">Итого:</h3>
            <span class="cart__bottom-border"></span>
            <h3 class="cart__bottom-total-price">21 498 руб.</h3>
          </div>
          <div class="cart__bottom-tax">
            <h3 class="cart__bottom-tax-title">Налог 5%:</h3>
            <span class="cart__bottom-border"></span>
            <h3 class="cart__bottom-tax-price">1074 руб.</h3>
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
        <button class="cart__empty-btn" @click="$emit('CloseCart', false)">
          Вернуться назад
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCart } from "@/store/cart";

const storeCart = useCart();
const cart = storeCart.cart;

const delProduct = (product) => {
  product.inCart = false
  let index = cart.findIndex(el => el.id == product.id)
  cart.splice(index, 1)
}

// Получаем название каждой картинки
const imagesName = computed(() => props.product.images);

// Метод, который принимает аргумент с названием каждой картинки (${images}), и возвращает путь ../../public/images/products/${images}
// Картинки должны храниться в папке public
const getImages = (images) => `../../public/images/products/${images}`;

// Props
const props = defineProps({
  openCart: { typeof: Boolean },
});
</script>