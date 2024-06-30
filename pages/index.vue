<template>
    <div id="app">
      
        <Header :main="this.main" :reset="this.reset"></Header>
        <Search @main="getMain" @reset="getReset"></Search>
        <Feed @main="getMain"></Feed>

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
        data() {
            return {
                main: null,
                reset: null,
            }
        },
        methods: {
            getMain(data) {
                return this.main = data;
            },
            getReset(data) {
                return this.reset = data;
            },
        },
    }
</script>

<style scoped lang="scss">
</style>