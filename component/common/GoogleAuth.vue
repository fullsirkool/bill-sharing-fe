<template>
  <div>
    <GoogleSignInButton
      @success="handleLoginSuccess"
      @error="handleLoginError"
    ></GoogleSignInButton>
  </div>
</template>
<script setup lang="ts">
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";
const {BASE_URL} = useRuntimeConfig().public

const handleLoginSuccess = async (response: CredentialResponse) => {
  const { credential } = response;
  if (credential) {
    const profile = await useFetch(`${BASE_URL}auth/signin-google`, {
      method: "POST",
      params: {
        token: credential
      }
    })
  }
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>
