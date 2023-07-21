<template>
  <h1 class="text-cyan-700">{{ title }}</h1>
  <GoogleAuth/>
</template>
<script setup>
import GoogleAuth from "../component/common/GoogleAuth.vue";
const title = ref("Index Page");
</script>
<style></style>
