<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      emailRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      passwordRegex:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/,
    };
  },
  beforeCreate() {
    if (!localStorage.getItem("email")) {
      localStorage.setItem("email", "");
    }
  },
  created() {
    this.email = localStorage.getItem("email");
  },
  methods: {
    handleEmail() {
      console.log(this.email);
    },
    handlePassword() {
      console.log(this.password);
    },
    handleRememberMe() {
      console.log(this.rememberMe);
    },
    passwordResult() {
      if (this.password.length <= 0) return;
      if (!this.passwordRegex.test(this.password)) {
        return alert(
          "Password must be at least 4 characters long and contain at least one letter and one number"
        );
      }
    },
    emailResult() {
      if (this.email.length <= 0) return;
      if (!this.emailRegex.test(this.email))
        return alert("please enter a valid email address");
    },
  },
  computed: {
    isLoginActive() {
      if (this.email.length > 0 && this.password.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    RememberResult() {
      if (this.rememberMe) alert("Remember me is checked!");
    },
    loginSuccess() {
      if (
        this.emailRegex.test(this.email) &&
        this.passwordRegex.test(this.password)
      ) {
        if (this.rememberMe) localStorage.setItem("email", this.email);
        return alert("Form submitted successfully!");
      }
    },
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
            type="email"
            name="email"
            id="email"
            v-model="email"
            @input="handleEmail"
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
            name="password"
            id="password"
            v-model="password"
            @input="handlePassword"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                v-model="rememberMe"
                @change="handleRememberMe"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              />
            </div>
            <label for="remember" class="ms-2 text-sm font-medium text-gray-900"
              >Remember me</label
            >
            {{ RememberResult }}
          </div>
          <a href="#" class="ms-auto text-sm text-blue-700 hover:underline"
            >Lost Password?</a
          >
        </div>
        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:bg-gray-300 disabled:cursor-not-allowed"
          :disabled="!isLoginActive"
          @click.prevent="
            () => {
              emailResult();
              passwordResult();
              loginSuccess;
            }
          "
        >
          Login to your account
        </button>
        <div class="text-sm font-medium text-gray-500">
          Not registered?
          <a href="#" class="text-blue-700 hover:underline"
            >Create accountasdas</a
          >
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
