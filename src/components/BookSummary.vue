<template>
<div class="col-md-3 feature">
  <h3><a href="/books/list/title/all/1"><i class="glyphicons book"></i>藏书</a></h3>
  <p>截止{{today.getFullYear()}}年{{String(today.getMonth()+1).padStart(2,'0')}}月{{String(today.getDate()).padStart(2,'0')}}日，任氏有无轩藏书{{formatter.format(summary.bc)}}本。约{{formatter.format(summary.wc)}}千字，计{{formatter.format(summary.pc)}}页。</p>
  <p>
      最近（{{last.purchdate}}）收藏/整理的书籍是<strong>{{last.author}}</strong>的<strong><router-link :to="{name: 'BookDetail', params: {id: last.bookid} }">《{{last.title}}》</router-link></strong>
  </p>
</div>  
</template>

<script>
export default {
  name: "BookSummary",
  data() {
    return {
      summary: [],
      last: [],
      today: new Date(),
      formatter: new Intl.NumberFormat('en-US', {minimumFractionDigits: 0}),
    };
  },
  created: function() {
    this.getBookSummary();
  },
  methods: {
    getBookSummary() {
      var uri='http://api.rsywx.com/book/summary';
      fetch(uri)
        .then(res => {
          return res.json();
        })
        .then(json => {
          this.summary=json.out.summary[0];
          this.last=json.out.last[0];
        })
    }
  }
};
</script>

