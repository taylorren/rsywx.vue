<template>
<section id="pagination" class="col-md-12">
  <a :href="firstpage" title="首页"><i class="glyphicons fast_backward"></i></a>
  <a v-if="page==='1'" class="disabled" title="上一页"><i class="glyphicons rewind"></i></a>
  <a v-else :href="prev" title="上一页"><i class="glyphicons rewind"></i></a>
  <a v-if="parseInt(page)===parseInt(pages)" class="disabled" title="下一页"><i class="glyphicons forward"></i></a>
  <a v-else :href="next" title ="下一页"><i class="glyphicons forward"></i></a>
  <a :href="lastpage" title="末页"><i class="glyphicons fast_forward"></i></a>
</section>
</template>

<script>
export default {
  name: "ReadingPaginator",
  props: [
      'page',
      'pages'
  ],
  computed: {
    lastpage: function() {
      return "/books/readings/"+this.pages;
    },
    firstpage: function(){
      return "/books/readings/1";
    }, 
    prev: function() {
      var p=parseInt(this.page)-1;
      
      return "/books/readings/"+p;
    },
    next: function() {
      var p=parseInt(this.page)+1;
      return "/books/readings/"+p;
    }
  }


};
</script>

