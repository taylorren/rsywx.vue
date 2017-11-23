<template>
<div class="widewrapper">
  <div class="container">
    <div class="row features">
      <BookSummary />
      <ReadingSummary />
      <BlogSummary />
      <div class="col-md-3 feature">
        <h3><a href="http://www.rsywx.com"><i class="glyphicons notes_2"></i>维客</a></h3>
          <p>这里是我整理的一些资源，主要是电子书和我最喜爱的<strong><a href="/misc/lakers/2017">湖人队的赛程</a></strong>。</p>
          <p>还可以和我<strong><a href="/contact">取得联系</a></strong>。</p>
      </div>
    </div>
  </div>
</div>    
</template>

<script>
import BookSummary from '@/components/BookSummary';
import ReadingSummary from '@/components/ReadingSummary';
import BlogSummary from '@/components/BlogSummary';

export default {
  name: "Intro",
  components: {
    BookSummary,
    ReadingSummary,
    BlogSummary,
  }
};
</script>

