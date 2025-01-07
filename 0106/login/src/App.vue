<script>
let savedEmail = "";

export default {
  name: "App",
  data() {
    return {
      email: "",
      password: "",
      check: false,
    };
  },
  mounted() {
    if (savedEmail) {
      this.email = savedEmail;
      this.check = true;
      console.log("Email restored:", this.email);
    }
  },
  methods: {
    handlesubmit() {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{4,}$/;
      if (!emailRegex.test(this.email)) {
        alert("Please enter a valid email address.");
        return;
      }
      if (!passwordRegex.test(this.password)) {
        alert(
          "Password must be at least 4 characters long and contain at least one letter and one number."
        );
        return;
      }

      if (this.check) {
        savedEmail = this.email;
        console.log("Email saved:", savedEmail);
      } else {
        this.email = "";
      }
      this.password = "";
      alert("Form submitted successfully!");
    },
    checkRemeber() {
      this.check = !this.check;
      if (!this.check) {
        savedEmail = "";
        console.log("Remember me unchecked. Email cleared.");
      }
    },
  },
  computed: {
    handleDisable() {
      return this.email !== "" && this.password !== "" ? false : true;
    },
  },
};
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div
      class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8"
    >
      <form class="space-y-6" @submit.prevent="handlesubmit">
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
            v-model="email"
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
            type="password"
            v-model="password"
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
                @click="checkRemeber"
                id="remember"
                type="checkbox"
                v-model="check"
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
          :disabled="handleDisable"
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
