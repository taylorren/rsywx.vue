<template>
  <div class="widewrapper">
    <div class="container content">
      <div class="row">
        <div class="col-sm-12">
          <div class="showroom-controls">
            <div class="links">历史上的今天</div>
          </div>
          <div class="row cropping">
            <div class="showroom-item blog-item col-sm-12">
              <p>历史上的{{String(today.getMonth()+1).padStart(2,'0')}}月{{String(today.getDate()).padStart(2,'0')}}日，任氏有无轩主人购买和/或登录了{{books.length}}本书。它们是：</p>
              <p>
                <router-link v-for="book in books" :to="{name: 'BookDetail', params: {id: book.bookid} }" :key="book.bookid">{{book.title}}（{{new Date().getFullYear()-new Date(book.purchdate).getFullYear()}}年前）</router-link>&nbsp;&nbsp;
              </p>
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
  name: "Today",
  data() {
    return {
      books: [],
      today: new Date(),
    };
  },
  methods: {
    getToday() {
      var uri="http://api.rsywx.com/book/ofDay";
      fetch(uri)
        .then(res => {
          return res.json();
        })
        .then(json => {
          this.books=json.out;
        });

    },
  },
  created: function() {
    this.getToday();
  }
};
</script>

