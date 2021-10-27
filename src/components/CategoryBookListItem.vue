<template>
  <div>
    <div class="book-box">
      <div class="book-image-and-info">
        <img
          class="book-image"
          :src="require('@/assets/images/books/' + bookImageFileName(book))"
          :alt="book.title"
          style="height: 200px; width: 155px"
        />
        <router-link to="./" v-if="book.isFeatured">
          <div class="read-now-button">Read Now</div>
        </router-link>
        <div class="book-info">
          <div class="book-title">{{ book.title }}</div>
          <div class="book-author">{{ book.author }}</div>
          <div class="book-price">${{ (book.price / 100).toFixed(2) }}</div>
        </div>
      </div>
      <router-link to="./">
        <button @click="addToCart(book)" class="cart-button">Add to Cart</button>
      </router-link>
      <router-link to="./" v-if="book.isPublic">
        <button class="buy-now-button">Buy Now</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "categoryBookListItem",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    bookImageFileName: function (book) {
      let name = book.title.toLowerCase();
      name = name.replace(/ /g, "-");
      return `${name}.jpg`;
    },
    addToCart: function(book) {
      this.$store.dispatch("addToCart", book);
    },
  },
};
</script>
<style scoped>
.book-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
  max-width: 100em;
  padding: 1em;
}

.book-box img {
  align-items: center;
  max-width: 180px;
  max-height: 200px;
}

.book-image-and-info {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.book-title {
  margin: 0 auto;
  width: 100px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.book-author {
  margin: 0 auto;
  font-size: 12px;
  width: 100px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.book-image {
  width: fit-content;
}

.read-now-button {
  background-color: #0008;
  opacity: 0.5;
  color: white;
  transform: translateY(-1.6em);
  margin-bottom: -1.6em;
  text-align: center;
  padding: 0.1em;
}

.read-now-button:hover,
.buy-now-button:hover,
.cart-button:hover {
  cursor: pointer;
  opacity: 1;
  font-weight: bold;
  text-decoration: none;
}

.book-info {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
}

.book-title {
  font-weight: bold;
}

.book-price {
  font-style: italic;
}

.cart-button {
  background-color: dodgerblue;
  color: white;
  padding: auto;
  text-decoration: none;
  border: solid dodgerblue 2px;
  border-radius: 7.5px;
}

.buy-now-button {
  background-color: gold;
  color: black;
  padding: auto;

  border: solid dodgerblue 2px;
  border-radius: 7.5px;
}
</style>
