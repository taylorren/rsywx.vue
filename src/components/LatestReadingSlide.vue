<template>
<div class="ls-slide" data-ls="transition3d:40;">
    <img class="ls-bg" src="/grove/img/slides/bg-two.jpg" alt="Slider Background">
    <img  class="ls-l" :src="coveruri" alt="神们自己" 
      style="top:50px; left:50px;"
      data-ls=" durationin : 2000; delayin : 0; offsetxin: left;  offsetxout: left;">

    <div class="ls-l large" style="top:50px;left:700px;white-space: nowrap;" data-ls=" durationin : 2000; delayin : 0; offsetxin: right;  offsetxout: right;" >
        最近读的书
    </div>

    <div class="ls-l" 
     style="top:130px; left:700px;"
     data-ls="delayin:750; offsetxin: 0; offsetxout: 0;">
        <div><p class="mid"><router-link class="yellow shadow" :to="{name: 'BookDetail', params: {id: book.bookid} }">{{book.title}}</router-link></p></div>
        <div><p class="mid">书评见：<a :href="review.URI" class="yellow shadow">{{review.title}}</a></p></div>
        <div><p class="small"><em>书评时间：{{review.datein}}</em></p></div>
    </div>
</div>
</template>

<script>
export default {
  name: "LatestReadingSlide",
  data() {
    return {
      book: [],
      review: []
    };
  },
  computed: {
    coveruri: function() {
      return (
        "http://api.rsywx.com/book/cover/" +
        this.book.bookid +
        "/" +
        this.book.title +
        "/" +
        this.book.author +
        "/300"
      );
    }
  },
  created: function() {
    this.getLatestReading();
  },
  methods: {
    getLatestReading() {
      var uri = "http://api.rsywx.com/reading/latestReading";
      fetch(uri)
        .then(res => {
          return res.json();
        })
        .then(json => {
          this.book = json.out.book[0];
          this.review=json.out.review[0];
          //this.book=book;
        });
    }
  }
};
</script>

