<template>
  <div class="product">
    <button class="product-like">
      <img src="@/assets/images/addLike.svg" alt="" />
      <!-- <img src="@/assets/images/likeadd.svg" alt=""> -->
    </button>
    <img src="@/assets/images/nike.jpg" :alt="product.images" class="product-img" />
    <p class="product-name">{{ product.title }}</p>
    <div class="product__bottom">
      <div class="product-price">
        <p>Цена:</p>
        <h3>{{ product.price }} руб.</h3>
      </div>
      <button class="product-add">
        <img src="@/assets/images/add.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: { typeof: Array },
});
</script>
