<template>
  <div class="cart" :class="openCart == true ? 'active' : ''">
    <h1>this is cart</h1>
  </div>
</template>

<script setup>
const props = defineProps({
  openCart: { typeof: Boolean },
});
</script>