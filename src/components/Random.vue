<template>
  <div class="widewrapper">
    <div class="container content">
      <div class="row">
        <div class="col-sm-12">
          <div class="showroom-controls">
            <div class="links">随机推荐的书籍
            </div>
          </div>
          <div class="row cropping">
            <div class="showroom-item blog-item col-sm-4" v-for="book in books" :key="book.bookid">
              <router-link :to="{name: 'BookDetail', params: {id: book.bookid} }">
                <img :src="book.cover" :alt="book.title" :title="book.title" class="cropped">    
              </router-link>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Random",
  data: function() {
    return {
      books: []
    };
  },
  methods: {
    getRandomBooks() {
      var uri='http://api.rsywx.com/book/randomBook/3';
      fetch(uri)
        .then(res => {
          return res.json();
        })
        .then(json => {
          var books=json.out;
          for(var i in books) {
            var book=books[i];
            book.cover="http://api.rsywx.com/book/cover/"+book.bookid+"/"+book.title+"/"+book.author+"/300";
          }

          this.books=books;
        })
    }
  },
  created: function() {
    this.getRandomBooks();
  }
};
</script>

