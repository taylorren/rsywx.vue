<template>
<tr>
                  <td colspan="4">
                    <table class="table table-hover table-striped">
                      <tr>
                        <th class="col-md-1"><strong>评论编号</strong></th>
                        <th class="col-md-9"><strong>评论标题</strong></th>
                        <th class="col-md-2 "><strong>评论日期</strong></th>
                      </tr>
                      <tr v-for="review in reviews" :key="review.id">
                        <td>{{review.id}}</td>
                        <td><a :href="review.URI">{{review.title}}</a></td>
                        <td>{{review.datein}}</td>
                      </tr>
                      
                    </table>
                  </td>
                </tr>
</template>

<script>
export default {
    name: "ReadingList",
    props: [
        'bookid',
    ],
    data: function() {
      return {
        reviews: [],
      }
    },
    methods: {
      getReviews(id) {
        var uri="http://api.rsywx.com/reading/relatedReview/" + id;
        fetch(uri)
            .then(res => {
                return res.json();
            })
            .then(json => {
                this.reviews=json.out;
            })
      }
    },
    created: function() {
      this.getReviews(this.bookid);
    }
}
</script>