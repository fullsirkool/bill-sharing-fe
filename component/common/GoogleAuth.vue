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
const handleLoginSuccess = async (response: CredentialResponse) => {
  const { credential } = response;
  const {GOOGLE_INFOR_URL} = useRuntimeConfig()
  console.log("Access Token", credential, response);
  if (credential) {
    // const user = await $fetch("/api/google-login", {
    //   method: "POST",
    //   body: {
    //     token: credential
    //   }
    // })
    // console.log('user:', user)
    const profile = await $fetch(GOOGLE_INFOR_URL, {
      method: "GET",
      params: {
        id_token: credential
      }
    })
    console.log('profile:', profile)
  }
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>
