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

<style scoped>
    .article_list {
        margin: 8vh 0;
    }
    .article_list li:not(:first-child) {
        margin-top: 32px;
    }
</style>