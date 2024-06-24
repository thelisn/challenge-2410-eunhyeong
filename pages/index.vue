<template>
    <div id="app">
      
        <Header 
            :class="{ 'main': headerMain === true }">
        </Header>
        <Search></Search>
        <Feed></Feed>

        <router-link 
            to="/create" 
            class="btn-create">
            글쓰기
        </router-link>

    </div>
</template>

<script>
    import Header from '@/components/header.vue'
    import Search from '@/components/search.vue'
    import Feed from '@/components/feed.vue'

    export default {
        name: 'IndexPage',
        data() {
            return {
                headerMain: true,
            }
        },
        components: {
            'Header': Header,
            'Search': Search,
            'Feed': Feed,
        },
        computed: {
            isSearched() {
                return this.$store.state.posts.isSearched.searched;
            },
        },
    }
</script>

<style scoped lang="scss">

</style>