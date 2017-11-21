<template>
  <header>
        <nav class="navbar navbar-default grove-navbar" role="navigation">
            <div class="container">
                <div class="navbar-header">
                    <a href="#" class="grove-toggle" data-toggle="collapse" data-target=".grove-nav">   <i class="glyphicons show_lines"></i>  </a>
                    <a href="/" class="navbar-brand"><img src="/img/logo.png" alt="Grove"></a>
                </div>

                <div class="collapse navbar-collapse grove-nav">
                    <ul class="nav navbar-nav">
                        <li v-bind:class="{ active: active==1 }"> 
                            <a href="/">首页</a>
                        </li>                          
                        <li v-bind:class="{ active: active==2 }">
                            <router-link :to="{name: 'BookList', params: {type: 'title', 'key':'all', 'page': 1}}">藏书</router-link>
                        </li>
                        <li v-bind:class="{ active: active==3 }">
                            <router-link :to="{name: 'ReadingList', params: {'page': 1}}">读书</router-link>
                        </li>
                        <li>
                            <a href="https://rsywx.net/wordpress">博客</a>
                        </li>
                        <li class="dropdown">
                            <a href="#" data-toggle="dropdown">维客 <b class="caret"></b></a>
                            <ul class="dropdown-menu">
                                <li><a href="http://www.rsywx.com">维客首页</a></li>
                                <li><a href="http://www.rsywx.com/911:911">911调查委员会报告</a></li>
                                <li><a href="http://www.rsywx.com/gcti:gcti">上帝创造了整数</a></li>
                                <li><a href="http://www.rsywx.com/wesley:wesley">卫斯理全集</a></li>
                                <li><a href="http://www.rsywx.com/name:name">这本书叫什么</a></li>
                                <li><a href="http://www.rsywx.com/react:react">React教程和实战</a></li>
                                <li><a href="http://www.rsywx.com/tract:tract">特拉赫腾贝格速算</a></li>
                                <li><a href="https://rsywx.net/misc/lakers/2017">湖人赛程和战报</a></li>      
                            </ul>
                        </li>
                        <li v-bind:class="{ active: active==99 }">
                            <router-link :to="{name: 'Contact'}">联络我</router-link>
                        </li>
                    </ul>        
                </div><!-- /.navbar-collapse -->
            </div>
        </nav>
    </header>

</template>

<script>
export default {
  name: "TopNav",
  props: [
      'active',
  ]

  
};
</script>

