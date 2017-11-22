<template>
<div class="ls-slide" data-ls="transition3d:23;">
  <img class="ls-bg" src="/img/slides/bg-three.jpg" alt="Slider Background">
  <img  class="ls-l" :src="coveruri" :alt="book.title" :title="book.title"
      style="top:50px; left:650px;"
      data-ls=" durationin : 2000; delayin : 0; offsetxin: right;  offsetxout: right; easingin: easeInBounce; easingout: easeOutBack"/>
  <div class="ls-l large" style="top:50px;left:80px;white-space: nowrap;" data-ls="offsetxin:0;durationin:3000;delayin:2000;easingin:easeOutElastic;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;rotatexout:90;transformoriginout:50% bottom 0;" >
    随便挑的书
  </div>

  <div class="ls-l" 
     style="top:130px; left:80px;"
     data-ls="delayin:750; offsetxin: 0; offsetxout: 0;">
    <div><p class="mid"><router-link class="yellow shadow" :to="{name: 'BookDetail', params: {id: book.bookid} }">{{book.title}}</router-link></p></div>
    <div><p class="mid">{{book.author}}</p></div>
    <div><p class="mid">收录时间：{{book.purchdate}}</p></div>
  </div>
</div>

</template>

<script>
export default {
  name: "RandomBookSlide",
  data() {
    return {
      book: [],
    };
  },
  computed: {
    coveruri: function() {
      return ("http://api.rsywx.com/book/cover/"+this.book.bookid+"/"+this.book.title+"/"+this.book.author+"/300");
    }
  },
  created: function() {
    this.getRandomBook();
  },
  methods: {
    getRandomBook() {
      var uri = "http://api.rsywx.com/book/randomBook/1";
      fetch(uri)
        .then(res => {
          return res.json();
        })
        .then(json => {
          this.book = json.out[0];
          
          //this.book=book;
        });
    }
  }
};
</script>

