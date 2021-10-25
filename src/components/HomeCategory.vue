<template>
  <div class="home-page">
    <div class="banner">
      <div class="border"></div>
      <h2>Welcome To BookBook</h2>

      <router-link to="/category/Children" tag="button">Shop Now!</router-link>
      <div class="border border-bottom"></div>
    </div>

    <div class="trending">
      <h1>Trending</h1>
    </div>
    <section class="trending-images container">
      <div class="trending-books">
        <a>
          <img
            src="@/assets/images/books/one-hundred-reasons-to-hope.jpg"
            alt="hope"
            width="155px"
            height="200px"
          />
          <div class="buy-now">Buy Now</div>
        </a>
        <a>
          <img
            src="@/assets/images/books/big-panda-and-tiny-dragon.jpg"
            alt="panda"
            width="155px"
            height="200px"
          />
          <div class="buy-now">Buy Now</div>
        </a>
        <a>
          <img
            src="@/assets/images/books/the-primrose-railway-children.jpg"
            alt="primrose"
            width="155px"
            height="200px"
          />
          <div class="buy-now">Buy Now</div>
        </a>
        <a>
          <img
            src="@/assets/images/books/guinness-world-records-2022.jpg"
            alt="All Books"
            width="155px"
            height="200px"
          />
          <div class="buy-now">Buy Now</div>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomeCategory",
};
</script>

<style scoped>
.banner {
  padding: 6em 0 8em 0;
  text-align: center;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
}

.border {
  width: 60%;
  margin: 0 auto;
  height: 47px;
  border: 2px solid #fff;
  border-bottom: 0;
}
.banner h2 {
  margin: 0;
  font-size: 3em;
  color: #ffffff;
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  padding: 0.5em 0 0 0;
}

.banner button {
  font-size: 2em;
  background-color: pink;
  margin: 1em 0 0 0;
  line-height: 2em;
  padding: 0.5em;
  border: solid dodgerblue 2px;
  border-radius: 7.5px;
}

.banner button:hover {
  cursor: pointer;
  font-weight: bold;
  opacity: 1;
  text-decoration: none;
}

.border-bottom {
  border-top: 0;
  border-bottom: 2px solid #fff !important;
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

.trending {
  font-family: "Courier New", Courier, monospace;
  padding-bottom: 2%;
  padding-top: 2%;
  text-align: center;
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

.trending-books button:hover {
  cursor: pointer;
  font-weight: bold;
  opacity: 1;
  text-decoration: none;
}

.buy-now:hover {
  cursor: pointer;
  font-weight: bold;
  opacity: 1;
  text-decoration: none;
}
</style>
