<template>
    <div id="article-page">

        <BtnBack></BtnBack>
        <Header></Header>

        <div class="inner">

            <!-- 게시글 -->
            <div v-if="post" class="article-wrap">
                <Post :post="post"></Post>
            </div>
            <!-- 게시글 없을 시 -->
            <div v-else class="article-error">
                해당 아이디의 게시글이 존재하지 않습니다. 
            </div>

        </div>

    </div>
</template>

<script>
    import Header from '@/components/header.vue'
    import Post from '@/components/post.vue'
    import BtnBack from '@/components/btnback.vue';

    export default {
        components: {
            'Header': Header,
            'Post': Post,
            'BtnBack': BtnBack
        },
        computed: {
            post() {
                return this.$store.state.posts.mainPosts.find(v => v.id === parseInt(this.$route.params.id, 10));
            },
        },
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/pages/post-detail.scss';
    @import '@/assets/scss/layout/header-small.scss';
</style>