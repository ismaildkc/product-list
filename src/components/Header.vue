<template>
  <div>
    <router-link :to="{ path: '/' }">Home</router-link>
    <router-link :to="{ path: '/product-detail' }">Detail</router-link>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>