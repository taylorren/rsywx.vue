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
                <a :href ="blog.uri">
                <img :src="blog.img"  class="img-responsive" :alt="blog.post_title" :title="blog.post_title">
                </a>
              </div>
              <div class="content">
                <h3>
                  <a :href ="blog.uri">
                      {{blog.post_title}}</a>
                </h3>
                <span class="meta">发表日期：{{blog.post_date}}</span>
                <span class="preview">{{blog.text}}...
                </span>
                <a class="more" :href="blog.uri">浏览全文&nbsp;&nbsp;<span class="red">&raquo;</span></a>
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
          blogs=blogs.slice(1,4);
          
          for(var i in blogs) {
            var blog=blogs[i];
            var pd=new Date(blog.post_date);
            var pdy=pd.getFullYear();
            var pdm=String(pd.getMonth()+1).padStart(2,'0');
            var pdd=String(pd.getDate()).padStart(2,'0');
            blog.uri="https://rsywx.net/wordpress/" + pdy + "/" + pdm + "/" + pdd + "/" + blog.post_name;
            blog.img=this.getImg(blog);
            blog.text=this.getText(blog);
          }
          this.blogs=blogs;
        })
    },
    getImg(blog) {
      var html=blog.post_content;
      var pattern=/<img.+src=['"]([^'"]+)['"].*>/i;
      var res=html.match(pattern);
      var img=res[1];
      return img;
    },
    getText(blog) {
      var div=document.createElement("div");
      div.innerHTML=blog.post_content;
      var text=div.textContent||div.innerText||"";
      return text.substring(0,100);
    }
  },
  created: function() {
    this.getBlog();
  },
};
</script>

