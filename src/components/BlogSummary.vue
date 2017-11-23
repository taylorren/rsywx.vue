<template>
<div class="col-md-3 feature">
          <h3><a href="http://www.rsywx.net/wordpress"><i class="glyphicons pen"></i>博客</a></h3>
          <p>本博客自2003年开始设立。写的少不是因为我不思考。我思考的越多，写下来的就越少。</p>
          <p>最近的文章发布于{{pubdate}}，题为“<strong><a :href="link">{{this.blog.post_title}}</a></strong>”。 </p>
      </div>
</template>

<script>
export default {
  name: "BlogSummary",
  data() {
    return {
      blog: [],
      pubdate: '',
      link: '',
      
    };
  },
  created: function() {
    this.getBlogSummary();
  },
  methods: {
    getBlogSummary() {
      var uri='http://api.rsywx.com/wordpress/recentPosts/1';
      fetch(uri)
        .then(res => {
          return res.json();
        })
        .then(json => {
          var blog=json.out[0];
          this.blog=blog;

          var tmp=new Date(blog.post_date);
          var y,m,d;
          y=tmp.getFullYear();
          m=String(tmp.getMonth()+1).padStart(2,'0');
          d=String(tmp.getDate()).padStart(2,'0');
          var date_in=y+'年'+m+'月'+d+'日';
          this.link="https://rsywx.net/wordpress/"+y+"/"+m+"/"+d+"/"+this.blog.post_name;

          this.pubdate=date_in;
        })
    }
  }
};
</script>

