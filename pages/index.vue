<template>
    <div id="app">
      
        <Header></Header>
        <Search></Search>
        <Feed></Feed>

        <router-link to="/create" class="btn-create">글쓰기</router-link>

    </div>
</template>

<script>
    import Header from '@/components/header.vue'
    import Search from '@/components/search.vue'
    import Feed from '@/components/feed.vue'

    export default {
        name: 'IndexPage',
        components: {
            'Header': Header,
            'Search': Search,
            'Feed': Feed,
        },
        computed: {
            isSearched() {
                return this.$store.state.posts.isSearched.searched;
            },
        }
    }
</script>

<style>
    * {
        margin:0; 
        padding:0; 
        box-sizing: border-box;
        color: #3e3c3c;
    }
    html {
        background-color: #FAF6F3;
    }
    .__nuxt-error-page {
        background-color: #FAF6F3;
    }
    .inner {
        max-width: 415px;
        width: 100%;
        margin: auto;
    }

    li { 
        list-style-type: none; 
    }
    a {
        text-decoration: none;
        color: #3e3c3c;
    }
    a:focus {
        outline: none;
    }
    ::selection {
        background-color: #3c16cbb8;
        color: #fff;
    }
    
    /* input */
    input {
        border: none;
        background-color: #EEE8E3 !important;
        outline: none;
        padding: 8px 12px;
        border-radius: 4px;
        height: 40px;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 30px #EEE8E3 inset !important;
    }
    label {
        text-indent: -999999px;
        width: 0px;
        height: 0px;
        display: none;
    }

    input[type="search"] {
        width: 100%;
        cursor: pointer;
    }
    textarea {
        border: none;
        background-color: #EEE8E3;
        outline: none;
        padding: 8px 12px;
        border-radius: 4px;
        width: 100%;
        resize: none;
    }
    button {
        width: 100%;
        background-color: #3e3c3c;
        color: #F8F3F2;
        cursor: pointer;
        outline: none;
        padding: 8px 12px;
        border-radius: 4px;
        height: 40px;
    }

    /* form */
    .search-form > li:not(:first-child) {
        margin-top: 8px;
    }
    .search-form li ul {
        display: grid;
        grid-template-columns: 3fr 1fr;
        grid-gap: 8px;
    }
    .search-form li ul li:first-child {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 8px;
    }
    
    .search-form input[type="date"] {
        width: 100%;
        cursor: pointer;
    }
    .search-form button {
        min-width: 56px;
    }
    .search-form button:hover {
        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.4s;
    }

    /* button */
    .btn-create {
        position: fixed;
        bottom: 5vw;
        right: calc(50vw - 415px / 2);
        width: 15vh;
        height: 15vh;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #3e3c3c;
        color: #F8F3F2;
        font-size: 1rem;
        padding: 0.4rem;
        box-shadow: 0 8px 8px rgba(0, 0, 0, 0.12);
    }
    .btn-back {
        text-indent: -9999px;
        width: 24px;
        height: 24px;
        display: block;
        position: fixed;
        top: 12px;
        left: calc(50vw - 415px / 2);
        z-index: 1;
        background: url('@/static/img/btn-back.png') no-repeat 50% 50%;
        background-size: cover;
        border: none;
        outline: none;
    }

    /* create */
    #create #header {
        position: fixed;
        top: 0;
        width: 100%;
    }
    #create #header .logo {
        padding: 8px 0;
    }
    #create #header .logo img {
        height: 24px;
    }

    /* posts */
    .article .article_title {
        font-size: 24px;
        font-weight: bold;
        word-break: break-all;
    }
    .article .article_date {
        color: #bcb8b8;
        font-size: 14px;
        text-align: right;
    }
    .article .article_body {
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        display: -webkit-box;
        margin-top: 8px;
        font-size: 16px;
    }

    /* RESPONSIVE */
    @media all and (max-width: 425px) {
        .inner {
            width: 90%;
        }
        .btn-create {
            right: 5vw;
        }
        .btn-back {
            left: 5vw;
        }
    }

</style>