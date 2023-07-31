<template>
  <div class="product">
    <button class="product-like">
      <img src="@/assets/images/addLike.svg" alt="" />
      <!-- <img src="@/assets/images/likeadd.svg" alt=""> -->
    </button>
    <img
      :src="getImages(product.images)"
      :alt="product.images"
      class="product-img"
    />
    <p class="product-name">{{ product.title }}</p>
    <div class="product__bottom">
      <div class="product-price">
        <p>Цена:</p>
        <h3>{{ product.price }} руб.</h3>
      </div>
      <button class="product-add" @click="addProductToCart(product)">
        <img v-if="addToCart" src="@/assets/images/addToCart.svg" alt="" />
        <img v-else src="@/assets/images/add.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useCart } from "@/store/cart";

const storeCart = useCart();
const cart = storeCart.cart;
const addToCart = ref(false);

const addProductToCart = (product) => {
  addToCart.value = true;
  cart.push(product);
  console.log(storeCart.cart);
};

// Получаем через пропсы массив с каждым товаром
const props = defineProps({
  product: { typeof: Array },
});

// Получаем название каждой картинки
const imagesName = computed(() => props.product.images);

// Метод, который принимает аргумент с названием каждой картинки (${images}), и возвращает путь ../../public/images/products/${images}
// Картинки должны храниться в папке public
const getImages = (images) => `../../public/images/products/${images}`;
</script>
