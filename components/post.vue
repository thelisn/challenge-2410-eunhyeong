<template>
    <li class="article">
        <ul>
            <li class="title-wrap">
                <router-link v-bind:to="'post/'+post.id" class="article-title">{{ post.title }}</router-link>
                <div class="article-date">{{ post.date | yyyyMMdd }}</div>
            </li>
            <li>
                <div class="article-body">{{ post.content }}</div>
            </li>
        </ul>
        <ul class="pager">
            <li>
                <router-link :to="`/post/${post.id-1}`">이전 글</router-link>
            </li>
            <li>
                <router-link :to="`/post/${post.id+1}`">다음 글</router-link>
            </li>
        </ul>
    </li>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        }
    },
    filters : {  
	    yyyyMMdd : function(value) { 
            if (value === '') return '';

            var js_date = new Date(value);

            var year = js_date.getFullYear();
            var month = js_date.getMonth() + 1;
            var day = js_date.getDate();

            if (month < 10) {
                month = '0' + month;
            }

            if (day < 10) {
                day = '0' + day;
            }

            return year + '-' + month + '-' + day;
	    }
    },
}
</script>

<style scoped lang="scss">
    @import '@/assets/scss/templates/posts.scss';
</style>