<template>
  <div class="book-boxes">
    <category-book-list-item
      v-for="book in books"
      :key="book.bookId"
      :book="book"
    >
    </category-book-list-item>
  </div>
</template>

<script>
import CategoryBookListItem from "./CategoryBookListItem";

export default {
  name: "CategoryBookList",
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  components: {
    CategoryBookListItem,
  },
};
</script>

<style scoped>
.book-boxes {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
  max-width: 100em;
  padding: 1em;
  flex-wrap: wrap;
}
</style>
