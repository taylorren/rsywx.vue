<template>
  <div>
    <TopNav :active='2'/>
    <p>This is Book Detail page</p>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav';

export default {
  name: "BookDetail",
  components: {
    TopNav,
  }
};
</script>

