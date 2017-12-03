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
                  <td><a href="/books/list/tag/%E9%87%91%E8%9E%8D">金融</a> <a href="/books/list/tag/%E5%8D%8E%E5%B0%94%E8%A1%97">华尔街</a><a href="/books/list/tag/%E5%86%85%E5%B9%95">内幕</a></td>
                  <td>{{headline.book.location}}</td>
                </tr>
                <tr :key="headline.bid">
                  <td colspan="4">
                    <table class="table table-striped table-hover">
                      <tr>
                        <th class="col-md-1"><strong>评论编号</strong></th>
                        <th class="col-md-9"><strong>评论标题</strong></th>
                        <th class="col-md-2 "><strong>评论日期</strong></th>
                      </tr>
                      <tr>
                        <td>121</td>
                        <td><a href="https://rsywx.net/wordpress/2016/08/26/unbearable-defects-folding-beijing/">《北京折叠》的硬伤到底在哪里？</a></td>
                        <td>2016/08/26</td>
                      </tr>
                      <tr>
                        <td>109</td>
                        <td><a href="https://rsywx.net/wordpress/2017/05/04/entanglement-in-dune/">《沙丘》中的意念缠绕</a></td>
                        <td>2017/05/04</td>
                      </tr>
                      <tr>
                        <td>122</td>
                        <td><a href="https://rsywx.net/wordpress/2017/11/05/dune-messiah/">沙丘救世主</a></td>
                        <td>2017/11/05</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <section id="pagination" class="col-md-12">
          <a href="/books/readings" title="首页"><i class="glyphicons fast_backward"></i></a>
          <a class="disabled" title="上一页"><i class="glyphicons rewind"></i></a>
          <a href="/books/readings/2" title="下一页"><i class="glyphicons forward"></i></a>
          <a href="/books/readings/20" title="末页"><i class="glyphicons fast_forward"></i></a>
        </section>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import TopNav from "@/components/TopNav";

export default {
  name: "BookList",
  components: {
    TopNav,
  },
  data: function() {
    return {
      headlines: [],
      count: 0
    };
  },
  props: [
    "page"
  ],
  created: function() {
    var uri = "http://api.rsywx.com/reading/listHeadline/" + this.page;
    console.log(uri);
    fetch(uri)
      .then(res => {
        return res.json();
      })
      .then(json => {
        var headlines= json.out[0];
        this.count = json.out[1];

        for(var h in headlines) {
          
          var book=headlines[h].book;
          headlines[h].book.cover="http://api.rsywx.com/book/cover/"+book.bookid+"/"+book.title+"/"+book.author+"/200";
        }

        this.headlines=headlines;
      });
  }
};
</script>

