<template>
  <div class="ls-slide" data-ls="transition3d:5;">
    <img class="ls-bg" src="/img/slides/bg-one.jpg" alt="Slider Background"/>
    <img  class="ls-l" :src="book.coveruri" :alt="book.title" :title="book.title"
                      style="top:15px; left:650px;"
                      data-ls=" durationin : 2000; delayin : 0; offsetxin: right;  offsetxout: right; easingin: easeInBounce; easingout: easeOutBack "/>
    <div class="ls-l large" style="top:50px;left:80px;white-space: nowrap;" data-ls="offsetxin:0;durationin:3000;delayin:2000;easingin:easeOutElastic;rotatexin:90;transformoriginin:50% bottom 0;offsetxout:0;rotatexout:90;transformoriginout:50% bottom 0;" >
    最近收藏的书
    </div>
    <div class="ls-l" 
                     style="top:150px; left:80px;"
                     data-ls="delayin: 750; offsetxin: 0; offsetxout: 0;">
                    <div><p class="mid"><router-link class="yellow shadow" :to="{name: 'BookDetail', params: {id: book.bookid} }">{{book.title}}</router-link></p></div>
                    <div><p class="s18">{{book.author}}</p></div>
                    <div><p class="s18">{{book.p_name}}</p></div>
                    <div><p class="small"><em>收录时间：{{book.purchdate}}</em></p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestBookSlide",
  data() {
      return {
          book: [],
      };
  },
  /*computed: {
      coveruri: function() {
          return 'http://api.rsywx.com/book/cover/'+this.book.bookid+'/'+this.book.title+'/'+this.book.author+'/300';
      }

  },*/
  created: function() {
    this.getLatestBook();
  },
  methods: {
      getLatestBook() {
        var uri='http://api.rsywx.com/book/latestBook';
        var bookid,title, author;

        fetch(uri)
            .then(res =>{
                return res.json();
            })
            .then(json => {
                var book;
                book=json.out[0];
                

                bookid=book.bookid;
                title=book.title;
                author=book.author;

                var coveruri='http://api.rsywx.com/book/cover/'+bookid+'/'+title+'/'+author+'/300';
                book.coveruri=coveruri;

                this.book=book;
               
            })
        console.log(this.book);
      }
  }
};
</script>

