<template>
  <div>
    <TopNav :active='2'/>
    <div class="widewrapper">
        <div class="container content">
            <div class="row">
                <div class="col-sm-6">
                    <img :src="book.cover" :alt="book.title+' '+book.author" :title="book.title+' '+book.author"/>
                </div>

                <div class="col-sm-6">
                    <h1>{{book.title}}</h1>
                    <p><strong>ISBN：</strong>{{book.isbn}}<br/>
                        <strong>作者：</strong>{{book.author}}（{{book.region}}）<span v-if="book.translated=='1'">| 译者：{{book.copyrighter}}</span><br/>
                        <strong>价格：</strong>RMB {{book.price}}<br/>
                        <strong>购于：</strong>{{book.purchdate}}，{{book.plname}}<br/>
                    </p>
                    <div class="feature">
                        <div class="icon">
                            <i class="glyphicons tags"></i>
                        </div>
                        <div class="text">
                            <h3>TAG</h3>
                            <small><router-link :to="{name: 'BookList', params: {type: 'tag', key: tag.tag, page:'1'} }" v-for="tag in tags" :key="tag">{{tag.tag}}&nbsp;</router-link>
</small>
                            <a class="btn btn-info btn-sm" data-toggle="modal" href="#addtag" >增加更多TAG »</a><br/>
                        </div>
                    </div>
                    <div class="feature">
                        <div class="icon">
                            <i class="glyphicons tags"></i>
                        </div>
                        <div class="text">
                            <h3>豆瓣TAG</h3>
                            <small>卡尔维诺
隐形的城市
意大利文学
意大利
小说
外国文学
看不见的城市
经典
</small>
                        </div>
                    </div>
                    <div class="feature">
                        <div class="icon">
                            <i class="glyphicons star"></i>
                        </div>
                        <div class="text">
                            <h3>豆瓣评分</h3>
                            <small>9.0</small>
                        </div>
                    </div>
                    <div class="feature">
                        <div class="icon">
                            <i class="glyphicons screenshot"></i>
                        </div>
                        <div class="text">
                            <h3>浏览次数</h3>
                            <small><strong>{{vc}}</strong>（上次访问时间是{{lv}}）</small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 col-md-offset-1">
                    <h3>简介：</h3>
                    <p>{{book.intro}}</p>                    
                    <h3>任氏有无轩主人评论：</h3>
                    <table class="table table-hover table-striped">
    </table>

                    <h3>豆瓣简介：</h3>
                    <p>（豆瓣还没有简介）</p>
                    <p>更多信息参见：<a href="https://book.douban.com/subject/2969648/">豆瓣链接</a>。</p>
                    <h3>更多书籍信息</h3>


                    <table class="table table-hover table-striped">

                        <tbody>
                            <tr>
                                <td>出版社：</td>
                                <td>{{book.pname}}</td>
                            </tr>
                            <tr>
                                <td>出版日期：</td>
                                <td>{{book.pubdate}}</td>
                            </tr>
                            <tr>
                                <td>印刷日期：</td>
                                <td>{{book.printdate}}</td>
                            </tr>
                            <tr>
                                <td>版次：</td>
                                <td>{{book.ver}}</td>
                            </tr>
                            <tr>
                                <td>装帧：</td>
                                <td>{{book.deco}}</td>
                            </tr>
                            <tr>
                                <td>千字数：</td>
                                <td>{{book.kword}}</td>
                            </tr>
                            <tr>
                                <td>页数：</td>
                                <td>{{book.page}}</td>
                            </tr>
                            <tr>
                                <td>分类号：</td>
                                <td>{{book.category}}</td>
                            </tr>
                            <tr>
                                <td>藏书位置：</td>
                                <td>{{book.location}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    </div>  
    <!-- The modal dialog to add more tags -->
    <div>
        <div class="modal fade" id="addtag">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">增加自己的TAG</h4>
                    </div>
                    <div class="modal-body">
                        <form method="post" action="http://api.rsywx.com/book/addtags"  id='tagform' name='tagform'>
                            <div class="row">
                                <div class="col-sm-4 form-group">
                                    <label class="control-label" for="newtags">新增TAG</label>
                                    <input type="text" class="input-xlarge" id="newtags" name="newtags" />
                                    <p class="help-block">（用空格分隔）</p>
                                    <input type="hidden" :value="book.id" id="id" name="id"/>
                                    <input type="hidden" :value="book.bookid" id="bookid" name="bookid" />

                                </div>
                            </div>
                            <div class="modal-footer">
                                <a href="#" class="btn" data-dismiss="modal">取消</a>
                                <button type="submit" class="btn btn-primary">保存</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Example row of columns -->
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav';

export default {
  name: "BookDetail",
  components: {
    TopNav,
  },
  data: function() {
    return {
      book: [],
      isbn: '',
      tags: [],
      vc: 0,
      lv: "",
    }
  },
  methods: {
    getBookDetail(id) {
      var uri='http://api.rsywx.com/book/bookByBookId/'+id;
      fetch(uri)
        .then(res => {
          return res.json();
        })
        .then(json => {
          var book=json.out[0];
          book.cover="http://api.rsywx.com/book/cover/"+book.bookid+"/"+book.title+"/"+book.author+"/300";
          this.isbn=json.out[0].isbn;
          this.book=book;
        });
    },
    getTags(id) {
        var uri='http://api.rsywx.com/book/tagsByBookId/'+id;
        console.log(uri);
        fetch(uri)
            .then(res => {
                return res.json();
            })
            .then(json => {
                this.tags=json.out;
            }); 
    },
    getVisitInfo(id) {
        var uri1="http://api.rsywx.com/book/visitCount/" + id+', 1';
        
        fetch(uri1)
            .then(res => {
                return res.json();
            })
            .then(json => {
                this.vc=json.out;
            })

        var uri2="http://api.rsywx.com/book/lastVisit/" + id;
        fetch(uri2)
            .then(res => {
                return res.json();
            })
            .then(json =>{
                this.lv=json.out;
            })
        console.log(this.visit);
    }
  },
  created: function() {
    this.book=this.getBookDetail(this.id);
    this.tags=this.getTags(this.id);
    this.visit=this.getVisitInfo(this.id);
    console.log(this.tags);

  },
  props: [
    'id',
  ]

  
};
</script>

