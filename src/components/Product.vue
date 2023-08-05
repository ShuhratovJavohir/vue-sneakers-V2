<script setup>
import { defineProps, onMounted } from "vue";
import { useCartStore } from "@/store/cart.js";
import { useLikeStore } from "@/store/like.js";

const props = defineProps({
  item: { typeof: Object },
});

const cartStore = useCartStore();
const likeStore = useLikeStore()

const onClickAdd = (item) => {
  cartStore.addItem(item);
};

const onClickAddLike = (item) => {
  likeStore.addLike(item)
}
</script>

<template>
  <div class="product">
    <div class="product-like" @click="onClickAddLike(item)">
      <img v-if="item.inLike" src="@/assets/images/minusLike.svg" alt="" />
      <img v-else src="@/assets/images/plusLike.svg" alt="" />
    </div>
    <img
      :src="'../../public/images/products/' + item.images"
      :alt="title"
      class="product-img"
    />
    <p class="product-name">{{ item.title }}</p>
    <div class="product__bottom">
      <div class="product-price">
        <p>Цена:</p>
        <h3>{{ item.price }} руб.</h3>
      </div>
      <div class="product-add" @click="onClickAdd(item)">
        <img v-if="item.inCart" src="@/assets/images/minusCart.svg" alt="" />
        <img v-else src="@/assets/images/plusCart.svg" alt="" />
      </div>
    </div>
  </div>
</template> 