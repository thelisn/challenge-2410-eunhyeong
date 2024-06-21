<template>
    <div id="article-page">

        <button
            class="btn-back" 
            @click="clickBack">
                뒤로
        </button>
        <Header></Header>

        <div class="inner">
            <div v-if="post" class="article-wrap">
                <Post :post="post"></Post>
            </div>
            <div v-else class="article-error">
                해당 아이디의 게시글이 존재하지 않습니다. 
            </div>
        </div>

    </div>
</template>

<script>
    import Header from '@/components/header.vue'
    import Post from '@/components/post.vue'

    export default {
        components: {
            'Header': Header,
            'Post': Post
        },
        computed: {
            post() {
                return this.$store.state.posts.mainPosts.find(v => v.id === parseInt(this.$route.params.id, 10));
            },
        },
        methods: {
            clickBack() {
                this.$store.dispatch('posts/search', {
                    searched: false,
                    searchKey: '',
                });
                this.$router.push({path: '/'})
            },
        }
    }
</script>

<style scoped lang="scss">
    @import '@/assets/scss/pages/post-detail.scss';
    @import '@/assets/scss/layout/header-small.scss';
</style>