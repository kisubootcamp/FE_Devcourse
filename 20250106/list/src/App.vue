<script>
export default {
  data() {
    return {
      showAll: false,
      customers: [
        {
          id: 1,
          name: "Neil Sims",
          email: "email@windstart.com",
          amount: "$320",
        },
        {
          id: 2,
          name: "James",
          email: "james@gmail.com",
          amount: "$$250",
        },
        {
          id: 3,
          name: "Smith",
          email: "Smith@windstart.com",
          amount: "$600",
        },
        {
          id: 4,
          name: "Mike",
          email: "mike@windstart.com",
          amount: "$200",
        },
        {
          id: 5,
          name: "Yarn",
          email: "yarn@windstart.com",
          amount: "$140",
        },
        {
          id: 6,
          name: "Npm",
          email: "npm@windstart.com",
          amount: "$220",
        },
        {
          id: 7,
          name: "Han",
          email: "Han@windstart.com",
          amount: "$450",
        },
      ],
    };
  },
  computed: {
    displayCustomers() {
      return this.showAll ? this.customers : this.customers.slice(0, 5);
    },
  },
  methods: {
    showAllList() {
      this.showAll = true;
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
          v-if="!showAll"
          href="#"
          class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          @click="showAllList"
        >
          View all
        </a>
      </div>
      <div class="flow-root">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li
            v-for="customer in displayCustomers"
            :key="customer.defineComponent"
            class="py-3 sm:py-4"
          >
            <div class="flex items-center">
              <div class="flex-1 min-w-0 ms-4">
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-white"
                >
                  {{ customer.name }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ customer.email }}
                </p>
              </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                {{ customer.amount }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style></style>
