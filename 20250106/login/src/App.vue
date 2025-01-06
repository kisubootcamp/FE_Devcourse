<script>
export default {
  name: "App",
  data() {
    return {
      uemail: "",
      upassword: "",
      isChecked: false,
    };
  },
};
</script>
<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div
      class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
    >
      <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900">
          Sign in to our platform
        </h5>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Your email</label
          >
          <input
            v-model.trim="uemail"
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@company.com"
            autocomplete="off"
            required
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Your password</label
          >
          <input
            v-model.trim="upassword"
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                v-model="isChecked"
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              />
            </div>
            <label for="remember" class="text-sm font-medium text-gray-900 ms-2"
              >Remember me</label
            >
          </div>
          <a href="#" class="text-sm text-blue-700 ms-auto hover:underline"
            >Lost Password?</a
          >
        </div>
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Login to your account
        </button>
        <div class="text-sm font-medium text-gray-500">
          Not registered?
          <a href="#" class="text-blue-700 hover:underline">Create account</a>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
