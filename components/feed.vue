<template>
    <div id="feed">
        <div class="inner">
            <ul>
                <li class="article"
                    v-for="p in mainPosts"
                    :key="p.id">
                    {{ p.number }}
                    <dl>
                        <dt>
                            <router-link :to="'article/'+p.id" class="article_title">{{ p.title }}</router-link>
                            <div class="article_date">{{ p.date | yyyyMMdd }}</div>
                        </dt>
                        <dd>
                            <div class="article_body">{{ p.content }}</div>
                        </dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        mainPosts() {
            return this.$store.state.articles.mainPosts;
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
#feed {
    margin: 8vh 0;
}
#feed ul li:not(:first-child) {
    margin-top: 32px;
}
#feed dt {
    display: grid;
    grid-template-columns: 2fr auto;
    gap: 16px;
}
#feed .article_title {    
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
    font-size: 24px;
    font-weight: bold;
}
#feed .article_date {
    text-align: right;
    display: flex;
    align-items: center;
}
#feed .article_body {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
    margin-top: 8px;
}
</style>