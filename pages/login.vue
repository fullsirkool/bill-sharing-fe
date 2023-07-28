<template>
  <!-- component -->
  <div
    class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16"
  >
    <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
    <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
      <div class="text-center">
        <h2 class="mt-6 text-3xl font-bold text-gray-900">Welcom Back!</h2>
        <p class="mt-2 text-sm text-gray-600">Please sign in to your account</p>
      </div>
      <div class="flex flex-row justify-center items-center space-x-3">
        <GoogleAuth />
      </div>
      <div class="flex items-center justify-center space-x-2">
        <span class="h-px w-16 bg-gray-300"></span>
        <span class="text-gray-500 font-normal">OR</span>
        <span class="h-px w-16 bg-gray-300"></span>
      </div>
      <form class="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="relative">
          <label class="text-sm font-bold text-gray-700 tracking-wide">Email</label>
          <UInput placeholder="Email" size="xl" v-model="form.email">
            <template #trailing>
              <Icon name="ph:check-circle-light" color="#22C55E" size="1.5em" />
              <Icon name="ph:x-circle-light" color="#EF4444" size="1.5em" />
            </template>
          </UInput>
          <!-- <input
            class="w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            type=""
            placeholder="Email"
            value=""
          /> -->
        </div>
        <div class="mt-8 content-center relative">
          <label class="text-sm font-bold text-gray-700 tracking-wide">Password</label>
          <UInput
            placeholder="***********"
            size="xl"
            :type="showPassword ? 'text' : 'password'"
            v-model="form.password"
          >
          </UInput>
          <div class="absolute right-3 bottom-[0.6em]">
            <Icon
              v-show="!showPassword"
              name="ph:eye-light"
              size="1.5em"
              color="#777777"
              class="cursor-pointer"
              @click="changePasswordView"
            />
            <Icon
              v-show="showPassword"
              name="ph:eye-slash-light"
              size="1.5em"
              color="#777777"
              class="cursor-pointer"
              @click="changePasswordView"
            />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              class="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
            />
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>
          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-500 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="w-full flex justify-center bg-indigo-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
          >
            Sign in
          </button>
        </div>
        <p
          class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500"
        >
          <span>Don't have an account?</span>
          <a
            href="#"
            class="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
            >Sign up</a
          >
        </p>
      </form>
    </div>
  </div>
</template>
<script setup>
const INIT_FORM = {
  email: "",
  password: "",
};
import GoogleAuth from "../component/common/GoogleAuth.vue";
const form = ref({ ...INIT_FORM });
const showPassword = ref(false);
const checkEmail = computed(() => {
  return;
});
const changePasswordView = () => {
  console.log("changePasswordView");
  showPassword.value = !showPassword.value;
};
</script>
<style></style>
