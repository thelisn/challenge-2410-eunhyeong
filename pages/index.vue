<template>
    <div id="app">
      
        <Header></Header>
        <Search></Search>
        <Feed></Feed>

        <BtnCreate></BtnCreate>

    </div>
</template>

<script>
    import Header from '@/components/header.vue'
    import Search from '@/components/search.vue'
    import Feed from '@/components/feed.vue'
    import BtnCreate from '@/components/btncreate.vue';

    export default {
        name: 'IndexPage',
        components: {
            'Header': Header,
            'Search': Search,
            'Feed': Feed,
            'BtnCreate': BtnCreate,
        },
        created() {
            this.$store.dispatch('header/main', {
                headerMain: true,
            })
            this.$store.dispatch('header/reset', {
                headerReset: true,
            })
        },
    }
</script>

<style scoped lang="scss">
</style>