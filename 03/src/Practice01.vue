<script>
export default {
  name: "Practice01",
  data() {
    return {
      email: "",
      password: "",
      isChecked: false,
    };
  },
  methods: {
    handleSubmit() {
      // 이메일 형식 확인
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        alert("Please enter a valid email address");
        return;
      }

      // 비밀번호 형식 확인
      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{4,}$/;
      if (!passwordPattern.test(this.password)) {
        alert(
          "Password must be at least 4 characters long and contain at least one letter and one number."
        );
        return;
      }

      // 체크 확인
      if (this.isChecked) {
        alert("Remember me is checked!");
      }

      // 폼 제출 성공
      alert("Form submitted successfully!");

      // 입력 값 확인 console
      if (this.email !== "" && this.password !== "") {
        console.log(
          `Email: ${this.email}, Password: ${this.password}, isChecked: ${this.isChecked}`
        );
      }

      // 폼 제출 후 input 초기화
      this.email = "";
      this.password = "";
      this.isChecked = false;
    },
  },
  computed: {
    isDisabled() {
      return !(this.email && this.password);
    },
  },
};
</script>
<template>
  <h1>[실습] 로그인 폼</h1>
  <div class="flex items-center justify-center min-h-screen bg-gray-900">
    <div
      class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
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
            v-model="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="name@company.com"
            autocomplete="off"
            required />
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
            required />
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                v-model="isChecked"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
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
          :disabled="isDisabled">
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
