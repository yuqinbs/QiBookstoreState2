<template>
  <div class="home-categories">
    <li>
      <p>CATEGORIES</p>
      <svg
        t="1632035864411"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="14252"
        width="40"
        height="40"
      >
        <path
          d="M906.19904 116.38784H115.92704c-34.31424 0-62.14656 27.83744-62.14656 62.17216v0.29696c0 34.33984 27.83232 62.17216 62.14656 62.17216h790.272c34.30912 0 62.15168-27.83744 62.15168-62.17216v-0.29696c0-34.33472-27.84256-62.17216-62.15168-62.17216z m-0.31744 331.05408H116.2496c-34.5088 0-62.46912 27.98592-62.46912 62.47424v0.49152c0 34.48832 27.9552 62.46912 62.46912 62.46912H905.8816c34.5088 0 62.46912-27.9808 62.46912-62.46912v-0.49152c0-34.48832-27.96032-62.47424-62.46912-62.47424z m0.31744 331.84768H115.92704c-34.31424 0-62.14656 27.84256-62.14656 62.17728v0.29696c0 34.33984 27.83232 62.17728 62.14656 62.17728h790.272c34.30912 0 62.15168-27.83744 62.15168-62.17728v-0.29696c0-34.33472-27.84256-62.17728-62.15168-62.17728z"
          p-id="14253"
          fill="#003087"
        ></path>
      </svg>
      <ul>
        <template v-for="category in categories">
          <li
            v-if="category.name === $route.params.name"
            :key="category.categoryID"
            class="unselected-category"
          >
            <p>{{ category.name }}</p>
          </li>
          <li v-else :key="category.categoryID" class="unselected-category">
            <router-link :to="'/category/' + category.name">
              <p>{{ category.name }}</p>
            </router-link>
          </li>
        </template>
      </ul>
    </li>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService";

export default {
  name: "HeaderDropdownMenu",
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
.home-categories {
  display: contents;
  background: #ffffff;
  border-radius: 5px;
  padding: 0 0;
  justify-content: space-around;

  width: 20%;
  cursor: pointer;
  text-decoration: none;
}

.home-categories svg {
  position: relative;
  left: 27px;
}

.home-categories li {
  list-style: none;
  text-decoration: none;
}

.home-categories li:hover > ul {
  color: #000000;
  box-shadow: 0 0 10px #ccc;
  display: block;
  text-decoration: none;
}

.home-categories li ul {
  position: absolute;
  display: none;
  background: #003087;
  border: 1px #ffffff solid;
  border-radius: 5px;
  width: 15%;
  margin: 0;
  padding: 0;
  color: #ffffff;
  font-size: 0.9rem;
  text-decoration: none;
}

.unselected-category {
  text-decoration: none;
  color: #ffffff;
}

.unselected-category:hover {
  text-decoration: none;
  color: #000000;
}

.unselected-category p {
  line-height: 30px;
  padding-left: 10%;
  box-sizing: border-box;
  width: 100%;
  text-decoration: none;
}

.unselected-category p:hover {
  background: #ffffff;
  text-decoration: none;
  cursor: pointer;
}
</style>
