<template>
  <div class="home-page">
    <home-category></home-category>
  </div>
</template>

<script>
import HomeCategory from "@/components/HomeCategory";
export default {
  name: "Home",
  components: { HomeCategory },
};
</script>

<style scoped>
.category-image-items {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
}

.category-image-items a {
  text-align: center;
  cursor: pointer;
}

.category-image-items div {
  padding: 0.5em 0;
  background: rgba(0, 0, 0, 0.5); /* last # is percent opacity */
  color: white;
  transform: translateY(-2.25em);
  margin-bottom: -2em;
}

.welcome {
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;
  padding: 10px;
}

.trending {
  font-family: "Courier New", Courier, monospace;

  margin-left: 1.5%;
}

.trending-books {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8em;
}

.trending-books a {
  text-align: center;
  cursor: pointer;
}

.trending-books button {
  padding: 0.5em 0;
  background: #005bff; /* last # is percent opacity */
  color: white;
  margin-top: 5px;
  margin-bottom: -2em;
}

.buy-now {
  background-color: gold;
  color: black;
  padding: 0.25em 1em;
  margin-top: 10px;
  border: solid dodgerblue 2px;
  border-radius: 7.5px;
}
</style>
