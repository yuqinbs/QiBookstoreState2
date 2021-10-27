<template>
  <nav class="category-nav">
    <ul class="category-buttons">
      <template v-for="category in $store.state.categories">
        <li
          v-if="category.name === $store.state.selectedCategoryName"
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
export default {
  name: "CategoryNav"
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
