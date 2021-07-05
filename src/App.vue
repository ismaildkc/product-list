<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "app",
  components: {
    Header,
    Footer
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
</style>