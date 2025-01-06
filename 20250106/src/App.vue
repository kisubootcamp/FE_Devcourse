<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div
      class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
    >
      <form class="space-y-6" action="#" @submit.prevent="handleSubmit">
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
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-600"
            placeholder="name@company.com"
            autocomplete="off"
            required
            v-model="uemail"
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Your password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            v-model="upassword"
          />
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                v-model="uremember"
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                @change="checkRemember"
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
          :disabled
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

<script>
export default {
  data() {
    return {
      uemail: "",
      upassword: "",
      uremember: false,
    };
  },
  computed: {
    disabled() {
      if (this.uemail && this.upassword) return false;
      return true;
    },
  },
  methods: {
    handleSubmit() {
      // this.validateEmail();
      // this.validatePassword();

      if (this.validateEmail() && this.validatePassword())
        window.alert("Form submitted successfully!");
    },
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(this.uemail)) return true;
      else {
        window.alert("Please enter a valid email address.");
        return false;
      }
    },
    validatePassword() {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
      if (passwordRegex.test(this.upassword)) return true;
      else {
        window.alert(
          "Password must be at least 4 characters long and contain at least one letter and one number."
        );
        return false;
      }
    },
    checkRemember() {
      if (this.uremember) window.alert("Remember me is checked!");
    },
  },
};
</script>

<style lang="scss" scoped></style>
