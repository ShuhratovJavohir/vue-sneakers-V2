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
      <button v-if="product.inCart" class="product-add" @click="delProduct(product)">
        <img src="@/assets/images/addToCart.svg" alt="" />
      </button>
      <button v-else class="product-add" @click="addProductToCart(product)">
        <img src="@/assets/images/add.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useCart } from "@/store/cart";

const storeCart = useCart();
const cart = storeCart.cart;

const addProductToCart = (product) => {
  product.inCart = true;
  cart.push(product);
};

const delProduct = (product) => {
  product.inCart = false;
  let index = cart.findIndex(el => el.id == product.id)
  cart.splice(index, 1)
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
