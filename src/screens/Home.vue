<template>
  <div>
    <TopNav :active='1'/>
    <Slider/>
    <Intro/>
    <Today/>
    <Blog/>
    <Random/>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav';
import Slider from '@/components/Slider';
import Intro from '@/components/Intro';
import Today from '@/components/Today';
import Blog from '@/components/Blog';
import Random from '@/components/Random';

export default {
  name: "Home",
  components: {
    TopNav,
    Slider,
    Intro,
    Today,
    Blog,
    Random,
  },
  data() {
  },
  metaInfo: {
    title: "任氏有无轩 | 藏书、读书、博客、维客、资源",
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      {name: 'description', content: "任氏有无轩主人精心打造的一个个人站点。"},
      {name: 'keyword', content: "个人站点,藏书,读书,博客,维客,资源"}
    ]
  }  
};
</script>

