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
  }
};
</script>

