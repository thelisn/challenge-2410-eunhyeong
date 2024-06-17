<template>
    <div id="feed">
        <div class="inner">
            <ul class="article_list">
                <Post
                    v-for="p in mainPosts"
                    :key="p.id"
                    :post="p">
                </Post>
            </ul>
        </div>
    </div>
</template>

<script>
import Post from "./post.vue"

export default {
    components: {
        'Post': Post,
    },
    computed: {
        mainPosts() {
            return this.$store.state.posts.mainPosts;
        }
    },
}
</script>

<style>
#feed {
    margin: 8vh 0;
}
.article_list li:not(:first-child) {
    margin-top: 32px;
}

.article dt {
    display: grid;
    grid-template-columns: 2fr auto;
    gap: 16px;
}
.article .article_title {    
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
    font-size: 24px;
    font-weight: bold;
}
.article .article_date {
    text-align: right;
    display: flex;
    align-items: center;
    color: #bcb8b8;
    font-size: 14px;
}
.article .article_body {
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    display: -webkit-box;
    margin-top: 8px;
    font-size: 16px;
}
</style>