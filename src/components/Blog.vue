<template>
  <div class="widewrapper">
    <div class="container content">
      <div class="row">
        <div class="col-sm-12">
          <div class="showroom-controls">
            <div class="links">最近的博客文章</div>
          </div>
          <div class="row">
            <div class="showroom-item blog-item col-sm-4" v-for="blog in blogs" :key="blog.post_title">
              <div class="image">
                <a href ="https://rsywx.net/wordpress/2017/10/31/kazuo-question-and-how-to-better-understand-buried-giants">
                <img src="https://rsywx.net/wordpress/wp-content/uploads/2017/11/Roberteddison_thumb.jpg"  class="img-responsive" alt="来自KI的拷问以及如何更好地评价《被掩埋的巨人》" title="来自KI的拷问以及如何更好地评价《被掩埋的巨人》">
                </a>
              </div>
              <div class="content">
                <h3>
                  <a href ="https://rsywx.net/wordpress/2017/10/31/kazuo-question-and-how-to-better-understand-buried-giants">
                      来自KI的拷问以及如何更好地评价《被掩埋的巨人》</a>
                </h3>
                <span class="meta">发表日期：2017年10月31日</span>
                <span class="preview">这本《被掩埋的巨人》是我买了KPW3之后，在KPW3上完成的第一本书，所以特别要备注一下。这本书在豆瓣评分将将7.9，还没有到8分……确实有点偏低了。我看了一下，写下评论的读者都给出4-5星的评价，那么给出3星及以下的读者没有给出评论，所以...
                </span>
                <a class="more" href="https://rsywx.net/wordpress/2017/10/31/kazuo-question-and-how-to-better-understand-buried-giants">浏览全文&nbsp;&nbsp;<span class="red">&raquo;</span></a>
              </div>
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
  name: "Blog",
  data() {
    return {
      blogs: [],
    }
  },
  methods: {
    getBlog(){
      var uri="http://api.rsywx.com/wordpress/recentPosts/4";
      fetch(uri)
        .then(res => {
          return res.json();
        })
        .then(json => {
          var blogs=json.out;
          this.blogs=blogs.slice(1,4);
        })

    }
  },
  created: function() {
    this.getBlog();
  },
};
</script>

