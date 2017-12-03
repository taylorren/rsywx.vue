<template>
<span><router-link :to="{name: 'BookList', params: {search: 'tag', keyword: tag.tag, page:'1'} }" v-for="tag in tags" :key="tag.tag">{{tag.tag}}&nbsp;&nbsp;</router-link>
</span>
</template>

<script>
export default {
    name: 'Tags',
    props: [
        'bookid',
    ],
    data: function() {
        return {
            tags: [],
        }
    },
    methods: {
        getTags(bookid) {
            var uri='http://api.rsywx.com/book/tagsByBookId/'+bookid;
            fetch(uri)
                .then(res => {
                    return res.json();
                })
                .then(json => {
                    this.tags=json.out;
                }); 
        }
    },
    created: function() {
        this.getTags(this.bookid);
    }
}
</script>