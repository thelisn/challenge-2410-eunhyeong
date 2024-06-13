<template>

    <li class="article">
        <dl>
            <dt>
                <div class="article_title">{{ article.title }}</div>
                <div class="article_date">{{ article.date }}</div>
            </dt>
            <dd>
                <div class="article_body">{{ article.content }}</div>
            </dd>
        </dl>
    </li>


</template>

<script>
export default {
    data() {
        return {
            title: '',
            date: '',
            content: '',
        }
    },
    computed: {
        article() {
            return this.$store.state.articles.article;
        }
    },
}
</script>

<style>
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