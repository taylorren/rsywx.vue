<template>
  <div>
    <TopNav :active='2'/>
    <p>This is BookList page</p>
  </div>
</template>

<script>
import TopNav from '@/components/TopNav';

export default {
  name: "BookList",
  components: {
    TopNav,
  }
};
</script>

