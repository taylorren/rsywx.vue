<template>
  <p>This is Random section</p>
</template>

<script>
export default {
  name: "Random",
  data: function() {
    return {
      books: [],
    }
  },
  methods: {
    getRandomBooks() {

    }
  },
  created: function() {
    this.getRandomBooks();
  }
};
</script>

