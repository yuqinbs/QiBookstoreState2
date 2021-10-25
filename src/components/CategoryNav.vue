<template>
  <nav class="category-nav">
    <ul class="category-buttons">
      <template v-for="category in categories">
        <li
          v-if="category.name === $route.params.name"
          :key="category.categoryID"
          class="button selected-category-button"
        >
          {{ category.name }}
        </li>
        <li
          v-else
          :key="category.categoryID"
          class="button selected-category-button"
        >
          <router-link :to="'/category/' + category.name">
            {{ category.name }}
          </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
import ApiService from "@/services/ApiService";
export default {
  name: "CategoryNav",
  data: function () {
    return {
      categories: [],
    };
  },
  created: function () {
    console.log("Begin fetchCategories...");
    this.fetchCategories();
    console.log("End fetchCategories...");
  },
  methods: {
    fetchCategories() {
      const vm = this;
      ApiService.fetchCategories()
        .then((data) => {
          console.log("Data: " + data);
          vm.categories = data;
        })
        .catch((reason) => {
          console.log("Error: " + reason);
        });
    },
  },
};
</script>

<style scoped>
.category-buttons {
  display: flex;
  flex-direction: row;
  text-align: center;
  background-color: var(--primary-color);
}

.button.unselected-category-button,
.button.unselected-category-button:visited {
  background-color: var(--neutral-color);
}

.button.unselected-category-button:hover,
.button.unselected-category-button:active {
  background-color: var(--primary-color);
}

nav a {
  color: pink;
  text-decoration: none;
}
</style>
