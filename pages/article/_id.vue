<template>
    <div id="article_page">
        <router-link to="/" class="btn-back">뒤로</router-link>
        <Header></Header>
        <div class="inner">
            {{ mainPosts }}
        </div>
    </div>
</template>

<script>
import Header from '../../components/header.vue';
export default {
    components: {
        'Header': Header,
    },
    computed: {
        mainPosts() {
            return this.$store.state.articles.mainPosts;
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
</style>