<template>
    <div id="app">
      
        <Header 
            :class="{ 'main': !header.headerMain, 'reset': headerReset }">
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
                headerMain: '',
                headerReset: true,
            }
        },
        components: {
            'Header': Header,
            'Search': Search,
            'Feed': Feed,
        },
        created() {
            this.fetchData()
        },
        computed: {
            header() {
                return this.$store.state.header.headerMain;
            }
        },
    }
</script>

<style scoped lang="scss">

</style>