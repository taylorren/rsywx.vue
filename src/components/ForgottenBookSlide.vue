<template>
<div class="ls-slide" data-ls="transition3d:59;">
  <img class="ls-bg" src="/img/slides/bg-four.jpg" alt="Slider Background"/>
  <img  class="ls-l" :src="book.coveruri" :alt="book.title" :title="book.title"
      style="top:25px; left:50px;"
      data-ls="durationin: 2500; offsetxin: left; offsetxout: left;"/>

  <div class="ls-l" 
     style="top:50px; left:550px;"
     data-ls="durationin : 2000; delayin : 0; offsetxin: right;  offsetxout: right;">
    <div><p class="large">好久没访问的书</p></div>
    
  </div>
  <div class="ls-l" 
     style="top:120px; left:550px;"
     data-ls="delayin: 750; offsetxin: 0; offsetxout: 0;">
    <div><p class="mid"><router-link class="yellow shadow" :to="{name: 'BookDetail', params: {id: book.bookid} }">{{book.title}}</router-link></p></div>
    <div><p class="s18">上次访问时间：{{book.mrv}}</p></div>
    <div><p class="s18">总访问量：{{book.bvc}}</p></div>
  </div>
</div>
</template>

<script>
export default {
  name: "ForgottenBookSlide",
  data() {
    return {
      book: [],
    };
  },
  /*computed: {
    coveruri: function() {
      return ("http://api.rsywx.com/book/cover/"+this.book.bookid+"/"+this.book.title+"/"+this.book.author+"/300");
    }
  },*/
  created: function() {
    this.getForgottenBook();
  },
  methods: {
    getForgottenBook() {
      var uri = "http://api.rsywx.com/book/forgotten";
      fetch(uri)
        .then(res => {
          return res.json();
        })
        .then(json => {
          var book=json.out[0];
          var coveruri='http://api.rsywx.com/book/cover/'+book.bookid+'/'+book.title+'/'+book.author+'/300';
          book.coveruri=coveruri;

          this.book=book;
        });
    }
  }
};
</script>

