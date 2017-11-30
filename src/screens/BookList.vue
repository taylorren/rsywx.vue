<template>
  <div>
    <TopNav :active='2'/>
    <div class="widewrapper">
        <div class="container content">
            <div class="row">
                <section id="searchform" class="col-md-6">
                    <form action="/books/search" method="post" accept-charset="utf-8" class="form-inline">
                        <div class="row">
                            <div class="col-sm-6 form-group">
                                <input class="form-control input-sm" type="text" id="key" name="key" placeholder="all">
                                <button type="submit" class="btn btn-grove-one btn-sm btn-bold">搜索</button>
                            </div>
                        </div>
                    </form>
                </section>
                <section id="gotoform" class="col-md-6">
                    <form action="/books/gotopage" method="post" accept-charset="utf-8" class="clearfix">
                        <div class="row">
                            <div class="col-sm-6 form-group">
                                <input class="form-control input-sm" type="text" id="page" name="page" placeholder="直接去第几页">
                                <input type="hidden" name="current" id="current" value="1"/>
                                <button type="submit" class="btn btn-grove-one btn-sm btn-bold">直接去</button>
                            </div>
                        </div>
                    </form>
                </section>               
            </div>
            <div class="row">
                <section id="data" class="col-md-12">
                    <table class="table table-striped table-hover">
                        <tbody>
                            <tr>
                                <th><strong>编号</strong></th>
                                <th><strong>书名</strong></th>
                                <th><strong>作者</strong></th>
                                <th><strong>购买/整理日期</strong></th>
                                <th><strong>位置</strong></th>
                            </tr>
                            <tr v-for="book in books" :key="book.id">
                                <td><router-link :to="{name: 'BookDetail', params: {id: book.bookid} }">{{book.bookid}}</router-link></td>
                                <td><router-link :to="{name: 'BookDetail', params: {id: book.bookid} }">{{book.title}}</router-link></td>
                                <td>【{{book.region}}】{{book.author}}</td>
                                <td>{{book.purchdate}}</td>
                                <td>{{book.location}}</td>
                            </tr>
                                                                                                                                                                                                          </tbody>
                    </table>

                </section>

                <Paginator :search="search" :keyword="keyword" :page="page" :pages="pages"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav';
import Paginator from '@/components/Paginator';

export default {
  name: "BookList",
  data: function() {
    return {
      pages: -1,
      books: [],
    }

  },
  components: {
    TopNav,
    Paginator,
  },
  props: [
    'search',
    'keyword',
    'page',

  ],
  created: function() {
    this.getBooks(this.search, this.keyword, this.page);
    console.log(this.page);

  },
  methods: {
    getBooks(search, keyword, page) {
      var uri="http://api.rsywx.com/books/list/"+search+"/"+keyword+"/"+page;
      
      fetch(uri)
        .then(res => {
          return res.json();
        })
        .then(json => {
          var out=json.out;
          this.pages=Math.ceil(parseInt(out.count.bc)/20);
          this.books=out.books;
        })
    }
  },
};
</script>

