<template>
<div class="col-md-3 feature">
  <h3><a href="/books/readings/1"><i class="glyphicons tags"></i>读书</a></h3>
  <p>截止{{today.getFullYear()}}年{{String(today.getMonth()+1).padStart(2,'0')}}月{{String(today.getDate()).padStart(2,'0')}}日，任氏有无轩主人撰写了{{summary}}篇评论。</p>
  <p>最近（{{last.datein}}）评论的书籍是<strong><router-link :to="{name: 'BookDetail', params: {id: book.bookid} }">《{{book.title}}》</router-link></strong>，题为<strong>“<a :href="last.URI">{{last.title}}</a>”</strong>。</p>
</div>  
</template>

<script>
export default {
  name: "ReadingSummary",
  data() {
    return {
      summary: [],
      last: [],
      book: [],
      today: new Date(),
      formatter: new Intl.NumberFormat('en-US', {minimumFractionDigits: 0}),
    };
  },
  created: function() {
    this.getReadingSummary();
  },
  methods: {
    getReadingSummary() {
      var uri='http://api.rsywx.com/reading/summary';
      fetch(uri)
        .then(res => {
          return res.json();
        })
        .then(json => {
          this.summary=json.out.summary;
          this.last=json.out.last;
          this.book=json.out.book;
        })
    }
  }
};
</script>

