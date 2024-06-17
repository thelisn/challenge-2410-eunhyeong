<template>
    <li class="article">
        <dl>
            <dt>
                <router-link :to="'post/'+post.id" class="article_title">{{ post.title }}</router-link>
                <div class="article_date">{{ post.date | yyyyMMdd }}</div>
            </dt>
            <dd>
                <div class="article_body">{{ post.content }}</div>
            </dd>
        </dl>
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

<style>

</style>