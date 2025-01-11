<script>
export default {
  data() {
    return {
      customers: [
        { Name: "Neil Sims", Email: "email@windster.com", Amount: "$320" },
        { Name: "James", Email: "james@gmail.com", Amount: "$250" },
        { Name: "Smith", Email: "smith@gmail.com", Amount: "$600" },
        { Name: "Mike", Email: "mike@gmail.com", Amount: "$200" },
        { Name: "Yarn", Email: "yarn@gmail.com", Amount: "$140" },
        { Name: "Npm", Email: "npm@gmail.com", Amount: "$220" },
        { Name: "Han", Email: "han@gmail.com", Amount: "$450" },
      ],
      isViewAll: false,
    };
  },
  computed: {
    customerState() {
      return this.isViewAll ? this.customers : this.customers.slice(0, 5);
    },
  },
  methods: {
    toggleCustomer() {
      this.isViewAll = !this.isViewAll;
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
          href="#"
          class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          @click.prevent="toggleCustomer()"
        >
          {{ isViewAll ? "" : "View All" }}
        </a>
      </div>
      <div class="flow-root" v-for="value in customerState">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li class="py-3 sm:py-4">
            <div class="flex items-center">
              <div class="flex-1 min-w-0 ms-4">
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-white"
                >
                  {{ value.Name }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ value.Email }}
                </p>
              </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                {{ value.Amount }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style></style>
