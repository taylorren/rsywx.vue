<template>
<div>
  <TopNav :active="3"/>
  <div class="widewrapper">
    <div class="container content">
      <div class="row">
        <div class="col-md-12">
          <h3>第{{page}}页，共{{Math.ceil(count/5)}}页</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <table class="table">
            <tbody>
              <tr>
                <th class="col-sm-3"><strong>图片</strong></th>
                <th class="col-sm-3"><strong>书名</strong></th>
                <th class="col-sm-2"><strong>作者</strong></th>
                <th class="col-sm-3"><strong>TAG</strong></th>
                <th class="col-sm-1"><strong>位置</strong></th>
              </tr>
              <template v-for="headline in headlines">
                <tr :key="headline.bid">
                  <td rowspan="2"><img :src="headline.book.cover" :alt="headline.book.title + ' '+headline.book.author" :title="headline.book.title + ' '+headline.book.author"/></td>
                  <td><router-link :to="{name: 'BookDetail', params: {id: headline.book.bookid} }">{{headline.book.title}}</router-link></td>
                  <td>{{headline.book.author}}</td>
                  <td><Tags :bookid="headline.book.bookid"/></td>
                </tr>
                <ReviewList :bookid="headline.book.bookid" :key="headline.hid"/>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <ReadingPaginator :page="page" :pages="pages"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import TopNav from "@/components/TopNav";
import ReviewList from "@/components/ReviewList";
import Tags from "@/components/Tags";
import ReadingPaginator from "@/components/ReadingPaginator";

export default {
  name: "BookList",
  components: {
    TopNav,
    ReviewList,
    Tags,
    ReadingPaginator,
  },
  data: function() {
    return {
      headlines: [],
      count: 0,
      pages: -1,
    };
  },
  props: [
    "page"
  ],
  created: function() {
    var uri = "http://api.rsywx.com/reading/listHeadline/" + this.page;
    
    fetch(uri)
      .then(res => {
        return res.json();
      })
      .then(json => {
        var headlines= json.out[0];
        this.count = json.out[1];
        this.pages=Math.ceil(this.count/5);

        for(var h in headlines) {
          
          var book=headlines[h].book;
          headlines[h].book.cover="http://api.rsywx.com/book/cover/"+book.bookid+"/"+book.title+"/"+book.author+"/200";
        }

        this.headlines=headlines;
      });
  }
};
</script>

