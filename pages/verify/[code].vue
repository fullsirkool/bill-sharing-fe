<template>
  <h1 class="text-cyan-700">{{ title }}</h1>
</template>
<script setup>
const title = ref("Your account is verified!");
const route = useRoute();
const code = route.params.code;
const {BASE_URL} = useRuntimeConfig()
const verifyUser = async () => {
  const url = `${BASE_URL}auth/verify/${code}`;
  try {
    const res = await useFetch(url, {
      method: "PATCH",
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
verifyUser();
</script>
<style></style>
