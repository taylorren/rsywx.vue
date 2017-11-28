<template>
<p>This is a paginator: {{search}}/{{keyword}}/{{page}}, total: {{pages}}</p>
</template>

<script>
export default {
  name: "Paginator",
  props: [
      'search',
      'keyword',
      'page',
      'pages'
  ]


};
</script>

