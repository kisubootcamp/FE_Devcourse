<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      remember: false,
    };
  },
  computed: {
    isLoginDisabled() {
      return !this.email || !this.password;
    },
  },
  methods: {
    isValidEmail(email) {
      return (
        email.includes("@") &&
        email.includes(".") &&
        email.indexOf("@") < email.indexOf(".")
      );
    },
    isValidPassword(password) {
      const isUpperCase = [...password].some(
        (char) => char >= "A" && char <= "Z"
      );
      const isLowerCase = [...password].some(
        (char) => char >= "a" && char <= "z"
      );
      const isNumber = [...password].some((char) => char >= "0" && char <= "9");
      const isSpecialChar = [...password].some(
        (char) => !/[a-zA-Z0-9]/.test(char)
      );

      return (
        password.length >= 4 &&
        isUpperCase &&
        isLowerCase &&
        isSpecialChar &&
        isNumber
      );
    },
    handleSubmit() {
      if (!this.isValidEmail(this.email)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (!this.isValidPassword(this.password)) {
        alert(
          "Password must be at least 4 characters long and contain at least one letter and one number."
        );
        return;
      }
      if (this.remember) {
        alert("Remember me is checked!");
      }
      alert("Form submitted successfully!");
    },
  },
};
</script>
<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div
      class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
    >
      <form class="space-y-6" @submit.prevent="handleSubmit">
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
            v-model="email"
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
            v-model="password"
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
                v-model="remember"
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900"
              >Remember me</label
            >
          </div>
          <a href="#" class="ms-auto text-sm text-blue-700 hover:underline"
            >Lost Password?</a
          >
        </div>
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled
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
<style></style>
