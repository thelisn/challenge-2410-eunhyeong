<template>
    <div id="header">

        <div class="inner">
            <router-link to="/" class="logo">
                <img src="@/assets/img/logo-black.png" v-on:click="clickLogo">
            </router-link>
        </div>
        
    </div>
</template>

<script>
    export default {
        methods: {
            clickLogo() {
                this.$store.dispatch('posts/search', {
                    searched: false,
                    searchKey: '',
                });
            },
        },
    }
</script>

<style scoped lang="scss">

</style>