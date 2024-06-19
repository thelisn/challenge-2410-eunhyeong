<template>
    <li class="article">
        <ul>
            <li class="title_wrap">
                <router-link :to="'post/'+post.id" class="article_title">{{ post.title }}</router-link>
                <div class="article_date">{{ post.date | yyyyMMdd }}</div>
            </li>
            <li>
                <div class="article_body">{{ post.content }}</div>
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
	    yyyyMMdd : function(value){ 
            if(value == '') return '';

            var js_date = new Date(value);

            var year = js_date.getFullYear();
            var month = js_date.getMonth() + 1;
            var day = js_date.getDate();

            if(month < 10){
                month = '0' + month;
            }

            if(day < 10){
                day = '0' + day;
            }

            return year + '-' + month + '-' + day;
	    }
    }
}
</script>

<style scoped>
    #feed .article .title_wrap {
        display: grid;
        grid-template-columns: 2fr auto;
        gap: 16px;
    }
    #feed .article .article_title {    
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        display: -webkit-box;
    }
    #feed .article .article_date {
        display: flex;
        align-items: center;
    }
</style>