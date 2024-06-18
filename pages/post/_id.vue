<template>
    <div id="article_page">

        <router-link to="/" class="btn-back">뒤로</router-link>
        <Header></Header>

        <div class="inner">
            <div v-if="post" class="article_wrap">
                <Post :post="post"></Post>
            </div>
            <div v-else class="article_error">
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
    }
</script>

<style>
    #article_page #header {
        position: fixed;
        top: 0;
        width: 100%;
    }
    #article_page #header .logo {
        padding: 8px 0;
    }
    #article_page #header .logo img {
        height: 24px;
    }

    #article_page .article_wrap {
        margin-top: 46px;
        padding: 8px 0 8vh;
    }
    #article_page .article_error {
        text-align: center;
        margin-top: 46px;
        display: flex;
        height: calc(100vh - 48px);
        align-items: center;
        justify-content: center;
    }
</style>