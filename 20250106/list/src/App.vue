<script>
export default {
  data() {
    return {
      isClicked: false,
      customers: [
        { cName: "Neil Sims", cEmail: "email@windster.com", cAmount: "$320" },
        { cName: "James", cEmail: "james@gmail.com", cAmount: "$250" },
        { cName: "Smith", cEmail: "smith@gmail.com", cAmount: "$600" },
        { cName: "Mike", cEmail: "mike@gmail.com", cAmount: "$200" },
        { cName: "Yarn", cEmail: "yarn@gmail.com", cAmount: "$140" },
        { cName: "Npm", cEmail: "npm@gmail.com", cAmount: "$220" },
        { cName: "Han", cEmail: "han@gmail.com", cAmount: "$450" },
      ],
    };
  },
  computed: {
    showCustomers() {
      return this.isClicked
        ? this.customers
        : this.customers.filter((_, index) => index < 5);
    },
    handleShowAll() {
      this.isClicked = true;
    },
  },
};
</script>
<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-black">
    <div
      class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex items-center justify-between mb-4">
        <h5
          class="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >
          Latest Customers
        </h5>
        <a
          :style="isClicked && { display: 'none' }"
          href="#"
          class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          @click="handleShowAll"
        >
          View all
        </a>
      </div>
      <div class="flow-root">
        <ul
          v-for="(customer, index) in showCustomers"
          :key="index"
          role="list"
          class="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li class="py-3 sm:py-4">
            <div class="flex items-center">
              <div class="flex-1 min-w-0 ms-4">
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-white"
                >
                  {{ customer.cName }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ customer.cEmail }}
                </p>
              </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                {{ customer.cAmount }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style></style>
